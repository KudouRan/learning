first_name = '这是字符串'
last_name = '我也是字符串'

output = 'Hello, ' + first_name + ' ' + last_name
print(output)

# 按顺序填充{}
output = 'Hello, {} {}'.format(first_name, last_name)
print(output)

# 按照下标选取
output = 'Hello, {1} {0}'.format(first_name, last_name)
print(output)

# 格式化字符串(es中有模板字符串)
output = f'Hello, {first_name} {last_name}'
print(output)

# 输出原始数据 开始加个r,\n不再是换行
print(r'1\n12313')
