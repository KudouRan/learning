//ts中每个参数都是必须的(当然你说传undefined和null那肯定没问题)
//ts中不应该出入更多的参数

function buildName1(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

//可选参数
//姓是可选的

function buildName2(firstName: string, lastName?: string) {
  return firstName + (lastName ? ' ' + lastName : '');
}

console.log(buildName2('demo'));

//默认参数

function buildName3(firstName: string, lastName: string = 'Tom') {
  return firstName + (lastName ? ' ' + lastName : '');
}

console.log(buildName3('demo'));

//假设你想换个位置
function buildName4(lastName: string = 'Tom', firstName: string) {
  return firstName + (lastName ? ' ' + lastName : '');
}

//你得传个undefined
console.log(buildName4(undefined, 'demo'));

//实际上可以认为默认参数就是可选的参数列表,因为你不用传入默认的那个
