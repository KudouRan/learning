import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // 声明多个 state 变量！
  const [age] = useState(42);
  const [todos] = useState([{ text: 'Learn Hooks' }]);
  // ...

  //要求所有的state需要在同一级上面

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>age = {age}</p>
      <p>todos = {todos[0].text}</p>
    </div>
  );
}

export default App;
