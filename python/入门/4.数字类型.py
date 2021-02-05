"""
Number数字类型

数字类型有int, float, bool, complex(复数)

查看类型可以使用type(),
也可以使用isinstance(数据,类型)

type()不会认为子类是一种父类类型。
isinstance()会认为子类是一种父类类型。

bool使用的是True,False ,因为他是类
"""

# 定义
a = 1
b = 1.2
c = True
d = 3 + 2j

print('类型')
print(type(a), type(b), type(c), type(d))
print()

print(isinstance(c, bool))
print()

# 删除一个或多个对象
del d
# d is not defined
# print(d, '\n')

