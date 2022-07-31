# List

## 배열 (Array)

> 여러 데이터들이 연속된 메모리 공간에 저장되어 있는 자료구조

- 인덱스를 통해 데이터에 빠르게 접근
- 배열의 길이는 변경 불가능 ==> 길이를 변경하고 싶다면 새로 생성
- 데이터 타입은 고정

## 연결 리스트 (Linked List)

> 데이터가 담긴 여러 노드들이 순차적으로 연결된 형태의 자료구조

- 맨 처음 노드부터 순차적으로 탐색
- 연결리스트의 길이 자유롭게 변경 가능 ==> 삽입, 삭제가 편리
- 다양한 데이터 타입 저장
- 데이터가 메모리에 연속적으로 저장되지 않음

## 파이썬의 리스트

- 배열 인덱스 접근 + 연결리스트 가변 길이 == 파이썬의 리스트

### 메소드

- `.append(원소)` : 리스트 맨 끝에 새로운 원소 삽입

```python
a = [1, 2, 3]
a.append(4)
print(a)
# [1, 2, 3, 4]

a = [1, 2, 3]
a.append(["a", "b"])
print(a)
# [1, 2, 3, "a", "b"]
```

- `.pop(인덱스)` : 특정 인덱스에 있는 원소 삭제 및 반환

```python
a = [1, 2, 3]
b = a.pop()
print(a)
print(b)
# [1, 2]
# 3

a = [1, 2, 3]
b = a.pop(2)
print(a)
print(b)
# [1, 2]
# 3
```

- `.count(원소)` : 리스트에서 해당 원소의 개수 반환

```python
a = [1, 2, 2, 3, 3, 3]
print(a.count(2))
# 2
```

- `.index(원소)` : 리스트에서 처음으로 원소가 등장하는 **인덱스** 반환

```python
a = [1, 2, 3, 4, 5]
print(a.index(2))
# 1
```

- `.sort()` : 리스트를 오름차순으로 정렬 (내림차순: reverse=True)

```python
a = [5, 2, 4, 0, -1]
a.sort()
print(a)
# [-1, 0, 2, 4, 5]

a = [5, 2, 4, 0, -1]
a.sort(reverse=True)
print(a)
# [5, 4, 2, 0, -1]
```

- `.reverse()` : 리스트 원소들의 순서를 거꾸로 뒤집기

```python
a = [1, 2, 3, 4, 5]
a.reverse()
print(a)
# [5, 4, 3, 2, 1]
```

### 리스트 관련 내장함수

- `len(iterable)` : 리스트의 길이(원소 개수) 반환
- `sum(iterable)` : 리스트의 모든 원소의 합을 반환
- `max(iterable)` : 리스트의 원소 중 최대값 반환
- `min(iterable)` : 리스트의 원소 중 최소값 반환
- `sorted(iterable)` : 오름차순으로 정렬된 새로운 리스트 반환 (원본 리스트는 변화 없음)

```python
a = [5, 2, -1, 0, 1]
b = sorted(a)
c = sorted(a, reverse=True)

print(a)
# [5, 2, -1, 0, 1] < 원본 출력
print(b)
# [-1, 0, 1, 2, 5] < 오름차순
print(c)
# [5, 2, 1, 0, -1] < 내림차순
```

- `reversed(iterable)` : 리스트의 순서를 거꾸로 뒤집은 새로운 객체 반환 (원본 리스트는 변화 없음)

```python
a = [1, 2, 3, 4, 5]
b = reversed(a)
c = list(reversed(a))

print(a)
# [1, 2, 3, 4, 5] < 원본 출력
print(b)
# <list_reverseiterator object at 0x000000198CE25E740>
print(c)
# [5, 4, 3, 2, 1]
```

## 리스트 Comprehension

> 코드 한줄만으로 새로운 리스트를 만드는 방법

```python
numbers = []
for i in range(5):
    numbers.append(i)
print(numbers)
# [0, 1, 2, 3, 4]

## Comprehension
numbers = [i for i in range(5)]
print(numbers)
# [0, 1, 2, 3, 4]

## if문으로 필터링도 가능
odd_numbers = [i for i in range(10) if i % 2 == 1]
print(odd_numbers)
[1, 3, 5, 7, 9]
```

### 연습문제

- 정수 n을 입력받아, 1부터 n까지의 제곱수를 리스트로 만들어 출력하는 프로그램을 작성하라

```python
n = int(input())
numbers = [i**2 for i in range(1, n+1)]
print(numbers)
```

- 리스트 내포를 이용하여 1번부터 입력받은 숫자까지의 숫자에 "No."를 붙인 문자열을 원소로 하는 리스트를 만들어 출력하시오

```python
n = int(input())
numbers = ['No.' + str(i) for i in range(1, n+1)]
print(numbers)
```

