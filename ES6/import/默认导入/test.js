export default {
  foo: 'foo',
  bar: 'bar',
};

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const a = {
  demo() {
    console.log('demo');
  },
};

export { add, sub, a };
