set1 = {1, 21223, 1, 3, 1, 3, 13, 1, 3, 34, 5}
set2 = set('哈哈')

# 集合不会有重复,会自动去重
print(set1)
print(set2)

# 空集合必须要用set
set3 = set()
print(set1 - set2)  # set1 和 set2 的差集

print(set1 | set2)  # set1 和 set2 的并集

print(set1 & set2)  # set1 和 set2 的交集 (这里是空)

print(set1 ^ set2)  # set1 和 set2 中不同时存在的元素
