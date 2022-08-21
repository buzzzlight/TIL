# 양의 정수 number가 주어질 때, 숫자의 길이를 구하시오. 
# 양의 정수number를 문자열로 변경하는 것은 금지입니다. str() 사용 금지

# number = int(input())
# print(len(number))

# TypeError: object of type 'int' has no len()
# int형은 len 함수를 쓰지 못한다

number = int(input())

def digit(number):
    cnt = 0

    if number == 0:
        cnt = 1
    else:
        while number:
            number //= 10
            cnt += 1

    return cnt

print(digit(number))

