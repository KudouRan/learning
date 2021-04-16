const auth = {
  user: 'catlair@qq.com',
  pass: 'decnavaxievydjde'
}

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // trues使用465端口
  auth
});

transporter.sendMail({
  from: '"测试邮件" <catlair@qq.com>',
  to: "2232085558@qq.com",
  subject: "Hello ✔", 
  text: "Hello world?",
  html: "<b>Hello world?</b>"
});