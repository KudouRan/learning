first_name = '这是字符串'
last_name = "我也是字符串"

# 但是从风格上,不应该同时使用单引号和双引号做为字符串

print(first_name + last_name)
print('Hello' + first_name + ' ' + last_name)
# 输出空行
print()
# python可以使用 \ 将代码直接换行
# capitalize 首字母大写
print('Hello' + first_name.capitalize() + \
      ' ' + last_name.capitalize())

print(first_name * 2)
