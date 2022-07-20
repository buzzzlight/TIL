# 주어진 숫자부터 0까지 순서대로 찍어보세요
# 8 입력시 8 7 6 5 4 3 2 1 0 출력

T = int(input())

for test_case in range(1, T + 2):
    print(T, end=' ')
    T -= 1