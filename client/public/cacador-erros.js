/* =========================================================================
   🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico.
   Anota sozinho:
     - erros da página (vermelhos do console, falhas no código)
     - chamadas ao servidor que deram errado (/api…): o endereço, o código
       (404, 500…) e a mensagem que o servidor devolveu
     - quando o servidor nem responde (desligado)
   Toque no botão 🐞 (canto de baixo, à esquerda): ver · 📋 copiar · ⬇ baixar.
   Chaves e senhas são escondidas antes de anotar.
   ========================================================================= */
(function () {
  'use strict';
  var lista = [];
  var origFetch = window.fetch;
  var MAX = 200;
  var botao = null, painel = null;

  // esconde chaves/senhas que possam aparecer nas mensagens
  function esconder(t) {
    return String(t == null ? '' : t)
      .replace(/AIza[0-9A-Za-z_\-]{20,}/g, 'AIza…(escondida)')
      .replace(/\b(sk-(?:ant-|or-|proj-)?)[A-Za-z0-9_\-]{12,}/g, '$1…(escondida)')
      .replace(/\b(gsk_|pplx-|xai-|ghp_|github_pat_)[A-Za-z0-9_\-]{10,}/g, '$1…(escondida)')
      .replace(/(Bearer\s+)[A-Za-z0-9._\-]{12,}/gi, '$1…(escondida)')
      .replace(/(postgres(?:ql)?:\/\/[^:\s]+:)[^@\s]+@/gi, '$1…(escondida)@');
  }
  function texto(x) {
    if (x instanceof Error) return x.name + ': ' + x.message + (x.stack ? '\n' + x.stack.split('\n').slice(1, 4).join('\n') : '');
    if (typeof x === 'object') { try { return JSON.stringify(x); } catch (e) { return String(x); } }
    return String(x);
  }
  function anotar(tipo, msg, extra) {
    var item = { quando: new Date().toLocaleTimeString('pt-BR'), tipo: tipo, msg: esconder(msg).slice(0, 1500), extra: extra ? esconder(extra).slice(0, 1500) : '' };
    var ult = lista[lista.length - 1];
    if (ult && ult.tipo === item.tipo && ult.msg === item.msg) { ult.vezes = (ult.vezes || 1) + 1; }
    else { lista.push(item); if (lista.length > MAX) lista.shift(); }
    atualizarBotao();
    if (painel && !painel.hidden) desenhar();
  }

  // ── o EXPLICADOR: diz em português se é normal, configuração ou defeito do projeto ──
  var REGRAS = [
    [/sem resposta|Failed to fetch|ECONNREFUSED|NetworkError|Load failed/i, '⚙️ Configuração', 'O servidor está DESLIGADO (ou caiu). Não é defeito: ligue com  npm run servidor  e tente de novo.'],
    [/\b429\b|quota|RESOURCE_EXHAUSTED|rate.?limit|Too Many Requests/i, '⚙️ Configuração', 'O limite da chave da IA acabou (comum na chave grátis). Espere um pouco ou use outra chave. Não é defeito.'],
    [/API.?key|chave|\b401\b|\b403\b|PERMISSION_DENIED|invalid.?key|Unauthorized|não configurad/i, '⚙️ Configuração', 'Problema com a CHAVE da IA (faltando, errada ou sem permissão). Coloque/troque a chave em ⚙️ Config. Não é defeito do projeto.'],
    [/relation .* does not exist|no such table|does not exist|tabela/i, '🔧 Defeito do projeto', 'O BANCO não tem a tabela que essa função usa (as tabelas não foram criadas). É defeito do projeto — mande este relatório para a IA.'],
    [/Dados invalidos|Dados inválidos|ZodError|Required|Expected/i, '⚠️ Atenção', 'Faltou ou está errado algum CAMPO do que foi mandado (veja o "detalhe"). Se você preencheu tudo, é defeito do projeto (a tela não manda o campo que o servidor pede).'],
    [/\b413\b|too large|grande demais|PayloadTooLarge/i, '⚙️ Configuração', 'O arquivo/texto é GRANDE DEMAIS para o servidor. Tente com um menor.'],
    [/não encontrad|nao encontrad|not found/i, '✅ Normal', 'Pediu algo que NÃO EXISTE (ainda não foi criado, ou já foi apagado). Normalmente não é defeito.'],
    [/servidor 404|Cannot (GET|POST|PUT|PATCH|DELETE)/i, '🔧 Defeito do projeto', 'A tela chama um ENDEREÇO que o servidor não tem. É defeito do projeto (falta a rota).'],
    [/servidor 5\d\d|Erro ao /i, '🔧 Defeito do projeto', 'Deu erro DENTRO do servidor. O motivo de verdade aparece na parte "Erros do servidor" (abaixo). Mande o relatório para a IA.'],
    [/ReferenceError|TypeError|SyntaxError|is not defined|is not a function|Cannot read prop/i, '🔧 Defeito do projeto', 'Erro no CÓDIGO (algo que o programa esperava e não existe). É defeito do projeto.'],
  ];
  function explicar(x) {
    var t = x.tipo + ' ' + x.msg + ' ' + (x.extra || '');
    for (var i = 0; i < REGRAS.length; i += 1) if (REGRAS[i][0].test(t)) return { selo: REGRAS[i][1], texto: REGRAS[i][2] };
    return { selo: '❓ Ver com a IA', texto: 'Não reconheci este erro. Copie o relatório e mande para a IA.' };
  }
  var doServidor = [], servidorInfo = '';
  function buscarServidor() {
    if (!origFetch) return Promise.resolve();
    return origFetch('/api/_erros', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (j && j.erros) { doServidor = j.erros.map(function (e) { return { quando: e.quando, tipo: 'servidor', msg: e.rota + ' — ' + e.msg }; }); servidorInfo = j.arquivo ? 'Também gravado no arquivo: ' + j.arquivo : ''; }
      else { servidorInfo = 'O servidor desta versão não tem o caderno de erros.'; }
    }).catch(function () { servidorInfo = 'Não consegui falar com o servidor (está desligado?).'; });
  }

  // 1) erros da página
  var origErro = console.error;
  console.error = function () { try { anotar('console', Array.prototype.map.call(arguments, texto).join(' ')); } catch (e) {} return origErro.apply(console, arguments); };
  window.addEventListener('error', function (e) { anotar('erro no código', (e.message || 'erro') + (e.filename ? ' — ' + e.filename.split('/').slice(-2).join('/') + ':' + e.lineno : ''), e.error && e.error.stack ? e.error.stack.split('\n').slice(1, 4).join('\n') : ''); });
  window.addEventListener('unhandledrejection', function (e) { anotar('promessa', texto(e.reason)); });

  // 2) chamadas ao servidor
  if (origFetch) window.fetch = function (entrada, op) {
    var url = typeof entrada === 'string' ? entrada : (entrada && entrada.url) || '';
    var metodo = (op && op.method) || (entrada && entrada.method) || 'GET';
    var p = origFetch.apply(this, arguments);
    p.then(function (r) {
      if (!r.ok) r.clone().text().then(function (corpo) {
        var msg = corpo; try { var j = JSON.parse(corpo); msg = j.message || j.error || j.erro || corpo; } catch (e) {}
        anotar('servidor ' + r.status, metodo + ' ' + url, 'Resposta: ' + String(msg).slice(0, 600) + (r.status === 404 ? '\n(404 = o servidor não tem esse endereço, ou não achou o que foi pedido)' : r.status >= 500 ? '\n(500 = deu erro DENTRO do servidor — ver a janela/terminal do servidor)' : ''));
      }).catch(function () {});
    }, function (er) {
      anotar('sem resposta', metodo + ' ' + url, 'O servidor não respondeu (' + (er && er.message) + '). Ele está ligado? (npm run servidor)');
    });
    return p;
  };

  // 3) o botão e o painel
  function css(el, s) { el.setAttribute('style', s); return el; }
  function atualizarBotao() {
    if (!botao) return;
    var n = lista.reduce(function (s, x) { return s + (x.vezes || 1); }, 0);
    botao.textContent = '🐞 ' + n;
    botao.style.background = n ? '#b42318' : '#53603a';
  }
  function relatorio() {
    var L = ['# 🐞 Erros do Jurídico', '', 'Página: ' + location.pathname + location.hash, 'Quando: ' + new Date().toLocaleString('pt-BR'), 'Aparelho: ' + navigator.userAgent, ''];
    L.push('# Na tela', '');
    if (!lista.length) L.push('Nenhum erro anotado.', '');
    lista.forEach(function (x, i) { var ex = explicar(x); L.push('## ' + (i + 1) + '. [' + x.quando + '] ' + x.tipo + (x.vezes ? ' (×' + x.vezes + ')' : '') + ' — ' + ex.selo, x.msg); if (x.extra) L.push(x.extra); L.push('> ' + ex.texto, ''); });
    L.push('# Erros do servidor (o motivo de verdade)', '', servidorInfo, '');
    doServidor.forEach(function (x, i) { var ex = explicar(x); L.push('## S' + (i + 1) + '. [' + x.quando + '] ' + ex.selo, x.msg, '> ' + ex.texto, ''); });
    return L.join('\n');
  }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function desenhar() {
    var corpo = painel.querySelector('[data-c]');
    var item = function (x) {
      var ex = explicar(x);
      return '<div style="border-bottom:1px solid #ddd;padding:8px 0"><b style="color:#b42318">' + esc(x.tipo) + '</b> <small style="color:#666">' + esc(x.quando) + (x.vezes ? ' ×' + x.vezes : '') + '</small> <b>' + esc(ex.selo) + '</b><div style="white-space:pre-wrap;word-break:break-word">' + esc(x.msg) + '</div>' + (x.extra ? '<div style="white-space:pre-wrap;word-break:break-word;color:#555;font-size:12px">' + esc(x.extra) + '</div>' : '') + '<div style="background:#f4f2ea;border-radius:8px;padding:6px 8px;margin-top:4px">💡 ' + esc(ex.texto) + '</div></div>';
    };
    corpo.innerHTML = '<h4 style="margin:10px 0 4px">📱 Na tela</h4>' + (lista.length ? lista.slice().reverse().map(item).join('') : '<p style="color:#666">Nenhum erro na tela. 🎉</p>') +
      '<h4 style="margin:14px 0 4px">🖥️ No servidor (o motivo de verdade)</h4><small style="color:#666">' + esc(servidorInfo || 'Buscando…') + '</small>' + (doServidor.length ? doServidor.slice().reverse().map(item).join('') : '<p style="color:#666">Nenhum erro no servidor.</p>');
  }
  function montar() {
    botao = css(document.createElement('button'), 'position:fixed;left:10px;bottom:10px;z-index:2147483646;border:0;border-radius:999px;padding:10px 14px;min-height:44px;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.3);cursor:pointer;opacity:.9');
    botao.title = 'Caçador de erros';
    botao.onclick = function () { painel.hidden = !painel.hidden; if (!painel.hidden) { desenhar(); buscarServidor().then(desenhar); } };
    painel = css(document.createElement('div'), 'position:fixed;left:8px;right:8px;bottom:64px;max-width:640px;max-height:70vh;overflow:auto;z-index:2147483647;background:#fff;color:#1f2230;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.35);padding:12px 14px;font:14px/1.45 system-ui,sans-serif');
    painel.hidden = true;
    painel.innerHTML = '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px"><b style="flex:1;font-size:16px">🐞 Erros anotados</b>' +
      '<button data-a="copiar" style="padding:8px 12px;min-height:40px;border-radius:8px;border:1px solid #aaa;background:#f4f2ea;color:#1f2230;font:600 14px system-ui,sans-serif">📋 Copiar</button>' +
      '<button data-a="baixar" style="padding:8px 12px;min-height:40px;border-radius:8px;border:1px solid #aaa;background:#f4f2ea;color:#1f2230;font:600 14px system-ui,sans-serif">⬇ Baixar</button>' +
      '<button data-a="limpar" style="padding:8px 12px;min-height:40px;border-radius:8px;border:1px solid #aaa;background:#f4f2ea;color:#1f2230;font:600 14px system-ui,sans-serif">🧹 Limpar</button>' +
      '<button data-a="fechar" style="padding:8px 12px;min-height:40px;border-radius:8px;border:1px solid #aaa;background:#f4f2ea;color:#1f2230;font:600 14px system-ui,sans-serif">✕</button></div>' +
      '<small style="color:#666">Copie ou baixe e mande para a IA: ela diz se é erro normal (ex.: faltou a chave, servidor desligado) ou defeito do projeto. Chaves e senhas já saem escondidas.</small><div data-c></div>';
    painel.addEventListener('click', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a'); if (!a) return;
      if (a === 'fechar') painel.hidden = true;
      if (a === 'limpar') { lista = []; doServidor = []; if (origFetch) origFetch('/api/_erros', { method: 'DELETE' }).catch(function () {}); atualizarBotao(); desenhar(); }
      if (a === 'copiar') { buscarServidor(); var t = relatorio(); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { e.target.textContent = '✅ Copiado'; setTimeout(function () { e.target.textContent = '📋 Copiar'; }, 1500); }, function () { window.prompt('Copie o texto:', t); }); }
      if (a === 'baixar') { var b = new Blob([relatorio()], { type: 'text/markdown;charset=utf-8' }); var l = document.createElement('a'); l.href = URL.createObjectURL(b); l.download = 'erros-juridico-' + new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-') + '.md'; document.body.appendChild(l); l.click(); setTimeout(function () { URL.revokeObjectURL(l.href); l.remove(); }, 3000); }
    });
    document.body.appendChild(painel); document.body.appendChild(botao);
    atualizarBotao();
  }
  if (document.body) montar(); else document.addEventListener('DOMContentLoaded', montar);
  window.CacadorDeErros = { relatorio: relatorio, get lista() { return lista.slice(); } };
})();
