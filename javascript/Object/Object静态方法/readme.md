## 描述符默认值汇总

- 拥有布尔值得键`configurable`,`enumrable`,`writable`的默认值都是`false`

- 属性值的键`value`,`set`,`get`字段的默认值为`undefined`。

## 描述符可拥有的键值

|            | configurable | enumerate | value  | writable | get    | set    |
| ---------- | ------------ | --------- | ------ | -------- | ------ | ------ |
| 数据描述符 | 可以         | 可以      | 可以   | 可以     | 不可以 | 不可以 |
| 存取描述符 | 可以         | 可以      | 不可以 | 不可以   | 可以   | 可以   |

**如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。**
