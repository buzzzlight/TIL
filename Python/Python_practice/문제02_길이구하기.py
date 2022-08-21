# 문자열 word의 길이를 출력하는 코드를 1) while문 2) for문(문자열 그대로) 3) for문(index)으로 각각 작성하시오.
# len() 함수 사용 금지

n = 0
word = input()

for i in word:
    n += 1

print(n)