# 学生类
class Student:
    def __init__(self, _name, _dob, _age, _gender, _score):
        self.name = _name
        self.dob = _dob
        self.age = _age
        self.gender = _gender
        self.score = _score

    def top3(self):
        return sorted(self.sanitize(self.score))[-3:]

    def sanitize(self, _score):
        return [abs(int(score)) for score in _score]


# 读取信息
def get_coach_data(filename):
    with open(filename, encoding='utf-8') as f:
        line = f.readline()
    return line.strip().split(',')


# 创建学生
def obj_factory(filename):
    student_data = get_coach_data(filename)
    return Student(student_data.pop(0), student_data.pop(0), student_data.pop(0), student_data.pop(0), student_data)


# 生成学生list
stu_list = [obj_factory(f'work/stu{i + 1}.txt') for i in range(4)]


# # 打印学生list
# for stu in stu_list:
#     print('姓名：%s 生日：%s 年龄：%s 性别：%s 分数：%s' % (stu.name, stu.dob, stu.age, stu.gender, stu.top3()))

class Spostudent(Student):
    def __init__(self, _name, _dob, _age, _gender, _spe, _score):
        Student.__init__(self, _name, _dob, _age, _gender, _score)
        self.spe = _spe

    def top3(self):
        # 最低三个
        return sorted(self.sanitize(self.score))[0:3]


class Artstudent(Student):
    def __init__(self, _name, _dob, _age, _gender, _spe, _score):
        Student.__init__(self, _name, _dob, _age, _gender, _score)
        self.spe = _spe


def print_spostudent(spostudent):
    print('姓名：%s 生日：%s 年龄：%s 性别：%s 分数：%s 特长分：%s' % (
        spostudent.name, spostudent.dob, spostudent.age, spostudent.gender, spostudent.top3(), spostudent.spe))


spostudent1 = get_coach_data('work/stu5.txt')
spostudent2 = get_coach_data('work/stu6.txt')

spostudent1 = Spostudent(spostudent1.pop(0), spostudent1.pop(0), spostudent1.pop(0), spostudent1.pop(0), spostudent1.pop(0), spostudent1)
spostudent2 = Spostudent(spostudent2.pop(0), spostudent2.pop(0), spostudent2.pop(0), spostudent2.pop(0), spostudent2.pop(0), spostudent2)

print_spostudent(spostudent1)
print_spostudent(spostudent2)
