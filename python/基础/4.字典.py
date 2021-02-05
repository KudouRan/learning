"""
字典（dictionary）是Python中另一个非常有用的内置数据类型。

列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。

字典是一种映射类型，字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合。

键(key)必须使用不可变类型。

在同一个字典中，键(key)必须是唯一的。
"""

dict1 = {'one': "1 - 菜鸟教程", 2: "2 - 菜鸟工具"}

tiny_dict = {'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}

print(dict1['one'])  # 输出键为 'one' 的值
print(dict1[2])  # 输出键为 2 的值
print(tiny_dict)  # 输出完整的字典
print(tiny_dict.keys())  # 输出所有键
print(tiny_dict.values())  # 输出所有值
