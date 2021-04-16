const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(9000, () => {
    console.log('服务启动')
});

const option = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'nodetest',
    connectTimeout: 5000, //连接超时
    multipleStatements: true //是否允许一个query中包含多条sql语句
};
const conn = mysql.createConnection(option);

// conn.connect((err) => {
//     if (err) {
//         console.log(err.stack);
//         return
//     }
//     console.log("连接成功");
// })

// conn.end()

//1. 插入信息
// const sql = `INSERT INTO students VALUES ('张三',20,'男');
//              INSERT INTO students VALUES ('李四',18,'男');
//              INSERT INTO students VALUES ('小王',18,'女')`;

// conn.query(sql,(e, r) => {
//     console.log(r);
// });

app.get('/api', (req, res) => {
    conn.query("SELECT * FROM students", (e, r) => {
        if (e) {
            res.json(new Result({
                code: -1,
                msg: '查询错误',
            }))
        } else {
            res.json(new Result({
                code: 1,
                msg: '查询成功',
                data: r
            }));
        }
    })
});

function Result({
    code = 1,
    msg = '',
    data = {}
}) {
    this.code = code;
    this.msg = msg;
    this.data = data;
}

// conn.query('SELECT * FROM students', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//     // connected!
// });