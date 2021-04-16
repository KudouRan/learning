const {Service} = require('egg');

class StudentService extends Service {
    async find(name) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const student = await this.app.mysql.get('students', {name});
        // const student = await this.app.mysql.insert('students', {name, age: 100, sex: '无'});
        //  const student = await this.app.mysql.update('students', {name:'王五', age: 19, sex: '无'},{where:{age:100}});
        //   const student = await this.app.mysql.delete('students', {name});
        return {student};
    }
}

module.exports = StudentService;