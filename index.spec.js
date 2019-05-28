const test = require('tape')
const toAll = require('./index')

function createResolve(message, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message), ms)
  })
}

function createReject(message, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), ms)
  })
}

test('onFulfilled', async t => {
  const promises = [
    createResolve('fulfilled', 100),
    createResolve('fulfilled', 200),
    createResolve('fulfilled', 300)
  ]

  const [error, [first, second, third] = data] = await toAll(promises)

  t.equal(first, 'fulfilled')
  t.equal(second, 'fulfilled')
  t.equal(third, 'fulfilled')

  t.end()
})

test('onRejected', async t => {
  const promises = [
    createReject('rejected', 100),
    createReject('rejected', 200),
    createReject('rejected', 300)
  ]

  const [error] = await toAll(promises)

  if (error) {
    t.equal(error.message, 'rejected')
  }

  t.end()
})
