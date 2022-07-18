# 아래 코드는 숫자의 길이를 구하는 코드입니다.
# 코드에서 오류를 찾아 원인을 적고, 수정하세요.

# number = 22020718
# print(len(number))

# TypeError: object of type 'int' has no len()
# int 타입은 len 함수를 쓸 수 없다. str으로 바꿔주자

number = 22020718
print(len(str(number)))
