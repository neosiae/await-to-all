module.exports = awaitToAll

function onFulfilled(data) {
  return [null, data]
}

function onRejected(error) {
  return [error]
}

function awaitToAll(iterable) {
  return Promise.all(iterable)
    .then(onFulfilled)
    .catch(onRejected)
}
