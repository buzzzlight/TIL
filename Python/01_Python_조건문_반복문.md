# 제어문 (Control Statement)

- 위에서 아래로 순차적으로 명령 수행
- 특정 상황에 따라 코드를 선택적으로 실행하거나 계속 실행하는 제어 필요
- 제어문은 순서도(flow chart)로 표현 가능

## 조건문 (Conditional Statement)

### 조건문 if else

- 조건문은 True/False를 판단할 수 있는 조건식과 함께 사용
- else에는 조건을 쓰지 않음. else는 필요에 따라 생략 가능

```python
## 홀수/짝수 확인하는 코드

num = int(input())

if num % 2 == 1:
	print('홀수')
else:
	print('짝수')
```

### 복수 조건문 if elif

- 복수의 조건식을 활용할 경우 elif 사용

```python
## 미세먼지 농도에 따른 등급을 출력하는 조건식
dust = int(input())

if dust > 150 :
    print('매우 나쁨')
elif dust > 80 :
    print('나쁨')
elif dust > 30 :
   	print('보통')
else :
    print('좋음')
print('미세먼지 확인 완료')
```

### 중첩 조건문 if if else

- 조건문은 다른 조건문에 중첩해 사용할 수 있음 (들여쓰기 유의)

```python
## 미세먼지 농도가 300이 넘는 경우 '실외활동을 자제하세요'
## 음수인 경우 '값이 잘못 되었습니다'
dust = int(input())

if dust > 150:
    if dust > 300:
        print('실외활동을 자제하세요')
    print('매우 나쁨')
elif dust > 80:
    print('나쁨')
elif dust > 30:
   	print('보통')
else:
    if dust < 0:
        print('값이 잘못 되었습니다')
    else:
    	print('좋음')
        
print('미세먼지 확인 완료')
```

### 조건 표현식

> <true인 경우 값> if <조건식> else <false인 경우 값>

```python
## 절대값 계산기
num = -10

## 조건문 코드
if num >= 0:
	value = num
else:
    value = -num
print(num, value)

## 조건 표현식 코드
value = num if num >= 0 else -num

## elif 사용 불가
```

## 반복문(Loop Statement)

> 특정 조건을 도달할 때까지, 계속 반복되는 일련의 문장

### while 문

- 조건식이 참일 경우 반복적으로 코드 실행
- 무한루프를 하지 않도록 종료 조건이 반드시 필요

```python
a = 0
while a < 5:
    print(a)
    a += 1
print('끝')

## 다섯번 반복 됨
```

```python
# 1부터 사용자가 입력한 양의 정수까지의 총합을 구하는 코드를 작성하시오.

n = 0
total = 0 # 곱을 구할 경우엔 초기값 1
user_input = int(input())

while n < user_input:
	# print(f'n: {n}, result: {result}')
    n += 1
    total += n
print(total)
```

### for 문

- for문은 시퀀스(string, tuple, list, range, dic, enumerate)를 포함한 순회가능한 객체(iterable)요소를 모두 순회함
  - 처음부터 끝까지 모두 순회하므로 별도의 종료조건 필요없음

```python
# 사용자가 입력한 문자를 한 글자씩 세로로 출력

chars = input()

for char in chars:
    print(char)
```

```python
# 사용자가 입력한 문자를 한 글자씩 세로로 출력 (range 사용)
# 인덱스(idx) 활용

chars = input()

for idx in range(len(chars))
	print(chars[idx])
```

- **enumerate 순회**
  - 인덱스와 객체를 쌍으로 담은 열거형(enumerate) 객체 반환
    - (index,value) 형태의 tuple로 구성된 열거 객체를 반환

```python
members = ['민수', '영희', '철수']

for i in range(len(members)):
    print(f'{i} {members[i]}')
    
# enumerate [(0,'민수'), (1,'영희'), (2,'철수')]
for i, member in enumerate(members):
    print(i, member)
```

- **딕셔너리 순회**: 딕셔너리는 기본적으로 key를 순회하며 key를 통해 값을 활용

```python
grades = {'john': 80, 'eric': 90}
for name in grades:
    print(name)
    
# john
# eric

grades = {'john': 80, 'eric': 90}
for name in grades:
    print(name, grades[name])
    
# john 80
# eric 90
```

### 반복문 제어

- **break**
  - 반복문 종료

```python
n = 0
while True:
    if n == 3:
        break
    print(n)
    n += 1

# 0
# 1
# 2
```

```python
for i in range(10):
    if i > 1:
        print('0과 1만 필요해!')
        break
    print(i)
    
# 0
# 1
# 0과 1만 필요해!
```

- **continue**
  - continue 이후의 코드블록은 수행하지 않고, 다음 반복을 수행

```python
for i in range(6):
    if i % 2 == 0:
        continue
    print(i)

# 1
# 3
# 5
```

- **for - else**
  - 끝까지 반복문을 실행한 이후 else문 실행
    - break를 통해 중간에 종료되는 경우 else문은 실행되지 않음

```python
for char in 'apple':
    if char == 'b':
        print('b!')
        break
else:
    print('b가 없습니다.')

# b가 없습니다.
```

```python
for char in 'banana':
    if char == 'b':
        print('b!')
        break
else:
    print('b가 없습니다.')
    
# b!
```

## 참고 자료

- [Python Tutor](https://pythontutor.com/)
