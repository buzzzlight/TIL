# 문자열 word가 주어질 때, 
# Dictionary를 활용해서 해당 문자열에서 등장한 모든 알파벳 개수를 구해서 출력하세요.

# 1.
word = input()
my_dict = {}

for char in word:
    # 딕셔너리에 키가 없으면?
    my_dict[char] = 1
# 딕셔너리에 키가 있으면?
else:
    my_dict[char] = my_dict[char] + 1
print(my_dict)

# 2.
word = input()
my_dict = {}

for char in word:
    # result['a', 0) 기본값이 0
    my_dict[char] = my_dict.get(char, 0) + 1
print(my_dict)

# 출력부분
for key in my_dict:
    print(key, my_dict[key])