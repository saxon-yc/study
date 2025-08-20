#! /usr/bin/env python3

print("Hello, World1!","你好")
# sep 分隔符
print("Hello, World2!","你好",sep="|")
# end 结束符
print("Hello, World3!","你好",end="|")
# 换行符
print("Hello, World4!","你好",end="\n")
# 换行符
print("Hello, World5!","你好",end="\n")
def add(a, b):
    return a + b

print(add(1, 2))

def jc(n):
    if n == 1:
        return 1
    return n * jc(n - 1)

print(jc(5))
# 单行注释

'''
多行注释
'''
def jc2(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(jc2(5))