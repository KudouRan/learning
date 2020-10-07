import React, { Component } from 'react';
import { Input, Button, List, Space } from 'antd';
import './index.css';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); //获取数据

    store.subscribe(() => {
      this.setState(store.getState());
    });

    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
  }

  changeInputValue(e) {
    store.dispatch({ type: 'changeInputValue', value: e.target.value });
  }

  clickBtn() {
    store.dispatch({ type: 'addItem' });
  }

  removeItem(index) {
    store.dispatch({ type: 'removeItem', index });
  }

  render() {
    return (
      <div className="todo-lsit">
        <Space direction="vertical">
          <div className="input">
            <Space>
              <Input
                placeholder="输入点啥"
                style={{
                  width: '300px',
                }}
                value={this.state.inputValue}
                onChange={this.changeInputValue}
              ></Input>
              <Button type="primary" onClick={this.clickBtn}>
                添加
              </Button>
            </Space>
          </div>
          <div>
            <List
              bordered
              style={{
                width: '371.837px',
              }}
              dataSource={this.state.list}
              renderItem={(item, index) => (
                <List.Item
                  key={index}
                  onClick={this.removeItem.bind(this, index)}
                >
                  {item}
                </List.Item>
              )}
            ></List>
          </div>
        </Space>
      </div>
    );
  }
}

export default TodoList;
