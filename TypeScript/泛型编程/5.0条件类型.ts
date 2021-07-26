declare function strOrNum<T extends boolean>(
  x: T,
): T extends true ? string : number;

const strReturnType = strOrNum(true);
const numReturnType = strOrNum(false);
