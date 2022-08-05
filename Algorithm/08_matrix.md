# 이차원 리스트

> **리스트를 원소로 가지는 리스트** (리스트안에 리스트)

- 이차원 리스트는 행렬(matrix)이다

```python
matrix = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]]

# 행렬 형태
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 인덱스
print(matrix[0][0])
>>> 1
print(matrix[1][2])
>>> 6
print(matrix[2][0])
>>> 7
```

### 반복문으로 행렬 만들기

```python
# 100X100 행렬 만들기
from pprint import pprint

matrix = []

for _ in range(100):
    matrix.append([0] * 100)
    
pprint(matrix)
```

```python
# n X m 행렬 만들기
n = 4 # 행 개수
m = 3 # 열 개수
matrix = []

for _ in range(n):
    matrix.append([0] * m)
    
print(matrix)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### 리스트 컴프리헨션으로 행렬 만들기

```python
n = 4 # 행 개수
m = 3 # 열 개수

matrix = [[0] * m for _ in range(n)]

print(matrix)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### [주의] 리스트 컴프리헨션 vs 리스트 곱셈 연산

```python
n = 4 # 행 개수
m = 3 # 열 개수

matrix1 = [[0] * m for _ in range(n)]
matrix2 = [[0] * m] * n

print(matrix1)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
print(matrix2)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
# 출력값은 똑같지만 둘이 다른 행렬이다!!!
# 주소값이 다름

matrix1[0][0] = 1
matrix2[0][0] = 1

print(matrix1)
>>> [[1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
print(matrix2)
>>> [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]]
# 값이 다르게 나온다
```

### 입력받아 행렬 만들기

```python
# 3 X 3 행렬 만들기
"""
1 2 3
4 5 6
7 8 9
"""
matrix = []

for _ in range(3):
    line = list(map(int, input().split()))
    matrix.append(line)

# 컴프리헨션
matrix = [list(map(int, input().split())) for i in range(3)]
```

```python
# n X m 크기 행렬 입력 받기
n, m = map(int, input().split())
matrix = []

# 행 개수인 n만 쓰임
for _ in range(n):
    matrix.append(list(map(int, input().split())))

matrix = [list(map(int, input().split())) for _ in range(n)]
```

### 연습문제

[BOJ 1100 : 하얀 칸](https://www.acmicpc.net/problem/1100)

```python
F = []
for _ in range(8):
    F.append(list(input()))

cnt = 0
for i in range(8):
    for j in range(8):
        if F[i][j] == 'F':
            if (i + j) % 2 == 0:
                cnt += 1

print(cnt)
```

[BOJ 1245 : 농장 관리](https://www.acmicpc.net/problem/1245)

```python
```

## 순회

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2]
]

for i in range(3):
    for j in range(4):
        print(matrix[i][j], end=" ")
	print()

>>> 1 2 3 4
>>> 5 6 7 8
>>> 9 0 1 2
# 진짜 행렬처럼 출력됨
```

### 행 우선 순회

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2]
]

# n x m
n = len(matrix)
m = len(matrix[0])

for i in range(n):
    for j in range(m):
        print(matrix[i][j]. end=" ")
    print()

# 또는

for row in matrix
	for elem in row:
        print(elem, end=" ")
    print()
```

### 열 우선 순회

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2]
]

for i in range(4):
    for j in range(3):
        print(matrix[j][i], end=" ")
	print()

>>> 1 5 9
>>> 2 6 0
>>> 3 7 1
>>> 4 8 2
# 열, 행 바꿔서 출력됨
```

### 행렬 총 합 구하기

```python
# 행 순회를 이용한 방법
matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]

total = 0

for i in range(n):
    for j in range(m):
        total += matrix[i][j]

print(total)
>>> 12
```

```python
# Pythonic한 방법
matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]

total = sum(map(sum, matrix))
print(total)
>>> 12
```

### 최댓값, 최솟값 구하기

```python
# 최댓값
matrix = [
    [0, 5, 3, 1],
    [4, 6, 10, 8],
    [9, -1, 1, 5]
]

max_value = 0

for i in range(3):
    for j in range(4):
        if matrix[i][j] > max_value:
            max_value = matrix[i][j]

print(max_value)
>>> 10

# 최솟값
matrix = [
    [0, 5, 3, 1],
    [4, 6, 10, 8],
    [9, -1, 1, 5]
]

min_value = 99999999

for i in range(3):
    for j in range(4):
        if matrix[i][j] < min_value:
            min_value = matrix[i][j]

print(min_value)
>>> -1
```

```python
# Pythonic한 방법
matrix = [
    [0, 5, 3, 1],
    [4, 6, 10, 8],
    [9, -1, 1, 5]
]

max_value = max(map(max, matrix))
min_value = min(map(min, matrix))

print(max_value)
>>> 10

print(min_value)
>>> -1
```

### 연습문제

[937 : 리스트 3 - 형성평가 9](http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=4364&sca=pyc0)

```python
print("first array")
list1 = []
for i in range(2):
    list1.append(list(map(int, input().split())))

print("second array")
list2 = []
for i in range(2):
    list2.append(list(map(int, input().split())))

list3 = []
for i in range(2):
    list3.append([0] * 3)

for i in range(2):
    for j in range(3):
        list3[i][j] = list1[i][j] * list2[i][j]

for i in range(2):
    for j in range(3):
        print(list3[i][j], end=" ")
    print()
```

## 전치 (transpose)

> 행렬의 행과 열을 서로 맞바꾸는 것

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2]
]

transposed_matrix = [[0] * 3 for _ in range(4)]

for i in range(4):
    for j in range(3):
        transposed_matrix[i][j] = matrix[j][i]
        
print(transposed_matrix)
# [
#     [1, 5, 9],
#     [2, 6, 0],
#     [3, 7, 1],
#     [4, 8, 2]
# ]
```

## 회전

### 왼쪽으로 90도 회전

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

n = 3
rotated_matrix = [[0] * n for _ in range(n)]

for i in range(n):
    for j in range(n):
        rotated_matrix[i][j] = matrix[j][n-i-1]
        
print(rotated_matrix)
# [
#     [3, 6, 9],
#     [2, 5, 8],
#     [1, 4, 7]
# ]
```

### 오른쪽으로 90도 회전

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

n = 3
rotated_matrix = [[0] * n for _ in range(n)]

for i in range(n):
    for j in range(n):
        rotated_matrix[i][j] = matrix[n-j-1][i]
        
print(rotated_matrix)
# [
#     [7, 4, 1],
#     [8, 5, 2],
#     [9, 6, 3]
# ]
```

