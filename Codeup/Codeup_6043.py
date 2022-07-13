# 실수 2개 입력받아 나눈 결과 계산하기

f1, f2 = input().split()
f1, f2 = float(f1), float(f2)
div = f1 / f2

print(format(div, ".3f"))