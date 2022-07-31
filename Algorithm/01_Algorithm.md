# 알고리즘

> 어떤 문제를 해결하기 위해 정해진 일련의 절차나 행동
>
> Input ===> 알고리즘 ===> Output

## 코딩테스트

- **문제 해결력** : 문제 의도를 정확히 파악하고, 적절한 해결 방법을 적용할 수 있는가
- **구현력** : 해결 방법을 프로그래밍을 통해 능숙하게 구현할 수 있는가

- 같은 유형 문제를 단기간에 여러번 반복하는 것이 좋고 코딩테스트 직전에는 모의고사처럼 시간 제한을 두고 여러 유형을 푸는 것이 좋음
- 오랜 시간 고민했을때 풀리지 않을 때, 타인의 답을 많이 보면서 여러 풀이를 습득하는 것이 좋음 하지만 이후에 답을 보지 않고 반드시 한번 스스로 풀어서 내것으로 만들어야 함

### 팁

- **변수명** 잘 짓기
- 언어가 가지는 **내장함수, 라이브러리**를 적극 활용하기
- 반복되는 코드는 **함수화**를 통해 가독성 있게 작성
- 면접을 대비해 남에게 풀이를 **설명**하는 연습하기

### 문제풀이 사이트

- 백준
- 프로그래머스
- 코드업
- SW Expert Academy

## 데이터 구조

- 프로그램 = 데이터 구조 + 알고리즘

- 데이터를 다양한 방식으로 저장하고 조회, 삽입, 변경, 삭제와 같은 조작 기능을 제공한다
- 데이터를 필요에 따라 저장하고 활용할 수 있으므로 문제를 더 효율적으로 풀기 위한 도구가 됨
- 어떻게 저장하고 어떻게 활용할 수 있는지 알아야 함

### 데이터구조 종류

- 리스트
- 튜플
- 레인지
- 세트
- 딕셔너리
- 문자열
- 스택
- 큐
- 그래프

### 알고리즘 종류

- 재귀
- 완전탐색
- 시뮬레이션
- 깊이우선탐색 (DFS)
- 너비우선탐색 (BFS)
- 백트래킹

# 입력과 출력

## 입력 활용 예시

### input()

```python
# 문자열 입력 받기
a = input()

# 숫자 한 개 입력 받기
b = int(input())
c = float(input())

# 숫자 여러개 입력 받기
d, e = map(int, input().split())
f, g, h = map(float, input().split())
i, j = map(int, input())
# 12
# i = 1, j = 2
```

### map(*function, iterable*)

```python
map(int, ["1", "2", "3"])
# 각 원소에 int를 적용 ==> 정수 1, 2, 3 반환

map(float, [1, 2, 3])
# 각 원소에 float를 적용 ==> 부동소수점 1.0, 2.0, 3.0 반환

map(int, '123')
# 리스트 뿐만 아니라 문자열에도 적용 가능
# 각 원소에 int를 적용 ==> 정수 1, 2, 3을 반환
```

### map으로 입력 받는 과정

```python
a, b = map(int, input().split())
>>> 1 2

a, b = map(int, "1 2".split())

a, b = map(int, ["1", "2"])

a, b = 1, 2

a, b, c = map(int, input())
>>> 123
print(a + b + c)
>>> 6
```

## 출력 활용 예시 (print)

- print()는 데이터를 출력할 수 있는 함수이며 자동적으로 줄바꿈 발생

```python
a = Hello
b = World

print(a, b)
# Hello World

print(a, end="@")
print(b)
# Hello@World

print(a, b, sep="\n")
# Hello
# World
```

```python
a, b, c = map(int, input().split())
>>> 1 2 3

print(a, b, c, end='&')
# 1 2 3&
```

### 참고

[Introduction to Computer Science and Programming Using Python (MIT)](https://www.edx.org/course/introduction-to-computer-science-and-programming-7)

[버클리 강의](https://cs61a.org/)