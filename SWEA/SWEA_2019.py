# 2019. 더블더블

# 1부터 주어진 횟수까지 2를 곱한 값(들)을 출력하시오.
# 주어질 숫자는 30을 넘지 않는다.

T = int(input())

for test_case in range(0, T + 1):
    test_case = 2 ** (test_case)
    print(test_case, end=' ')