# 두 수를 Input으로 받아 합을 구하는 코드이다.
# 코드에서 오류를 찾아 원인을 적고, 수정하세요.

# numbers = input().split()
# print(sum(numbers))

# TypeError: unsupported operand type(s) for +: 'int' and 'str'
# input으로 받아서 타입이 str인 상태, sum을 하려면 int로 바꿔준다!

numbers = map(int, input().split())
print(sum(numbers))