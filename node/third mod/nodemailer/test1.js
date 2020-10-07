const auth = {
  user: 'catlair@qq.com',
  pass: 'decnavaxievydjde'
}

const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <catlair@qq.com>', // sender address
    to: "catlair@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });
}

main().then(() => {
  console.log('发送成功');
}).catch(console.error);