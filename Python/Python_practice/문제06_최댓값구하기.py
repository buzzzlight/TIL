# 주어진 리스트 numbers에서 최댓값을 구하여 출력하시오.
# max() 함수 사용 금지

numbers = [-10, -100, -30]
max = numbers[0]

for i in numbers:
    if max <= i:
        max = i

print(max)
