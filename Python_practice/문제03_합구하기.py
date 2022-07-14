# 1부터 n까지의 합을 구하여 출력하는 코드를 1) while 문 2) for 문으로 각각 작성하시오.

# while 문
n = 0
total = 0
num = int(input())

while n < num:
    n += 1
    total += n

print(total)

# for 문
n = 0
total = 0
num = int(input())

for n in range(num):
    n += 1
    total += n

print(total)