
# 🧩 Erro: `module is not defined` com Tailwind, PostCSS e Vite

Este guia documenta o problema enfrentado ao configurar o Tailwind CSS com Vite, onde o erro `module is not defined` ocorreu, e como resolvê-lo passo a passo.

---

## 💥 Erro

```
Uncaught ReferenceError: module is not defined
```

---

## 🎯 Causa

Esse erro acontece quando o projeto está configurado como ESModules (`"type": "module"` no `package.json`) mas utiliza ferramentas que exigem CommonJS (`module.exports`). Isso causou conflito no `postcss.config.js`.

---

## ✅ Solução Passo a Passo

### 1. Remover módulos antigos e cache:

```bash
rm -rf node_modules dist
del package-lock.json  # (No Windows PowerShell)
```

### 2. Reinstalar Tailwind e dependências recomendadas:

```bash
npm install -D tailwindcss@3.4.1 postcss@8 autoprefixer@10
```

> ❗️ Evite usar `postcss-import` a menos que seja necessário. No caso deste projeto, ele estava quebrando a build.

---

### 3. Arquivo `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 4. Arquivo `postcss.config.js` (modo ESM):

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> ✅ Se preferir evitar problemas com ESModules, renomeie para `postcss.config.cjs` e use:
>
> ```js
> module.exports = {
>   plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
>   },
> };
> ```

---

### 5. CSS (`index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> ❌ Remova qualquer `@import "tailwindcss"` — isso causa erro.

---

### 6. Verifique `package.json`

Se não estiver usando `type: "module"` por necessidade real (como `import`/`export` em JS), é melhor **remover** essa linha para evitar conflitos.

---

## ✅ Resultado

Projeto funcionando normalmente com:

- Tailwind CSS
- Modo escuro com `darkMode: 'class'`
- Sem erro `module is not defined`
- Build funcionando no Vite

---

> Criado após resolver um bug real em junho de 2025. ✅
