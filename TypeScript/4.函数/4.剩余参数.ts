//前面说到ts的参数数量是对应的,不像js那样灵活
//不过你可以用类似于js那样的剩余参数

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

console.log(buildName('demo', 'foo', 'bar', 'baz', 'test')); //demo foo bar baz test
