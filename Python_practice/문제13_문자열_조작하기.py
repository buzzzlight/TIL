# 주어진 문자열 word가 주어질 때, 
# 해당 단어를 역순으로 뒤집은 결과를 출력하시오.

# Slice
word = input()
print(word[::-1])

# For 문
word = input()
word_a = ''

for char in word:
    word_a = char + word_a

print(word_a)

# index
word = 'apple'

for i in range(len(word)):
    print(word[len(word)-i-1], end='')
