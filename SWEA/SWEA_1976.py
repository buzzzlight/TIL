# 1976. 시각 덧셈

# [제약 사항]
# 시는 1 이상 12 이하의 정수이다. 분은 0 이상 59 이하의 정수이다.

# [입력]
# 가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다.
# 각 테스트 케이스의 첫 번째 줄에는 4개의 수가 주어진다.
# 첫 번째 수가 시를 나타내고 두 번째 수가 분을 나타낸다. 그 다음 같은 형식으로 두 번째 시각이 주어진다.

# [출력]
# 출력의 각 줄은 '#t'로 시작하고 공백을 한 칸 둔 다음, 시를 출력하고 공백을 한 칸 둔 다음 분을 출력한다.
# (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)

T = int(input())

for test_case in range(1, T + 1):
    H1, M1, H2, M2 = map(int, input().split())
    H = H1 + H2
    M = M1 + M2
    if M >= 60:
        M = M - 60
        H = H + 1
    if H > 12:
        H = H - 12
    print(f'#{test_case} {H} {M}')

# 12 30 12 30 ---> 1 0 이 나오려면... 근데 오답됨 이거...
T = int(input())

for test_case in range(1, T + 1):
    H1, M1, H2, M2 = map(int, input().split())
    H = H1 + H2
    M = M1 + M2
    if M >= 60:
        M = M - 60
        H = H + 1
    if 24 > H > 12:
        H = H - 12
    if 24 <= H:
        H = H - 24
    print(f'#{test_case} {H} {M}')