# 소문자로 구성된 문자열 word가 주어질 때, 모두 대문자로 바꾸어 표현하시오.
# .upper(), .swapcase() 사용 금지

word = input()
word_upper = ''
n = 0

for i in word:
    n = ord(i) - 32
    word_upper += chr(n)

print(word_upper)
