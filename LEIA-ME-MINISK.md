# ⚖️ Jurídico COMPLETO — versão PROVISÓRIA para testar no Mini SK

É a mesma versão completa (com as rotas consertadas), só que ligando do jeito do **SK3**, que abriu no Mini SK.

## O segredo do SK3
O SK3 liga só a **tela** (`vite`). Os Jurídicos ligavam o **servidor inteiro** (`tsx server/index.ts`) direto — se uma peça falha, nada abre.
Aqui o `npm run dev` agora liga **só a tela**, igual ao SK3.

## Como testar no Mini SK (com o Node)
1. `npm install`
2. `npm run dev` → abre a **tela** na porta **5173** (igual ao SK3).
   - As telas aparecem. O que depende do servidor (IA, banco, PDPJ…) ainda não responde.
3. Para ligar o **servidor junto** (num 2º terminal, se o Mini SK deixar): `npm run servidor` → porta **5000**.
   A tela (5173) já manda as chamadas `/api` para ele sozinha.

## O que mudou em relação à versão do .exe
- `dev` = só a tela (`vite --host 0.0.0.0 --port 5173`) · `servidor` = o servidor · `start` continua igual.
- Tirei o **Electron** daqui (só serve para fazer o .exe no GitHub, e é pesado/difícil de instalar no celular).
- `vite.config.ts`: as chamadas `/api` vão para o servidor (porta 5000) quando ele estiver ligado.

Para o **.exe**, continue usando a outra versão (Juridico-Completo-EXE).
Se der erro, mande um print das mensagens em vermelho do terminal.

## 🐞 Caçador de erros (novo)
No canto de baixo, à esquerda, tem o botão **🐞** com o número de erros. Ele só **observa e anota** (não muda nada no Jurídico).
- **📱 Na tela**: erros do código, chamadas ao servidor que deram errado (com a mensagem) e quando o servidor está desligado.
- **🖥️ No servidor**: o **motivo de verdade** de cada erro (antes o Jurídico jogava fora e só dizia "Erro ao salvar…"), com a rota. Também fica gravado no arquivo **erros-servidor.log**, na pasta do projeto — a IA do Mini SK pode ler esse arquivo.
- Cada erro vem com a **explicação em português**: ✅ Normal · ⚙️ Configuração (servidor desligado, chave da IA, limite) · ⚠️ Atenção (campo faltando) · 🔧 Defeito do projeto.
- **📋 Copiar** ou **⬇ Baixar** → mande para a IA.
- Chaves e senhas saem **escondidas**.
- "Dados inválidos" agora diz **qual campo** está errado.
Para tirar o botão: apague a linha `cacador-erros.js` do `client/index.html`.

## 💾 Salvar do Playground (consertado 20/10)
Antes: no APK, na versão "build" ou com só a tela ligada, o **Salvar** dava "Falha ao salvar" — porque ele salva no **servidor** (banco), e ali não tinha servidor.
Agora: se o servidor não responder, ele **guarda no próprio aparelho** e avisa "Salvo no aparelho 📱". Esses aparecem na lista com 📱 (dá para abrir, renomear e apagar).
Com o servidor ligado (`npm run servidor`), continua salvando no banco, como antes.

## 🔧 Consertos de 20/10 — a tela "Algo deu errado"
- **Robô DJEN → Executar**: dava **"Cannot read properties of undefined (reading 'total')"** e a tela inteira caía ("Algo deu errado"). O motivo: o código pegava a resposta do servidor **sem abrir** (faltava o `.json()`) e tentava ler o total. Consertado — e a tela agora não cai mesmo se a resposta vier vazia.
- **Tramitação → buscar publicações**: o mesmo defeito fazia aparecer **sempre "Nenhuma publicação ainda"**, mesmo quando encontrava. Consertado.
- Avisos de "processos encontrados" não mostram mais "undefined".

## 🦙 29/10 — Ollama (IA grátis no próprio aparelho)
- Na tela principal, no seletor de IA (Pro/Flash/Perplexity/Própria), toque em **🦙 Ollama (grátis no aparelho)**.
- Abre a página `ollama.html` (HTML simples): **🦙 Ligar o Ollama** → escolha o modelo (ou ⬇ baixe: no PC `llama3.2:3b`, no celular `llama3.2:1b`) → **✅ Usar o Ollama no jurídico**.
- Vale para as petições/ações (Chave Própria) e para o Assistente de código. **↩ Voltar para o Gemini** desfaz.
- No celular: ligue o Ollama pelo Mini SK (📱 Termux → 🦙 Ligar o Ollama) e o servidor com **🔁 Ligar o servidor sem cair**.
