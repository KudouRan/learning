const mysql = require('mysql');

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

conn.query("SELECT name FROM students;SELECT sex FROM students;SELECT age FROM students", (e, r) => {
  if (e) {
    console.log(e);
  } else {
    console.log(r[0]);
    console.log(r[1]);
    console.log(r[2]);
  }
})