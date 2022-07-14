# 6058 : [기초-논리연산] 둘 다 거짓일 경우만 참 출력하기

a, b = map(int, input().split())
print(not (bool(a) or bool(b)))