# Sitemap links TypeScript

📦 NODE.TS - Crawl and parse links in sitemap recursively.

## Disclaimer

> ⚠ NOTICE: This project was initially created by https://github.com/gijo-varghese

I restored it because the original project was removed for some reason, the original license was ISC, but if you are the author and want to remove this project, just contact me via email.

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
