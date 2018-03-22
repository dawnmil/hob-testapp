const logSomething = options => ({
  ...options,
  anotherOption: 'Hello!'
});
const options = logSomething({ one: '1', two: '2' });
console.log(options);

console.log('testing lint pre-commit');