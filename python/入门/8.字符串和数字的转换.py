a = 100

# 报错,str不能加int,看看js多强大
# print('输出一个数字: ' + a)

# 通过类型转换
print('输出一个数字: ' + str(a))

print()

a = input("请输入一个数: ")
b = input("请再输入一个数: ")
c = float(a) + float(b)
# c = int(a) + int(b)

print('两数之和: ' + str(c))
