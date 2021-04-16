const el = (
    <div>
      <h1>使用方法</h1>
      <p>npm install babel-cli@6 babel-preset-react-app@3</p>
      <p>npx babel --watch src --out-dir . --presets react-app/prod </p>
      <p>这会开启热更新,所以不要等他停止哦</p>
      <h1>hello world</h1>
    </div>
    );


ReactDOM.render(el,document.getElementById('root'));