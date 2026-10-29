/* 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do celular).
   O servidor do jurídico fala com ele em http://127.0.0.1:11434 (sem chave, sem internet).
   Rotas:
     GET  /api/ollama/status         → está ligado? quais modelos tem?
     POST /api/ollama/ligar          → liga o "ollama serve" escondido (se estiver instalado)
     POST /api/ollama/baixar {modelo} → baixa um modelo (ex.: llama3.2:3b) — demora alguns minutos
   Para USAR: a tela grava "Chave Própria" = ollama, URL = http://127.0.0.1:11434/v1 e o modelo escolhido. */
import type { Express } from "express";
import { spawn } from "child_process";
import path from "path";

const BASE = (process.env.OLLAMA_URL || "http://127.0.0.1:11434").replace(/\/+$/, "");

async function comTempo(url: string, init: any = {}, ms = 3000) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  try { return await fetch(url, { ...init, signal: c.signal }); } finally { clearTimeout(t); }
}

async function status() {
  try {
    const r = await comTempo(BASE + "/api/tags", {}, 2500);
    if (!r.ok) return { ligado: false, base: BASE, modelos: [] as any[] };
    const j: any = await r.json().catch(() => ({}));
    const modelos = (j.models || []).map((m: any) => ({ nome: m.name || m.model, tamanhoGB: m.size ? Math.round((m.size / 1e9) * 10) / 10 : null }));
    return { ligado: true, base: BASE, modelos };
  } catch {
    return { ligado: false, base: BASE, modelos: [] as any[] };
  }
}

export function ligarOllama(app: Express) {
app.get("/api/ollama/status", async (_req, res) => {
    res.json(await status());
  });
  
  app.post("/api/ollama/ligar", async (_req, res) => {
    const antes = await status();
    if (antes.ligado) return res.json({ ...antes, msg: "O Ollama já estava ligado ✅" });
    const env = {
      ...process.env,
      OLLAMA_ORIGINS: "*",            // deixa a tela (e o plano B do celular) falar com ele
      OLLAMA_NUM_PARALLEL: "1",        // gasta menos memória
      OLLAMA_MAX_LOADED_MODELS: "1",
      OLLAMA_KEEP_ALIVE: "10m",
    };
    const tentativas: Array<[string, string[]]> = [["ollama", ["serve"]]];
    if (process.platform === "win32" && process.env.LOCALAPPDATA) tentativas.push([path.join(process.env.LOCALAPPDATA, "Programs", "Ollama", "ollama.exe"), ["serve"]]);
    for (const [cmd, args] of tentativas) {
      try {
        const p = spawn(cmd, args, { detached: true, stdio: "ignore", windowsHide: true, env });
        p.on("error", () => {});
        p.unref();
      } catch { continue; }
      for (let i = 0; i < 10; i++) {
        await new Promise((r) => setTimeout(r, 1000));
        const s = await status();
        if (s.ligado) return res.json({ ...s, msg: "Liguei o Ollama ✅" });
      }
    }
    res.json({
      ...(await status()),
      msg: "Não achei o Ollama neste aparelho. No computador: instale em ollama.com/download. No celular (Termux): pkg install ollama.",
    });
  });
  
  app.post("/api/ollama/baixar", async (req, res) => {
    const modelo = String((req.body && req.body.modelo) || "").trim();
    if (!/^[\w.:\-/]+$/.test(modelo)) return res.status(400).json({ erro: "Nome de modelo inválido." });
    const s = await status();
    if (!s.ligado) return res.status(503).json({ erro: "O Ollama está desligado. Toque em 🦙 Ligar o Ollama primeiro." });
    try {
      const r = await fetch(BASE + "/api/pull", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: modelo, stream: false }) });
      const j: any = await r.json().catch(() => ({}));
      if (!r.ok || j.error) return res.status(502).json({ erro: j.error || "O Ollama não conseguiu baixar (HTTP " + r.status + ")." });
      res.json({ ...(await status()), msg: "Baixei o " + modelo + " ✅" });
    } catch (e: any) {
      res.status(502).json({ erro: "Falhou ao baixar: " + (e && e.message) });
    }
  });
}
