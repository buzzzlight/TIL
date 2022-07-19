# 정수 number가 주어질 때, 각 자릿수의 합을 구해서 출력하세요. 

# number = int(input())

# def sum_digit(number):
#     total = 0
#     str_num = str(number)

#     for digit in str_num:
#         total += int(digit)

#     return total

# print(sum_digit(number))

# str 안쓰고 풀기

number = int(input())

result = 0
while number:
    result += number % 10
    number //= 10

print(result)
