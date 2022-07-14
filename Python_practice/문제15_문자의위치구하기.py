# 문자열 word가 주어질 때, 
# 해당 문자열에서 a 가 처음으로 등장하는 위치(index)를 출력해주세요.
# a 가 없는 경우에는 -1을 출력해주세요.
# find() index() 메서드 사용 금지

word = input()
idx = 0

for i in word:
    if i == 'a':
        break
    idx += 1
    if idx == len(word):
        idx = -1

print(idx)


# 문자열 word가 주어질 때, 해당 문자열에서 a 의 모든 위치(index)를 출력해주세요.
# find() index() 메서드 사용 금지

# word = input()
# idx = -1

# for i in word:
#     idx += 1
#     if i == 'a':
#         print(idx, end=' ')

# 다른 방법
# word = input()

# for i in range(len(word)):
#     if word[i] == 'a':
#         print(i, end=' ')