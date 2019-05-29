# await-to-all

![npm](https://img.shields.io/npm/v/await-to-all.svg?style=flat-square) ![Travis (.com) branch](https://img.shields.io/travis/com/neosiae/await-to-all/master.svg?style=flat-square) ![npm](https://img.shields.io/npm/dw/await-to-all.svg?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/await-to-all.svg?style=flat-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Promise.all wrapper for easier error handling when using async/await

## Install

> \$ npm install await-to-all

## Usage

```javascript
const toAll = require('await-to-all')

async function someAsyncFunction() {
  const [error, data] = await toAll([Promise, Promise, Promise])

  if (error) {
    console.error(error)
  }

  console.log(data)
}
```

## See Also

[await-to-js](https://github.com/scopsy/await-to-js)

## License

MIT
