# 정수 2개 입력받아 자동 계산하기

a, b = map(int, input().split())
div = a / b

print(a + b, a - b, a * b, a // b, a % b, format(div, ".2f"), sep='\n')