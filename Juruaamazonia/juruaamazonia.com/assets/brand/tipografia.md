# 🔤 Tipografia — Juruá Log

A tipografia da Juruá Log utiliza a fonte **Plus Jakarta Sans**, garantindo uma identidade moderna, limpa e altamente legível para ambientes digitais.

---

## 🧱 Fonte Principal

### Plus Jakarta Sans

* Origem: Google Fonts
* Estilo: sans-serif moderna
* Personalidade: clara, confiável, técnica
* Uso: toda a interface (site, landing page, materiais digitais)

---

## ⚖️ Hierarquia Tipográfica

### H1 — Título principal

* Peso: 700 (Bold)
* Tamanho: 48px – 64px
* Uso: headline (hero)

### H2 — Subtítulo

* Peso: 600 (Semibold)
* Tamanho: 32px – 40px

### H3 — Seções

* Peso: 500 (Medium)
* Tamanho: 20px – 28px

### Texto padrão

* Peso: 400 (Regular)
* Tamanho: 16px – 18px

### Texto auxiliar

* Peso: 400
* Tamanho: 14px

---

## 📏 Espaçamento e leitura

* Line-height:

  * Títulos: 110% – 120%
  * Texto: 140% – 160%

* Letter-spacing:

  * Títulos: -0.3px (leve compressão)
  * Texto: normal

---

## 🎯 Diretrizes de uso

* Priorizar **clareza e objetividade (B2B)**
* Evitar blocos longos de texto
* Usar títulos fortes e bem espaçados
* Manter bastante espaço em branco
* Evitar excesso de variações de peso

---

## 🔘 Botões

* Fonte: Plus Jakarta Sans
* Peso: 600
* Caixa: opcional uppercase
* Tracking: +0.5px

---

## 🧠 Intenção da tipografia

Transmitir:

* confiabilidade operacional
* organização
* leitura rápida
* posicionamento corporativo

Evitar:

* aparência “startup genérica”
* excesso de leveza (manter presença)

---

## ⚙️ Implementação

### Importação

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

### CSS global

```css
body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

---

### Tailwind config

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
}
```

---

## 💡 Ajustes recomendados (pra ficar mais “Galano feel”)

* usar mais peso 600/700 do que 400
* evitar fontes muito leves
* aumentar ligeiramente tracking em títulos
* usar contraste forte com cores da marca

---

## 🚀 Observação estratégica

Essa tipografia permite:

* velocidade de implementação
* zero custo de licença
* fácil manutenção

Podendo futuramente ser substituída por Galano Grotesque sem quebrar layout.
