# await-to-all

Promise.all wrapper for easier error handling when using async/await

## Install

> \$ npm install await-to-all

## Usage

```javascript
const toAll = require('await-to-all')

async function example() {
  const [error, data] = await toAll([Promise, Promise, Promise])

  if (error) {
    console.error(error)
  }

  console.log(data)
}
```

## License

MIT
