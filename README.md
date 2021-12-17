# Sitemap Links TypeScript

📦 NODE.TS - Crawl and parse links in sitemap recursively.

## Disclaimer

> ⚠ NOTICE: This project was initially created by https://github.com/gijo-varghese

I restored using the [NPM registry](https://www.npmjs.com/package/sitemap-links), I don't use the version that is in npm because it doesn't support TypeScript. I couldn't propose any kind of change, because the [original project](https://github.com/gijo-varghese/sitemap-links) was removed for some reason from GitHub, the original license was ISC, but if you are the author and want to remove this project, just [contact me](mailto:bruno3dcontato@gmail.com) by email.

## Installation

```bash
npm install sitemap-links-ts
```

```bash
yarn add sitemap-links-ts
```

## Import

```javascript
const getSitemapLinks = require('sitemap-links-ts');
```

```javascript
import getSitemapLinks from 'sitemap-links-ts';
```

## Usage

```javascript
const getSitemapLinks = require('sitemap-links-ts');

getSitemapLinks('https://example.com/sitemap_index.xml')
  .then((urls) => console.log(urls))
  .catch((e) => console.log(e));
```

### With timeout (default 60s)

```javascript
const getSitemapLinks = require('sitemap-links-ts');

// 10s timeout
getSitemapLinks('https://example.com/sitemap_index.xml', 10000)
  .then((urls) => console.log(urls))
  .catch((e) => console.log(e));
```
