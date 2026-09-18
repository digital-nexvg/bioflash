# Documentos de qualidade e conformidade

Coloque nesta pasta os arquivos PDF que devem aparecer na seção **Compromisso** do site.

Depois, cadastre cada arquivo em `js/data.js`, dentro de `documents`:

```js
documents: [
  { title: 'Licença sanitária', file: 'licenca-sanitaria.pdf' },
  { title: 'Certificado técnico', file: 'certificado-tecnico.pdf' }
]
```

Use nomes de arquivos sem espaços ou acentos para evitar problemas nos links.