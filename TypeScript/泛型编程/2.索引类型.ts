// 假设key是obj键名
// keyof 是索引类型查询的语法，
// 它会返回后面跟着的类型参数的键值组成的字面量联合类型
function pickSingleValue<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}

// 我们使用了两次 keyof T ，能不能简化？
// 像设置变量一样
function pickSingleValue2<T extends object, U extends keyof T>(
  obj: T,
  key: U,
): T[U] {
  return obj[key];
}

// 那么取出多个值呢
function pick<T extends object, U extends keyof T>(obj: T, keys: U[]): T[U][] {
  return keys.map(key => obj[key]);
}
