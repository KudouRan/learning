module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module' //默认script
  },
  rules: {
    /**
     * Possible Errors
     * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
     */
    'no-fallthrough': 0, //禁止 case 语句落空
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    /**
     * Best Practices
     * 这些规则是关于最佳实践的，帮助你避免一些问题
     */
    'wrap-iife': 0, //要求iife必须括起来
    'no-return-await': 2, //禁止不必要的return await
    'no-multi-spaces': 2, //禁止使用多个空格 fix
    'guard-for-in': 1, //for in循环要用if语句过滤
    yoda: ['error', 'never', { exceptRange: true }], //要求或者禁止Yoda条件
    curly: ['error', 'multi', 'consistent'], //要求遵循大括号约定
    'dot-notation': ['error', { allowKeywords: false }], //要求使用点号
    'no-else-return': [1, { allowElseIf: false }], //禁止在 else 前有 return
    'no-extra-bind': 1, //禁止不必要的函数绑定
    'no-useless-return': 2, //禁止多余的 return 语句
    'no-floating-decimal': 1, //禁止浮点小数
    'no-implicit-coercion': [
      2
      // { boolean: false }
      // { allow: ['!!'] }
    ], //禁止使用较短的符号实现类型转换
    /**
     * Variables
     * 这些规则与变量声明有关
     */
    'no-unused-vars': 1, //禁止未使用的变量
    'no-undefined': 1, //禁止将undefined作为标识符
    'no-undef-init': 1, //禁止将变量初始化为 undefined

    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常主观的
     */
    'linebreak-style': ['error', 'unix'], //统一换行方式
    indent: [
      2,
      2,
      {
        SwitchCase: 1 //设置switch语句的缩进
      }
    ], //强制使用统一的缩进(缩进格数)
    quotes: ['error', 'single'], //引号使用
    semi: ['error', 'always'], //要求或禁止使用分号代替 ASI
    'array-bracket-newline': [1, 'consistent'], //在数组开括号后和闭括号前强制换行
    'array-bracket-spacing': [1, 'never'], //禁止或强制在括号内使用空格
    'array-element-newline': [1, 'consistent'], //强制数组元素间出现换行
    'eol-last': [1, 'always'], //要求或禁止文件末尾存在空行
    'func-call-spacing': [1, 'never'], //要求或禁止在函数标识符和其调用之间有空格
    'no-lonely-if': 2, //禁止 if 作为唯一的语句出现在 else 语句中'
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 2 }], //要求方法链中每个调用都有一个换行符
    'one-var': [
      1,
      {
        //initialized: 'consecutive',
        uninitialized: 'consecutive'
      }
    ], //强制函数中的变量在一起声明或分开声明
    'operator-linebreak': ['error', 'before'], //强制操作符使用一致的换行符风格
    /**
     * ECMAScript 6
     * 这些规则只与 ES6 有关
     */
    'arrow-spacing': ['warn', { before: true, after: true }], //要求箭头函数的箭头之前或之后有空格
    'prefer-const': 1, //首选const
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }], //要求回调函数使用箭头函数
    'no-confusing-arrow': ['error', { allowParens: true }], //禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-useless-computed-key': 1, //禁止在对象中使用不必要的计算属性
    'object-shorthand': [1, 'always'], //要求对象字面量简写语法
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ], // 要求没用的变量使用const,并修复一定的情况
    'prefer-template': 1, //建议使用模板字面量而非字符串连接
    'template-curly-spacing': 2, //强制模板字符串中空格的使用,默认不
    'rest-spread-spacing': [2], //强制剩余和扩展运算符及其表达式之间有空格
    'sort-imports': [
      'warn',
      {
        ignoreCase: true, //忽略大小写
        ignoreDeclarationSort: true, //忽略声明的排序
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none']
      }
    ], //import 排序
    'yield-star-spacing': ['error', 'after'], //强制在 yield* 表达式中 * 周围使用空格
    'prefer-rest-params': 1, //少用arguments而用剩余参数
    'prefer-destructuring': 0 //优先使用数组和对象解构
  }
};
