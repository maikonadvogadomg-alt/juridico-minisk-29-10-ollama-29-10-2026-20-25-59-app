# 🧬 Receita para recriar: Assistente Jurídico

_Gerada sem IA, lendo 162 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Assistente Jurídico
- **Partes de código:** 103 (76 tela, 12 logica, 10 servidor, 4 dados, 1 estilo)
- **Tem servidor (rotas /api):** sim — veja o passo do servidor
- **Peças de fora (bibliotecas):**  + JSON.stringify(principal) + ,  + q + u + q + , @electric-sql/pglite, @google/genai, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-toast, @radix-ui/react-toggle, @radix-ui/react-toggle-group…

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-init.js         ← dados (era migrations/0000_init.sql)
js/15-db.js           ← dados (era server/db.ts)
js/20-localdb.js      ← Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com  (era server/localdb.ts)
js/25-schema.js       ← dados (era shared/schema.ts)
js/30-cacador-erros.js← 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota soz (era client/public/cacador-erros.js)
js/35-use-mobile.js   ← logica (era client/src/hooks/use-mobile.tsx)
js/40-use-toast.js    ← logica (era client/src/hooks/use-toast.ts)
js/45-queryclient.js  ← logica (era client/src/lib/queryClient.ts)
js/50-utils.js        ← logica (era client/src/lib/utils.ts)
js/55-app.js          ← tela (era client/src/App.tsx)
js/60-postcss-config.js← logica (era postcss.config.js)
js/65-abrir-pronto.js ← Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servid (era scripts/abrir-pronto.mjs)
js/70-iniciar.js      ← Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (era scripts/iniciar.mjs)
js/75-chat.js         ← logica (era shared/models/chat.ts)
js/80-tailwind-config.js← logica (era tailwind.config.ts)
js/85-vite-config.js  ← logica (era vite.config.ts)
js/90-cacador-erros.js← 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcion (era server/cacador-erros.ts)
js/91-djen.js         ← Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API (era server/djen.ts)
js/92-env.js          ← Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves ( (era server/env.ts)
js/93-gemini-ponte.js ← Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google troco (era server/gemini-ponte.ts)
js/94-storage.js      ← servidor (era server/storage.ts)
js/95-tts.js          ← Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet (era server/tts.ts)
js/96-ollama.js       ← 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do c (era server/ollama.ts)
js/97-routes.js       ← servidor (era server/routes.ts)
js/98-web.js          ← Mostra a TELA do app no mesmo endereço do servidor. Era isto que falta (era server/web.ts)
js/98-server.js       ← servidor (era server/index.ts)
js/98-404.js          ← Assistente Jurídico (era client/404.html)
js/98-client.js       ← Assistente Jurídico (era client/index.html)
js/98-auditoria.js    ← Mini SK — 🔗 Meus Links (era client/public/auditoria.html)
js/98-comparador.js   ← Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator)  (era client/public/comparador.html)
js/98-ollama.js       ← 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho (era client/public/ollama.html)
js/98-pwa-install.js  ← tela (era client/src/components/pwa-install.tsx)
js/98-theme-provider.js← tela (era client/src/components/theme-provider.tsx)
js/98-theme-toggle.js ← tela (era client/src/components/theme-toggle.tsx)
js/98-tiptap-editor.js← tela (era client/src/components/tiptap-editor.tsx)
js/98-accordion.js    ← tela (era client/src/components/ui/accordion.tsx)
js/98-alert-dialog.js ← tela (era client/src/components/ui/alert-dialog.tsx)
js/98-alert.js        ← tela (era client/src/components/ui/alert.tsx)
js/98-aspect-ratio.js ← tela (era client/src/components/ui/aspect-ratio.tsx)
js/98-avatar.js       ← tela (era client/src/components/ui/avatar.tsx)
js/98-badge.js        ← tela (era client/src/components/ui/badge.tsx)
js/98-breadcrumb.js   ← tela (era client/src/components/ui/breadcrumb.tsx)
js/98-button.js       ← tela (era client/src/components/ui/button.tsx)
js/98-calendar.js     ← tela (era client/src/components/ui/calendar.tsx)
js/98-card.js         ← tela (era client/src/components/ui/card.tsx)
js/98-carousel.js     ← tela (era client/src/components/ui/carousel.tsx)
js/98-chart.js        ← tela (era client/src/components/ui/chart.tsx)
js/98-checkbox.js     ← tela (era client/src/components/ui/checkbox.tsx)
js/98-collapsible.js  ← tela (era client/src/components/ui/collapsible.tsx)
js/98-command.js      ← tela (era client/src/components/ui/command.tsx)
js/98-context-menu.js ← tela (era client/src/components/ui/context-menu.tsx)
js/98-dialog.js       ← tela (era client/src/components/ui/dialog.tsx)
js/98-drawer.js       ← tela (era client/src/components/ui/drawer.tsx)
js/98-dropdown-menu.js← tela (era client/src/components/ui/dropdown-menu.tsx)
js/98-form.js         ← tela (era client/src/components/ui/form.tsx)
js/98-hover-card.js   ← tela (era client/src/components/ui/hover-card.tsx)
js/98-input-otp.js    ← tela (era client/src/components/ui/input-otp.tsx)
js/98-input.js        ← tela (era client/src/components/ui/input.tsx)
js/98-label.js        ← tela (era client/src/components/ui/label.tsx)
js/98-menubar.js      ← tela (era client/src/components/ui/menubar.tsx)
js/98-navigation-menu.js← tela (era client/src/components/ui/navigation-menu.tsx)
js/98-pagination.js   ← tela (era client/src/components/ui/pagination.tsx)
js/98-popover.js      ← tela (era client/src/components/ui/popover.tsx)
js/98-progress.js     ← tela (era client/src/components/ui/progress.tsx)
js/98-radio-group.js  ← tela (era client/src/components/ui/radio-group.tsx)
js/98-resizable.js    ← tela (era client/src/components/ui/resizable.tsx)
js/98-scroll-area.js  ← tela (era client/src/components/ui/scroll-area.tsx)
js/98-select.js       ← tela (era client/src/components/ui/select.tsx)
js/98-separator.js    ← tela (era client/src/components/ui/separator.tsx)
js/98-sheet.js        ← tela (era client/src/components/ui/sheet.tsx)
js/98-sidebar.js      ← tela (era client/src/components/ui/sidebar.tsx)
js/98-skeleton.js     ← tela (era client/src/components/ui/skeleton.tsx)
js/98-slider.js       ← tela (era client/src/components/ui/slider.tsx)
js/98-switch.js       ← tela (era client/src/components/ui/switch.tsx)
js/98-table.js        ← tela (era client/src/components/ui/table.tsx)
js/98-tabs.js         ← tela (era client/src/components/ui/tabs.tsx)
js/98-textarea.js     ← tela (era client/src/components/ui/textarea.tsx)
js/98-toast.js        ← tela (era client/src/components/ui/toast.tsx)
js/98-toaster.js      ← tela (era client/src/components/ui/toaster.tsx)
js/98-toggle-group.js ← tela (era client/src/components/ui/toggle-group.tsx)
js/98-toggle.js       ← tela (era client/src/components/ui/toggle.tsx)
js/98-tooltip.js      ← tela (era client/src/components/ui/tooltip.tsx)
js/98-auditoria-financeira.js← tela (era client/src/pages/auditoria-financeira.tsx)
js/98-code-assistant.js← tela (era client/src/pages/code-assistant.tsx)
js/98-comparador-juridico.js← tela (era client/src/pages/comparador-juridico.tsx)
js/98-consulta-corporativo.js← tela (era client/src/pages/consulta-corporativo.tsx)
js/98-consulta-pdpj.js← tela (era client/src/pages/consulta-pdpj.tsx)
js/98-consulta-processual.js← tela (era client/src/pages/consulta-processual.tsx)
js/98-filtrador.js    ← tela (era client/src/pages/filtrador.tsx)
js/98-jurisprudencia.js← tela (era client/src/pages/jurisprudencia.tsx)
js/98-legal-assistant.js← tela (era client/src/pages/legal-assistant.tsx)
js/98-login.js        ← tela (era client/src/pages/login.tsx)
js/98-not-found.js    ← tela (era client/src/pages/not-found.tsx)
js/98-painel-processos.js← tela (era client/src/pages/painel-processos.tsx)
js/98-playground.js   ← tela (era client/src/pages/playground.tsx)
js/98-previdenciario.js← tela (era client/src/pages/previdenciario.tsx)
js/98-robo-djen.js    ← tela (era client/src/pages/robo-djen.tsx)
js/98-token-generator.js← tela (era client/src/pages/token-generator.tsx)
js/98-tramitacao.js   ← tela (era client/src/pages/tramitacao.tsx)
js/98-inicio.js       ← Juridico-MiniSK-29-10-Ollama 29-10-2026, 20-25-59 — Juridico-MiniSK-29 (era index.html)
js/98-auditoria.js    ← Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira (era public/auditoria.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `migrations/0000_init.sql` | `js/10-init.js` | dados | — | — |
| 2 | `server/db.ts` | `js/15-db.js` | dados | — | — |
| 3 | `server/localdb.ts` | `js/20-localdb.js` | dados | Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com DATABASE_URL e senha | — |
| 4 | `shared/schema.ts` | `js/25-schema.js` | dados | — | — |
| 5 | `client/public/cacador-erros.js` | `js/30-cacador-erros.js` | logica | 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota sozinho: - erros da pág | — |
| 6 | `client/src/hooks/use-mobile.tsx` | `js/35-use-mobile.js` | logica | useIsMobile, onChange | — |
| 7 | `client/src/hooks/use-toast.ts` | `js/40-use-toast.js` | logica | genId, addToRemoveQueue, dispatch, toast | toast |
| 8 | `client/src/lib/queryClient.ts` | `js/45-queryclient.js` | logica | resolveUrl, throwIfResNotOk, apiRequest | — |
| 9 | `client/src/lib/utils.ts` | `js/50-utils.js` | logica | — | — |
| 10 | `client/src/App.tsx` | `js/55-app.js` | tela | ErrorBoundary, Router, App | queryClient.ts, toaster, tooltip, theme-provider |
| 11 | `client/src/main.tsx` | css/app.css | logica | — | App.tsx |
| 12 | `postcss.config.js` | `js/60-postcss-config.js` | logica | — | — |
| 13 | `scripts/abrir-pronto.mjs` | `js/65-abrir-pronto.js` | logica | Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que ve | — |
| 14 | `scripts/iniciar.mjs` | `js/70-iniciar.js` | logica | Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) mo | — |
| 15 | `shared/models/chat.ts` | `js/75-chat.js` | logica | — | — |
| 16 | `tailwind.config.ts` | `js/80-tailwind-config.js` | logica | — | — |
| 17 | `vite.config.ts` | `js/85-vite-config.js` | logica | — | — |
| 18 | `server/cacador-erros.ts` | `js/90-cacador-erros.js` | servidor | 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcionamento) - guarda os  | — |
| 19 | `server/djen.ts` | `js/91-djen.js` | servidor | Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API do DJEN/CNJ, extrai | localdb.ts |
| 20 | `server/env.ts` | `js/92-env.js` | servidor | Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves (senha do app, chaves | — |
| 21 | `server/gemini-ponte.ts` | `js/93-gemini-ponte.js` | servidor | Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chav | — |
| 22 | `server/storage.ts` | `js/94-storage.js` | servidor | DatabaseStorage | localdb.ts |
| 23 | `server/tts.ts` | `js/95-tts.js` | servidor | Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Franci | — |
| 24 | `server/ollama.ts` | `js/96-ollama.js` | servidor | 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do celular). O servidor  | — |
| 25 | `server/routes.ts` | `js/97-routes.js` | servidor | truncateChatHistory, cleanPemKey, cleanHtml, requireAuth | storage.ts, tts.ts, ollama.ts, djen.ts |
| 26 | `server/web.ts` | `js/98-web.js` | servidor | Mostra a TELA do app no mesmo endereço do servidor. Era isto que faltava: o servidor só ti | — |
| 27 | `server/index.ts` | `js/98-server.js` | servidor | log | cacador-erros.ts, routes.ts, web.ts |
| 28 | `client/404.html` | `js/98-404.js` | tela | Assistente Jurídico | cacador-erros.js, manifest.json, favicon.ico, icon.svg |
| 29 | `client/index.html` | `js/98-client.js` | tela | Assistente Jurídico | cacador-erros.js, manifest.json, favicon.ico, icon.svg |
| 30 | `client/public/auditoria.html` | `js/98-auditoria.js` | tela | Mini SK — 🔗 Meus Links | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |
| 31 | `client/public/comparador.html` | `js/98-comparador.js` | tela | Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator) + BCB (Juros) | — |
| 32 | `client/public/ollama.html` | `js/98-ollama.js` | tela | 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho | — |
| 33 | `client/src/components/pwa-install.tsx` | `js/98-pwa-install.js` | tela | PwaInstallBanner, handler, handleInstall, handleDismiss | button |
| 34 | `client/src/components/theme-provider.tsx` | `js/98-theme-provider.js` | tela | ThemeProvider, toggleTheme, useTheme | — |
| 35 | `client/src/components/theme-toggle.tsx` | `js/98-theme-toggle.js` | tela | ThemeToggle | button, theme-provider |
| 36 | `client/src/components/tiptap-editor.tsx` | `js/98-tiptap-editor.js` | tela | TiptapEditor, applySize, applyLineHeight, Sep | — |
| 37 | `client/src/components/ui/accordion.tsx` | `js/98-accordion.js` | tela | — | utils |
| 38 | `client/src/components/ui/alert-dialog.tsx` | `js/98-alert-dialog.js` | tela | AlertDialogHeader, AlertDialogFooter | utils, button |
| 39 | `client/src/components/ui/alert.tsx` | `js/98-alert.js` | tela | — | utils |
| 40 | `client/src/components/ui/aspect-ratio.tsx` | `js/98-aspect-ratio.js` | tela | — | — |
| 41 | `client/src/components/ui/avatar.tsx` | `js/98-avatar.js` | tela | — | utils |
| 42 | `client/src/components/ui/badge.tsx` | `js/98-badge.js` | tela | Badge | utils |
| 43 | `client/src/components/ui/breadcrumb.tsx` | `js/98-breadcrumb.js` | tela | BreadcrumbSeparator, BreadcrumbEllipsis | utils |
| 44 | `client/src/components/ui/button.tsx` | `js/98-button.js` | tela | — | utils |
| 45 | `client/src/components/ui/calendar.tsx` | `js/98-calendar.js` | tela | Calendar | utils, button |
| 46 | `client/src/components/ui/card.tsx` | `js/98-card.js` | tela | — | utils |
| 47 | `client/src/components/ui/carousel.tsx` | `js/98-carousel.js` | tela | useCarousel | utils, button |
| 48 | `client/src/components/ui/chart.tsx` | `js/98-chart.js` | tela | useChart, ChartStyle, getPayloadConfigFromPayload | utils |
| 49 | `client/src/components/ui/checkbox.tsx` | `js/98-checkbox.js` | tela | — | utils |
| 50 | `client/src/components/ui/collapsible.tsx` | `js/98-collapsible.js` | tela | — | — |
| 51 | `client/src/components/ui/command.tsx` | `js/98-command.js` | tela | CommandDialog, CommandShortcut | utils, dialog |
| 52 | `client/src/components/ui/context-menu.tsx` | `js/98-context-menu.js` | tela | ContextMenuShortcut | utils |
| 53 | `client/src/components/ui/dialog.tsx` | `js/98-dialog.js` | tela | DialogHeader, DialogFooter | utils |
| 54 | `client/src/components/ui/drawer.tsx` | `js/98-drawer.js` | tela | Drawer, DrawerHeader, DrawerFooter | utils |
| 55 | `client/src/components/ui/dropdown-menu.tsx` | `js/98-dropdown-menu.js` | tela | DropdownMenuShortcut | utils |
| 56 | `client/src/components/ui/form.tsx` | `js/98-form.js` | tela | useFormField | utils, label |
| 57 | `client/src/components/ui/hover-card.tsx` | `js/98-hover-card.js` | tela | — | utils |
| 58 | `client/src/components/ui/input-otp.tsx` | `js/98-input-otp.js` | tela | — | utils |
| 59 | `client/src/components/ui/input.tsx` | `js/98-input.js` | tela | — | utils |
| 60 | `client/src/components/ui/label.tsx` | `js/98-label.js` | tela | — | utils |
| 61 | `client/src/components/ui/menubar.tsx` | `js/98-menubar.js` | tela | MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup | utils |
| 62 | `client/src/components/ui/navigation-menu.tsx` | `js/98-navigation-menu.js` | tela | — | utils |
| 63 | `client/src/components/ui/pagination.tsx` | `js/98-pagination.js` | tela | Pagination, PaginationLink, PaginationPrevious, PaginationNext | utils, button |
| 64 | `client/src/components/ui/popover.tsx` | `js/98-popover.js` | tela | — | utils |
| 65 | `client/src/components/ui/progress.tsx` | `js/98-progress.js` | tela | — | utils |
| 66 | `client/src/components/ui/radio-group.tsx` | `js/98-radio-group.js` | tela | — | utils |
| 67 | `client/src/components/ui/resizable.tsx` | `js/98-resizable.js` | tela | ResizablePanelGroup, ResizableHandle | utils |
| 68 | `client/src/components/ui/scroll-area.tsx` | `js/98-scroll-area.js` | tela | — | utils |
| 69 | `client/src/components/ui/select.tsx` | `js/98-select.js` | tela | — | utils |
| 70 | `client/src/components/ui/separator.tsx` | `js/98-separator.js` | tela | — | utils |
| 71 | `client/src/components/ui/sheet.tsx` | `js/98-sheet.js` | tela | SheetHeader, SheetFooter | utils |
| 72 | `client/src/components/ui/sidebar.tsx` | `js/98-sidebar.js` | tela | useSidebar, SidebarProvider, handleKeyDown, Sidebar | use-mobile, utils, button, input |
| 73 | `client/src/components/ui/skeleton.tsx` | `js/98-skeleton.js` | tela | Skeleton | utils |
| 74 | `client/src/components/ui/slider.tsx` | `js/98-slider.js` | tela | — | utils |
| 75 | `client/src/components/ui/switch.tsx` | `js/98-switch.js` | tela | — | utils |
| 76 | `client/src/components/ui/table.tsx` | `js/98-table.js` | tela | — | utils |
| 77 | `client/src/components/ui/tabs.tsx` | `js/98-tabs.js` | tela | — | utils |
| 78 | `client/src/components/ui/textarea.tsx` | `js/98-textarea.js` | tela | — | utils |
| 79 | `client/src/components/ui/toast.tsx` | `js/98-toast.js` | tela | — | utils |
| 80 | `client/src/components/ui/toaster.tsx` | `js/98-toaster.js` | tela | Toaster | use-toast, toast |
| 81 | `client/src/components/ui/toggle-group.tsx` | `js/98-toggle-group.js` | tela | — | utils, toggle |
| 82 | `client/src/components/ui/toggle.tsx` | `js/98-toggle.js` | tela | — | utils |
| 83 | `client/src/components/ui/tooltip.tsx` | `js/98-tooltip.js` | tela | — | utils |
| 84 | `client/src/pages/auditoria-financeira.tsx` | `js/98-auditoria-financeira.js` | tela | AuditoriaFinanceira | button |
| 85 | `client/src/pages/code-assistant.tsx` | `js/98-code-assistant.js` | tela | detectProvider, CodeBlock, doCopy, RenderText | button, textarea, input, label |
| 86 | `client/src/pages/comparador-juridico.tsx` | `js/98-comparador-juridico.js` | tela | ComparadorJuridico | button |
| 87 | `client/src/pages/consulta-corporativo.tsx` | `js/98-consulta-corporativo.js` | tela | ConsultaCorporativo, formatCpf, searchAdvogado, searchMagistrados | button, input, card, select |
| 88 | `client/src/pages/consulta-pdpj.tsx` | `js/98-consulta-pdpj.js` | tela | ConsultaPdpj, formatCpf, baseBody, testConnection | button, input, card, badge |
| 89 | `client/src/pages/consulta-processual.tsx` | `js/98-consulta-processual.js` | tela | formatDate, formatDateShort, formatProcessoNumber, ConsultaProcessual | button, input, card, select |
| 90 | `client/src/pages/filtrador.tsx` | `js/98-filtrador.js` | tela | saveLS, loadLS, cleanMarkdownNoise, splitParagraphs | button, textarea, input, label |
| 91 | `client/src/pages/jurisprudencia.tsx` | `js/98-jurisprudencia.js` | tela | Jurisprudencia, updateFormat, handler, resetPromptTplForm | tiptap-editor, button, input, textarea |
| 92 | `client/src/pages/legal-assistant.tsx` | `js/98-legal-assistant.js` | tela | LegalAssistant, updateFormat, handler, iniciarDitado | tiptap-editor, button, input, textarea |
| 93 | `client/src/pages/login.tsx` | `js/98-login.js` | tela | LoginPage, handleSubmit | card, button, input, use-toast |
| 94 | `client/src/pages/not-found.tsx` | `js/98-not-found.js` | tela | NotFound | card, button |
| 95 | `client/src/pages/painel-processos.tsx` | `js/98-painel-processos.js` | tela | formatProcessoNumber, formatDate, formatDateTime, detectTribunal | button, input, card, badge |
| 96 | `client/src/pages/playground.tsx` | `js/98-playground.js` | tela | lerLocais, gravarLocais, ehLocal, App | button, tabs, input, use-toast |
| 97 | `client/src/pages/previdenciario.tsx` | `js/98-previdenciario.js` | tela | naturezaLabel, naturezaBadge, parseValorBR, fmtBR | use-toast, button, badge, theme-toggle |
| 98 | `client/src/pages/robo-djen.tsx` | `js/98-robo-djen.js` | tela | RoboDjenPage, gerarToken, copiarToken, buscarOAB | button, input, card, badge |
| 99 | `client/src/pages/token-generator.tsx` | `js/98-token-generator.js` | tela | TokenGenerator, formatCpf, generateToken, copyToClipboard | button, input, card, badge |
| 100 | `client/src/pages/tramitacao.tsx` | `js/98-tramitacao.js` | tela | fmt, fmtPhone, TramitacaoPage, handleTestConnection | button, input, card, badge |
| 101 | `index.html` | `js/98-inicio.js` | tela | Juridico-MiniSK-29-10-Ollama 29-10-2026, 20-25-59 — Juridico-MiniSK-29-10-Ollama 29-10-202 | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |
| 102 | `public/auditoria.html` | `js/98-auditoria.js` | tela | Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira | — |
| 103 | `client/src/index.css` | css/app.css | estilo | — | — |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Assistente Jurídico" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-init.js` (era `migrations/0000_init.sql`, 141 linhas)

```text
Crie js/10-init.js. Ele é uma parte de dados do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-db.js` (era `server/db.ts`, 2 linhas)

```text
Crie js/15-db.js. Ele é uma parte de dados do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-localdb.js` (era `server/localdb.ts`, 239 linhas)

```text
Crie js/20-localdb.js. Ele faz: Banco de dados LOCAL — antes era Postgres na nuvem (Neon/Replit), com DATABASE_URL e senha. Agora é o mesmo Postgres, mas rodando dentro do próprio programa (PGlite) e guardado na pasta  dados/banco . Sem internet, sem senha, sem conta. Copie a pasta "dados" para fazer backup.
No app original ele tinha estas funções/partes: pastaDoBanco, tirarTrava, abrirComRede, fim, pega, abrirBancoSeguro, fecharBanco.
O original usava as bibliotecas path, fs, @electric-sql/pglite, drizzle-orm: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-schema.js` (era `shared/schema.ts`, 267 linhas)

```text
Crie js/25-schema.js. Ele é uma parte de dados do app.
O original usava as bibliotecas drizzle-orm, drizzle-zod, zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-cacador-erros.js` (era `client/public/cacador-erros.js`, 142 linhas)

```text
Crie js/30-cacador-erros.js. Ele faz: 🐞 CAÇADOR DE ERROS — só observa, não muda nada no Jurídico. Anota sozinho: - erros da página (vermelhos do console, falhas no código) - chamadas ao servidor que deram errado (/api…): o endereço, o código.
No app original ele tinha estas funções/partes: esconder, texto, anotar, explicar, buscarServidor, css, atualizarBotao, relatorio, esc, desenhar, montar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-use-mobile.js` (era `client/src/hooks/use-mobile.tsx`, 20 linhas)

```text
Crie js/35-use-mobile.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: useIsMobile, onChange.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-use-toast.js` (era `client/src/hooks/use-toast.ts`, 192 linhas)

```text
Crie js/40-use-toast.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: genId, addToRemoveQueue, dispatch, toast, update, dismiss, useToast.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-queryclient.js` (era `client/src/lib/queryClient.ts`, 69 linhas)

```text
Crie js/45-queryclient.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: resolveUrl, throwIfResNotOk, apiRequest.
O original usava as bibliotecas @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-utils.js` (era `client/src/lib/utils.ts`, 7 linhas)

```text
Crie js/50-utils.js. Ele é uma parte de logica do app.
O original usava as bibliotecas clsx, tailwind-merge: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-app.js` (era `client/src/App.tsx`, 173 linhas)

```text
Crie js/55-app.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ErrorBoundary, Router, App.
Ele usa o que já foi criado em: js/45-queryclient.js (pelo APP).
O original usava as bibliotecas react, wouter, @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/auth/check. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-postcss-config.js` (era `postcss.config.js`, 7 linhas)

```text
Crie js/60-postcss-config.js. Ele é uma parte de logica do app.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-abrir-pronto.js` (era `scripts/abrir-pronto.mjs`, 34 linhas)

```text
Crie js/65-abrir-pronto.js. Ele faz: Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que vem junto, espera ficar pronto e abre o navegador.
No app original ele tinha estas funções/partes: tick.
O original usava as bibliotecas child_process, path, fs, http, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-iniciar.js` (era `scripts/iniciar.mjs`, 124 linhas)

```text
Crie js/70-iniciar.js. Ele faz: Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) monta a tela se ela ainda não existe ou se você mudou algo em src/.
No app original ele tinha estas funções/partes: say, fail, run, newestMtime, walk, waitUp, tick, openBrowser, portaLivre, jaEstaAberto.
O original usava as bibliotecas child_process, fs, path, http, net, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-chat.js` (era `shared/models/chat.ts`, 35 linhas)

```text
Crie js/75-chat.js. Ele é uma parte de logica do app.
O original usava as bibliotecas drizzle-orm, drizzle-zod, zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-tailwind-config.js` (era `tailwind.config.ts`, 108 linhas)

```text
Crie js/80-tailwind-config.js. Ele é uma parte de logica do app.
O original usava as bibliotecas tailwindcss, tailwindcss-animate, @tailwindcss/typography: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-vite-config.js` (era `vite.config.ts`, 26 linhas)

```text
Crie js/85-vite-config.js. Ele é uma parte de logica do app.
O original usava as bibliotecas vite, @vitejs/plugin-react, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-cacador-erros.js` (era `server/cacador-erros.ts`, 61 linhas)

```text
Crie js/90-cacador-erros.js. Ele faz: 🐞 Caçador de erros — lado do SERVIDOR (só observa; não muda o funcionamento) - guarda os últimos erros do servidor (com a ROTA e o MOTIVO de verdade) - também grava em erros-servidor.log (na pasta de onde o servidor roda) - GET /api/_erros → a tela (botão 🐞) mostra junto com os erros dela.
No app original ele tinha estas funções/partes: esconder, texto, anotarErro, ligarCacador.
O original usava as bibliotecas async_hooks, fs, path, express: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /api/_erros, DELETE /api/_erros. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-djen.js` (era `server/djen.ts`, 381 linhas)

```text
Crie js/91-djen.js. Ele faz: Robô Jurídico DJEN — Lógica de consulta e processamento Consulta a API do DJEN/CNJ, extrai datas e associa clientes.
No app original ele tinha estas funções/partes: getDjenConfig, saveDjenConfig, gerarTokenJwt, obterToken, buscarPublicacoesDJEN, parseData, formatData, extrairDadosSessao, normalizarProcesso, executarRobo, addLog, gerarTokenPublico, listarClientes, criarCliente, deletarCliente, listarPublicacoes, listarExecucoes, dadosSimulados.
Ele usa o que já foi criado em: js/20-localdb.js (pelo APP).
O original usava as bibliotecas drizzle-orm, @shared/schema, crypto, jsonwebtoken: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-env.js` (era `server/env.ts`, 21 linhas)

```text
Crie js/92-env.js. Ele faz: Lê o arquivo .env (se existir) ANTES de tudo. É onde ficam as chaves (senha do app, chaves de IA, DataJud…). Veja o .env.exemplo.
O original usava as bibliotecas path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-gemini-ponte.js` (era `server/gemini-ponte.ts`, 139 linhas)

```text
Crie js/93-gemini-ponte.js. Ele faz: Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chaves (2026): as novas começam com "AQ." e são RECUSADAS no caminho "compatível com OpenAI" (…/v1beta/openai/…) quando vão como "Authorization: Bearer". No caminho próprio do Gemini elas funcionam.
No app original ele tinha estas funções/partes: partes, corpoNativo, erroOpenAI, chat, pedaco, modelos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-storage.js` (era `server/storage.ts`, 276 linhas)

```text
Crie js/94-storage.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: DatabaseStorage.
Ele usa o que já foi criado em: js/20-localdb.js (pelo APP).
O original usava as bibliotecas @shared/schema, drizzle-orm: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-tts.js` (era `server/tts.ts`, 87 linhas)

```text
Crie js/95-tts.js. Ele faz: Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Francisco, velocidade 1,15, tom 5% mais grave — dá para trocar no .env: TTS_VOZ=pt-BR-FranciscoNeural   (ou pt-BR-FranciscaNeural, pt-BR-AntonioNeural…) TTS_VELOCIDADE=1.15.
No app original ele tinha estas funções/partes: VOZ, VELOCIDADE, TOM, pedacos, umPedacoNode, umPedacoPython, edgeTts.
O original usava as bibliotecas os, path, fs, child_process, util, msedge-tts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-ollama.js` (era `server/ollama.ts`, 82 linhas)

```text
Crie js/96-ollama.js. Ele faz: 🦙 Ollama — IA grátis rodando no PRÓPRIO computador (ou no Termux do celular). O servidor do jurídico fala com ele em http://127.0.0.1:11434 (sem chave, sem internet). Rotas: GET  /api/ollama/status         → está ligado? quais modelos tem?.
No app original ele tinha estas funções/partes: comTempo, status, ligarOllama.
O original usava as bibliotecas express, child_process, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /api/ollama/status, POST /api/ollama/ligar, POST /api/ollama/baixar. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-routes.js` (era `server/routes.ts`, 5630 linhas)

```text
Crie js/97-routes.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: truncateChatHistory, cleanPemKey, cleanHtml, requireAuth, sanitizeKey, autoDetectProvider, geminiStream, geminiStreamMessages, seedData, increment, decrement, reset, addTask, registerRoutes, cleanContent, escXml, parseBlockAttrs, cleanKey.
Ele usa o que já foi criado em: js/94-storage.js, js/95-tts.js, js/96-ollama.js, js/91-djen.js (pelo APP).
O original usava as bibliotecas express, http, @shared/schema, @google/genai, openai, multer, mammoth, pdf-parse, docx, fs, path, child_process, os, util, jsonwebtoken, html-entities, jszip: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /sw.js, GET /api/auth/check, POST /api/auth/login, POST /api/auth/logout, GET /parecer/:id, GET /api/tjmg/fatores, POST /api/pdpj/test-connection, GET /api/pdpj/status, POST /api/pdpj/comunicacoes, POST /api/pdpj/representados, POST /api/pdpj/habilitacao, POST /api/pdpj/pessoa, POST /api/webhooks/tramitacao, GET /api/demo-key-status, GET /api/demo-key-config, POST /api/demo-key-config, GET /api/perplexity-key-status, POST /api/demo-key-test, POST /api/tts, POST /api/voice-chat, POST /api/share/parecer, GET /api/snippets, GET /api/snippets/:id, POST /api/snippets, PATCH /api/snippets/:id, DELETE /api/snippets/:id, GET /api/custom-actions, POST /api/custom-actions, PATCH /api/custom-actions/:id, DELETE /api/custom-actions/:id. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: https://www.debit.com.br/tabelas/tribunal-justica-mg, ${baseUrl}${endpoint}, ${baseUrl}/domicilio-eletronico/api/v1/representados, ${baseUrl}/domicilio-eletronico/api/v1/habilita/verificar/${documento}, ${baseUrl}/domicilio-eletronico/api/v1/${endpoint}/${documento}, ${testUrl}/chat/completions, https://api.perplexity.ai/chat/completions, ${cUrl}/chat/completions, ${CORPORATIVO_BASE}/advogado/oab/${cpf}, ${CORPORATIVO_BASE}/advogado/oab/${uf.toUpperCase()}/${inscricao.replace(/\D/g, , ${CORPORATIVO_BASE}/magistrado?siglaTribunal=${tribunal}, ${TRAMITACAO_BASE}${path}, ${prevUrl.replace(/\/$/, , ${url}/chat/completions. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-web.js` (era `server/web.ts`, 51 linhas)

```text
Crie js/98-web.js. Ele faz: Mostra a TELA do app no mesmo endereço do servidor. Era isto que faltava: o servidor só tinha as rotas /api, então no PC aparecia "Cannot GET /" ou "404 com metade de um HTML". - Montado (npm run build → pasta dist/): serve os arquivos prontos.
No app original ele tinha estas funções/partes: setupWeb.
O original usava as bibliotecas express, http, path, fs, vite: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-server.js` (era `server/index.ts`, 121 linhas)

```text
Crie js/98-server.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: log.
Ele usa o que já foi criado em: js/90-cacador-erros.js, js/97-routes.js, js/98-web.js (pelo APP).
O original usava as bibliotecas express, express-session, memorystore, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-404.js` (era `client/404.html`, 34 linhas)

```text
Crie js/98-404.js. Ele faz: Assistente Jurídico.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-client.js` (era `client/index.html`, 34 linhas)

```text
Crie js/98-client.js. Ele faz: Assistente Jurídico.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-auditoria.js` (era `client/public/auditoria.html`, 11646 linhas)

```text
Crie js/98-auditoria.js. Ele faz: Mini SK — 🔗 Meus Links.
No app original ele tinha estas funções/partes: modal, done, openDB, reqP, nada, extOf, baseName, dirName, norm, typeOf, decodeBytes, looksBinary, toBase64, fromBase64, recordFromBytes, saveNow, touch, getDir.
O original usava as bibliotecas  + q + u + q + , react, react-dom,  + JSON.stringify(principal) + , http, fs, path, os, electron, crypto, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: dados.json, https://api.anthropic.com/v1/models?limit=100, http://127.0.0.1:11434/api/version, https://registry.npmjs.org, https://api.npms.io/v2/search?size=15&q=, sw.js, https://api.github.com, ./, https://api.github.com/repos/, https://api.expo.dev/graphql. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-comparador.js` (era `client/public/comparador.html`, 494 linhas)

```text
Crie js/98-comparador.js. Ele faz: Comparador Jurídico — TJMG + BCB — Comparador Juridico — TJMG (Fator) + BCB (Juros).
No app original ele tinha estas funções/partes: setClock, setStatus, fmtBRL, toNumberBR, parseDateBR, dateToYM, listMonths, addScenario, renderScenarios, renderTable.
Ele chamava estes endereços: https://api.bcb.gov.br/dados/serie/bcdata.sgs.. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-ollama.js` (era `client/public/ollama.html`, 120 linhas)

```text
Crie js/98-ollama.js. Ele faz: 🦙 Ollama — SK Jurídico — 🦙 Ollama — IA grátis no seu aparelho.
No app original ele tinha estas funções/partes: chamar, emUso, pintar, ocupado, ver.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-pwa-install.js` (era `client/src/components/pwa-install.tsx`, 86 linhas)

```text
Crie js/98-pwa-install.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: PwaInstallBanner, handler, handleInstall, handleDismiss.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-theme-provider.js` (era `client/src/components/theme-provider.tsx`, 47 linhas)

```text
Crie js/98-theme-provider.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ThemeProvider, toggleTheme, useTheme.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-theme-toggle.js` (era `client/src/components/theme-toggle.tsx`, 19 linhas)

```text
Crie js/98-theme-toggle.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ThemeToggle.
O original usava as bibliotecas lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-tiptap-editor.js` (era `client/src/components/tiptap-editor.tsx`, 542 linhas)

```text
Crie js/98-tiptap-editor.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: TiptapEditor, applySize, applyLineHeight, Sep, toolbar.
O original usava as bibliotecas @tiptap/react, @tiptap/starter-kit, @tiptap/extension-text-align, @tiptap/extension-text-style, @tiptap/extension-color, @tiptap/extension-underline, @tiptap/extension-highlight, @tiptap/extension-font-family, @tiptap/extension-table, @tiptap/extension-link, @tiptap/core, react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-accordion.js` (era `client/src/components/ui/accordion.tsx`, 57 linhas)

```text
Crie js/98-accordion.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-accordion, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-alert-dialog.js` (era `client/src/components/ui/alert-dialog.tsx`, 140 linhas)

```text
Crie js/98-alert-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AlertDialogHeader, AlertDialogFooter.
O original usava as bibliotecas react, @radix-ui/react-alert-dialog: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-alert.js` (era `client/src/components/ui/alert.tsx`, 60 linhas)

```text
Crie js/98-alert.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-aspect-ratio.js` (era `client/src/components/ui/aspect-ratio.tsx`, 6 linhas)

```text
Crie js/98-aspect-ratio.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-aspect-ratio: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-avatar.js` (era `client/src/components/ui/avatar.tsx`, 52 linhas)

```text
Crie js/98-avatar.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-avatar: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-badge.js` (era `client/src/components/ui/badge.tsx`, 39 linhas)

```text
Crie js/98-badge.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Badge.
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-breadcrumb.js` (era `client/src/components/ui/breadcrumb.tsx`, 116 linhas)

```text
Crie js/98-breadcrumb.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: BreadcrumbSeparator, BreadcrumbEllipsis.
O original usava as bibliotecas react, @radix-ui/react-slot, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/98-button.js` (era `client/src/components/ui/button.tsx`, 63 linhas)

```text
Crie js/98-button.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 44 — `js/98-calendar.js` (era `client/src/components/ui/calendar.tsx`, 69 linhas)

```text
Crie js/98-calendar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Calendar.
O original usava as bibliotecas react, lucide-react, react-day-picker: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 45 — `js/98-card.js` (era `client/src/components/ui/card.tsx`, 86 linhas)

```text
Crie js/98-card.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 46 — `js/98-carousel.js` (era `client/src/components/ui/carousel.tsx`, 261 linhas)

```text
Crie js/98-carousel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useCarousel.
O original usava as bibliotecas react, embla-carousel-react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 47 — `js/98-chart.js` (era `client/src/components/ui/chart.tsx`, 366 linhas)

```text
Crie js/98-chart.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useChart, ChartStyle, getPayloadConfigFromPayload.
O original usava as bibliotecas react, recharts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 48 — `js/98-checkbox.js` (era `client/src/components/ui/checkbox.tsx`, 29 linhas)

```text
Crie js/98-checkbox.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-checkbox, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 49 — `js/98-collapsible.js` (era `client/src/components/ui/collapsible.tsx`, 12 linhas)

```text
Crie js/98-collapsible.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-collapsible: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 50 — `js/98-command.js` (era `client/src/components/ui/command.tsx`, 152 linhas)

```text
Crie js/98-command.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: CommandDialog, CommandShortcut.
O original usava as bibliotecas react, @radix-ui/react-dialog, cmdk, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 51 — `js/98-context-menu.js` (era `client/src/components/ui/context-menu.tsx`, 199 linhas)

```text
Crie js/98-context-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ContextMenuShortcut.
O original usava as bibliotecas react, @radix-ui/react-context-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 52 — `js/98-dialog.js` (era `client/src/components/ui/dialog.tsx`, 123 linhas)

```text
Crie js/98-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DialogHeader, DialogFooter.
O original usava as bibliotecas react, @radix-ui/react-dialog, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 53 — `js/98-drawer.js` (era `client/src/components/ui/drawer.tsx`, 119 linhas)

```text
Crie js/98-drawer.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Drawer, DrawerHeader, DrawerFooter.
O original usava as bibliotecas react, vaul: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 54 — `js/98-dropdown-menu.js` (era `client/src/components/ui/dropdown-menu.tsx`, 199 linhas)

```text
Crie js/98-dropdown-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DropdownMenuShortcut.
O original usava as bibliotecas react, @radix-ui/react-dropdown-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 55 — `js/98-form.js` (era `client/src/components/ui/form.tsx`, 179 linhas)

```text
Crie js/98-form.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useFormField.
O original usava as bibliotecas react, @radix-ui/react-label, @radix-ui/react-slot, react-hook-form: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 56 — `js/98-hover-card.js` (era `client/src/components/ui/hover-card.tsx`, 30 linhas)

```text
Crie js/98-hover-card.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-hover-card: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 57 — `js/98-input-otp.js` (era `client/src/components/ui/input-otp.tsx`, 70 linhas)

```text
Crie js/98-input-otp.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, input-otp, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 58 — `js/98-input.js` (era `client/src/components/ui/input.tsx`, 24 linhas)

```text
Crie js/98-input.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 59 — `js/98-label.js` (era `client/src/components/ui/label.tsx`, 25 linhas)

```text
Crie js/98-label.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-label, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 60 — `js/98-menubar.js` (era `client/src/components/ui/menubar.tsx`, 257 linhas)

```text
Crie js/98-menubar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup, MenubarSub, MenubarShortcut.
O original usava as bibliotecas react, @radix-ui/react-menubar, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 61 — `js/98-navigation-menu.js` (era `client/src/components/ui/navigation-menu.tsx`, 129 linhas)

```text
Crie js/98-navigation-menu.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-navigation-menu, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 62 — `js/98-pagination.js` (era `client/src/components/ui/pagination.tsx`, 118 linhas)

```text
Crie js/98-pagination.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Pagination, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 63 — `js/98-popover.js` (era `client/src/components/ui/popover.tsx`, 30 linhas)

```text
Crie js/98-popover.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-popover: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 64 — `js/98-progress.js` (era `client/src/components/ui/progress.tsx`, 29 linhas)

```text
Crie js/98-progress.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-progress: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 65 — `js/98-radio-group.js` (era `client/src/components/ui/radio-group.tsx`, 43 linhas)

```text
Crie js/98-radio-group.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-radio-group, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 66 — `js/98-resizable.js` (era `client/src/components/ui/resizable.tsx`, 46 linhas)

```text
Crie js/98-resizable.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ResizablePanelGroup, ResizableHandle.
O original usava as bibliotecas lucide-react, react-resizable-panels: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 67 — `js/98-scroll-area.js` (era `client/src/components/ui/scroll-area.tsx`, 47 linhas)

```text
Crie js/98-scroll-area.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-scroll-area: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 68 — `js/98-select.js` (era `client/src/components/ui/select.tsx`, 161 linhas)

```text
Crie js/98-select.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-select, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 69 — `js/98-separator.js` (era `client/src/components/ui/separator.tsx`, 30 linhas)

```text
Crie js/98-separator.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-separator: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 70 — `js/98-sheet.js` (era `client/src/components/ui/sheet.tsx`, 141 linhas)

```text
Crie js/98-sheet.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: SheetHeader, SheetFooter.
O original usava as bibliotecas react, @radix-ui/react-dialog, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 71 — `js/98-sidebar.js` (era `client/src/components/ui/sidebar.tsx`, 728 linhas)

```text
Crie js/98-sidebar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useSidebar, SidebarProvider, handleKeyDown, Sidebar, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, SidebarHeader, SidebarFooter, SidebarSeparator, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuItem.
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 72 — `js/98-skeleton.js` (era `client/src/components/ui/skeleton.tsx`, 16 linhas)

```text
Crie js/98-skeleton.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Skeleton.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 73 — `js/98-slider.js` (era `client/src/components/ui/slider.tsx`, 27 linhas)

```text
Crie js/98-slider.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-slider: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 74 — `js/98-switch.js` (era `client/src/components/ui/switch.tsx`, 28 linhas)

```text
Crie js/98-switch.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-switch: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 75 — `js/98-table.js` (era `client/src/components/ui/table.tsx`, 118 linhas)

```text
Crie js/98-table.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 76 — `js/98-tabs.js` (era `client/src/components/ui/tabs.tsx`, 54 linhas)

```text
Crie js/98-tabs.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-tabs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 77 — `js/98-textarea.js` (era `client/src/components/ui/textarea.tsx`, 23 linhas)

```text
Crie js/98-textarea.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 78 — `js/98-toast.js` (era `client/src/components/ui/toast.tsx`, 128 linhas)

```text
Crie js/98-toast.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toast, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 79 — `js/98-toaster.js` (era `client/src/components/ui/toaster.tsx`, 34 linhas)

```text
Crie js/98-toaster.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Toaster.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 80 — `js/98-toggle-group.js` (era `client/src/components/ui/toggle-group.tsx`, 62 linhas)

```text
Crie js/98-toggle-group.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toggle-group, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 81 — `js/98-toggle.js` (era `client/src/components/ui/toggle.tsx`, 44 linhas)

```text
Crie js/98-toggle.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-toggle, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 82 — `js/98-tooltip.js` (era `client/src/components/ui/tooltip.tsx`, 31 linhas)

```text
Crie js/98-tooltip.js. Ele é uma parte de tela do app.
O original usava as bibliotecas react, @radix-ui/react-tooltip: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 83 — `js/98-auditoria-financeira.js` (era `client/src/pages/auditoria-financeira.tsx`, 25 linhas)

```text
Crie js/98-auditoria-financeira.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AuditoriaFinanceira.
O original usava as bibliotecas wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 84 — `js/98-code-assistant.js` (era `client/src/pages/code-assistant.tsx`, 750 linhas)

```text
Crie js/98-code-assistant.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: detectProvider, CodeBlock, doCopy, RenderText, RenderContent, CodeAssistant, applyKey, saveCurrentKey, loadKey, removeKey, stopGeneration, clearHistory, exportConversation, handleImport, copyMessage, copyTextOnly.
O original usava as bibliotecas react, lucide-react, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/code-assistant. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 85 — `js/98-comparador-juridico.js` (era `client/src/pages/comparador-juridico.tsx`, 25 linhas)

```text
Crie js/98-comparador-juridico.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ComparadorJuridico.
O original usava as bibliotecas wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 86 — `js/98-consulta-corporativo.js` (era `client/src/pages/consulta-corporativo.tsx`, 479 linhas)

```text
Crie js/98-consulta-corporativo.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ConsultaCorporativo, formatCpf, searchAdvogado, searchMagistrados, copyToClipboard, formatAdvText.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/corporativo/advogado/cpf/${cpfClean}, /api/corporativo/advogado/oab/${oabUf}/${num}, /api/corporativo/magistrados/${magTribunal}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 87 — `js/98-consulta-pdpj.js` (era `client/src/pages/consulta-pdpj.tsx`, 671 linhas)

```text
Crie js/98-consulta-pdpj.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ConsultaPdpj, formatCpf, baseBody, testConnection, fetchComunicacoes, fetchRepresentados, checkHabilitacao, fetchPessoa, copyJson.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/pdpj/status, /api/pdpj/test-connection, /api/pdpj/comunicacoes, /api/pdpj/representados, /api/pdpj/habilitacao, /api/pdpj/pessoa. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 88 — `js/98-consulta-processual.js` (era `client/src/pages/consulta-processual.tsx`, 656 linhas)

```text
Crie js/98-consulta-processual.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: formatDate, formatDateShort, formatProcessoNumber, ConsultaProcessual.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/datajud/consulta, /api/datajud/consulta-oab. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 89 — `js/98-filtrador.js` (era `client/src/pages/filtrador.tsx`, 732 linhas)

```text
Crie js/98-filtrador.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: saveLS, loadLS, cleanMarkdownNoise, splitParagraphs, normalizeForCompare, makeShingles, signature, jaccard, parseLines, buildRegexList, applyBanRules, applyCaptureRules, filterText, escapeHtml, download, FiltradorJuridico, walk, exportTxt.
O original usava as bibliotecas react, wouter, lucide-react, mammoth, pdfjs-dist: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 90 — `js/98-jurisprudencia.js` (era `client/src/pages/jurisprudencia.tsx`, 3837 linhas)

```text
Crie js/98-jurisprudencia.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Jurisprudencia, updateFormat, handler, resetPromptTplForm, openNewPromptTpl, openEditPromptTpl, savePromptTpl, copyPromptTplToClipboard, resetDocTplForm, openNewDocTpl, openEditDocTpl, saveDocTpl, handleDocxTemplateUpload, loadFromHistory, resetModelForm, openNewModel, openEditModel, saveModel.
O original usava as bibliotecas react, wouter, @tanstack/react-query, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/tts, /api/doc-templates/upload-docx, /api/export/word-with-template, /api/jurisprudencia/buscar, /api/import/url, /api/upload/extract-text, /api/upload/transcribe, /api/ai/process, /api/ai/refine. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 91 — `js/98-legal-assistant.js` (era `client/src/pages/legal-assistant.tsx`, 5422 linhas)

```text
Crie js/98-legal-assistant.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: LegalAssistant, updateFormat, handler, iniciarDitado, refreshDemoKeyStatus, startMic, resetPromptTplForm, openNewPromptTpl, openEditPromptTpl, savePromptTpl, copyPromptTplToClipboard, resetDocTplForm, openNewDocTpl, openEditDocTpl, saveDocTpl, handleDocxTemplateUpload, loadFromHistory, resetModelForm.
O original usava as bibliotecas react, wouter, @tanstack/react-query, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/demo-key-status, /api/demo-key-config, /api/tts, /api/voice-chat, /api/doc-templates/upload-docx, /api/export/word-with-template, /api/jurisprudencia/buscar, /api/code-assistant, /api/import/url, /api/upload/extract-text, /api/upload/transcribe, /api/ai/process, /api/ai/refine, /api/git-push, /api/ai-usage-summary, /api/ai-usage-credit, /api/demo-key-test. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 92 — `js/98-login.js` (era `client/src/pages/login.tsx`, 100 linhas)

```text
Crie js/98-login.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: LoginPage, handleSubmit.
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/auth/login. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 93 — `js/98-not-found.js` (era `client/src/pages/not-found.tsx`, 33 linhas)

```text
Crie js/98-not-found.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: NotFound.
O original usava as bibliotecas lucide-react, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 94 — `js/98-painel-processos.js` (era `client/src/pages/painel-processos.tsx`, 758 linhas)

```text
Crie js/98-painel-processos.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: formatProcessoNumber, formatDate, formatDateTime, detectTribunal, PainelProcessos, searchByOab, addFromOabResult, addAllFromOab, addProcesso, refreshProcesso, toggleExpand, saveApelido, toggleStatus, copyAllData.
O original usava as bibliotecas react, @tanstack/react-query, wouter, @shared/schema, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/datajud/consulta-oab, /api/datajud/consulta. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 95 — `js/98-playground.js` (era `client/src/pages/playground.tsx`, 1503 linhas)

```text
Crie js/98-playground.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: lerLocais, gravarLocais, ehLocal, App, mostrarStatus, handleFile, processarDados, get, copiarWord, salvarLocal, excluir, Field, testarAPI, detectMode, preprocessJSX, Playground, runCodeWithAI, getContentForMode.
O original usava as bibliotecas react, wouter, lucide-react, @tanstack/react-query, @shared/schema: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/code/run. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 96 — `js/98-previdenciario.js` (era `client/src/pages/previdenciario.tsx`, 770 linhas)

```text
Crie js/98-previdenciario.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: naturezaLabel, naturezaBadge, parseValorBR, fmtBR, extrairTextoPdf, extrairTextoOrdenado, parsearDtcCtc, UploadZone, SectionCard, InfoRow, PrevidenciarioPage, processarCnisOuCarta, processarDtcCtc, set, exportarCsv, exportarJson.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 97 — `js/98-robo-djen.js` (era `client/src/pages/robo-djen.tsx`, 1053 linhas)

```text
Crie js/98-robo-djen.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: RoboDjenPage, gerarToken, copiarToken, buscarOAB, buscarProcesso.
O original usava as bibliotecas react, @tanstack/react-query, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/djen/config, /api/djen/gerar-token, /api/pesquisa/oab?${params}, /api/pesquisa/processo?${params}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 98 — `js/98-token-generator.js` (era `client/src/pages/token-generator.tsx`, 450 linhas)

```text
Crie js/98-token-generator.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: TokenGenerator, formatCpf, generateToken, copyToClipboard.
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/jwt/status, /api/jwt/generate. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 99 — `js/98-tramitacao.js` (era `client/src/pages/tramitacao.tsx`, 830 linhas)

```text
Crie js/98-tramitacao.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: fmt, fmtPhone, TramitacaoPage, handleTestConnection.
O original usava as bibliotecas react, @tanstack/react-query, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: /api/tramitacao/test, /api/tramitacao/clientes?page=${clientePage}&per_page=20, /api/tramitacao/clientes/${selectedCliente.id}, /api/tramitacao/usuarios. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 100 — `js/98-inicio.js` (era `index.html`, 117 linhas)

```text
Crie js/98-inicio.js. Ele faz: Juridico-MiniSK-29-10-Ollama 29-10-2026, 20-25-59 — Juridico-MiniSK-29-10-Ollama 29-10-2026, 20-25-59.
No app original ele tinha estas funções/partes: rec, esc, card, show.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 101 — `js/98-auditoria.js` (era `public/auditoria.html`, 35 linhas)

```text
Crie js/98-auditoria.js. Ele faz: Auditoria Financeira - Assistente Jurídico — 📊 Auditoria Financeira.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 102 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-init.js, js/15-db.js, js/20-localdb.js, js/25-schema.js, js/30-cacador-erros.js, js/35-use-mobile.js, js/40-use-toast.js, js/45-queryclient.js, js/50-utils.js, js/55-app.js, js/60-postcss-config.js, js/65-abrir-pronto.js, js/70-iniciar.js, js/75-chat.js, js/80-tailwind-config.js, js/85-vite-config.js, js/90-cacador-erros.js, js/91-djen.js, js/92-env.js, js/93-gemini-ponte.js, js/94-storage.js, js/95-tts.js, js/96-ollama.js, js/97-routes.js, js/98-web.js, js/98-server.js, js/98-404.js, js/98-client.js, js/98-auditoria.js, js/98-comparador.js, js/98-ollama.js, js/98-pwa-install.js, js/98-theme-provider.js, js/98-theme-toggle.js, js/98-tiptap-editor.js, js/98-accordion.js, js/98-alert-dialog.js, js/98-alert.js, js/98-aspect-ratio.js, js/98-avatar.js, js/98-badge.js, js/98-breadcrumb.js, js/98-button.js, js/98-calendar.js, js/98-card.js, js/98-carousel.js, js/98-chart.js, js/98-checkbox.js, js/98-collapsible.js, js/98-command.js, js/98-context-menu.js, js/98-dialog.js, js/98-drawer.js, js/98-dropdown-menu.js, js/98-form.js, js/98-hover-card.js, js/98-input-otp.js, js/98-input.js, js/98-label.js, js/98-menubar.js, js/98-navigation-menu.js, js/98-pagination.js, js/98-popover.js, js/98-progress.js, js/98-radio-group.js, js/98-resizable.js, js/98-scroll-area.js, js/98-select.js, js/98-separator.js, js/98-sheet.js, js/98-sidebar.js, js/98-skeleton.js, js/98-slider.js, js/98-switch.js, js/98-table.js, js/98-tabs.js, js/98-textarea.js, js/98-toast.js, js/98-toaster.js, js/98-toggle-group.js, js/98-toggle.js, js/98-tooltip.js, js/98-auditoria-financeira.js, js/98-code-assistant.js, js/98-comparador-juridico.js, js/98-consulta-corporativo.js, js/98-consulta-pdpj.js, js/98-consulta-processual.js, js/98-filtrador.js, js/98-jurisprudencia.js, js/98-legal-assistant.js, js/98-login.js, js/98-not-found.js, js/98-painel-processos.js, js/98-playground.js, js/98-previdenciario.js, js/98-robo-djen.js, js/98-token-generator.js, js/98-tramitacao.js, js/98-inicio.js, js/98-auditoria.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
