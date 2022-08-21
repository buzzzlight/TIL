# 아래 코드는 문자열을 입력받아 단어별로 나누는 코드입니다.
# 코드에서 오류를 찾아 원인을 적고, 수정하세요.

# words = list(map(int, input().split()))
# print(words)

# ValueError: invalid literal for int() with base 10: 'asdasd'
# 문자열을 입력받아 단어별로 나눠야되므로 str 타입으로 input 받아야 함

words = list(input().split())
print(words)