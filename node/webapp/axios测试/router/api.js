const express = require('express');
const path = require('path');
const apiPage = express.Router();


/**
 * @api {get} /login get参数测试
 * @apiName getparam
 * @apiGroup Test-GET
 * @apiDescription 有两个用户user1,user2
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} username 例如user2
 *
 * @apiSuccess {JSON} msg 是否成功及返回数据
 */

apiPage.get('/getUser', (req, res) => {
  if (req.query.username === 'user1') {
    res.json({
      msg: '成功',
      status: "success",
      date: {
        username: 'user1',
        age: 18,
        sex: '男'
      }
    })
  } else if (req.query.username === 'user2') {
    res.json({
      msg: '成功',
      status: "success",
      date: {
        username: 'user2',
        age: 17,
        sex: '女'
      }
    })
  } else {
    res.json({
      msg: '失败',
      status: "fail",
      date: {}
    })
  }
})


/**
 * @api {post} /login post登录测试
 * @apiName login
 * @apiGroup Test-POST
 * @apiDescription 测试登录接口,账号catlair,密码123
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} username 用户名catlair
 * @apiParam {String} password 用户密码123
 *
 * @apiSuccess {JSON} msg 是否成功及返回数据
 */

apiPage.post('/login', (req, res) => {
  if (req.body.password === '123' && req.body.username === 'catlair') {
    res.json({
      msg: '成功',
      status: "success"
    })
  } else {
    res.json({
      msg: '失败',
      status: "fail"
    })
  }
})



const jsonPackage = {
  "name": "demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "vue": "^2.6.11",
    "vuex": "^3.1.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-vuex": "~4.2.0",
    "@vue/cli-service": "~4.2.0",
    "vue-template-compiler": "^2.6.11"
  }
};


/**
 * @api {get} /package 请求一个package.json
 * @apiName package
 * @apiGroup Test-GET
 * @apiVersion 0.1.0
 *
 * @apiSuccess {JSON} package package文件
 */

apiPage.get('/package', (req, res) => {
  res.json({
    msg: '成功',
    data: jsonPackage
  })
})

module.exports = apiPage;