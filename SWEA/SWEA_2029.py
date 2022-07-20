# 2개의 수 a, b를 입력 받아, a를 b로 나눈 몫과 나머지를 출력하는 프로그램을 작성하라.
# 각 수는 1이상 10000이하의 정수이다.

# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
    a, b = map(int, input().split())
    quo = a // b
    remain = a % b
    print('#', test_case , quo, remain)