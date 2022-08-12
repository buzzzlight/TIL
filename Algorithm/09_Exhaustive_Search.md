# 완전탐색Ⅰ(Exhaustive Search)

## 1. Brute-force

> 모든 경우의 수를 탐색하여 문제를 해결하는 방식 (무식하게 푸는 법)

- 브루트포스, 무식하게 밀어붙인다는 뜻
- 가장 단순한 풀이 기법이며 단순 조건문과 반복문을 이용해서 풀 수 있다
- 복잡한 알고리즘 보다는 아이디어를 어떻게 코드로 구현할 것인지가 중요

### 연습문제

[BOJ 2798 : 블랙잭](https://www.acmicpc.net/problem/2798)

```python
N, M = map(int, input().split())
card = list(map(int, input().split()))
max_ = 0

for i in range(N - 2):
    for j in range(i + 1, N - 1):
        for k in range(j + 1, N):
            total = card[i] + card[j] + card[k]
            if max_ < total <= M:
                max_ = total
            if max_ == M:
				break
print(max_)
```

#### 배낭채우기 문제 (Knapsack Problem)

> 담을 수 있는 최대 무게가 정해진 배낭과 함께 각각의 무게와 가치가 주어진 아이템의 집합이 주어졌을 때, 배낭에 담은 아이템들의 가치의 합이 최대가 되도록 하는 아이템들의 부분집합을 찾는 문제

## 2. Delta Search

델타 탐색 (상하좌우 탐색)

- (0, 0) 부터 이차원리스트의 모든 원소를 순회하며(완전탐색) **각 지점에서 상하좌우에 위치한 다른 지점을 조회하거나 이동**하는 방식

- 이차원 리스트의 인덱스의 조작을 통해서 상하좌우 탐색을 한다. 이 때 행과 열의 변량인 -1, +1을 **델타값**이라고 한다

### 델타값을 이용해 상하좌우로 이동하기

```python
# 1) 행을 x, 열을 y로 표현
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
      상 하  좌  우 이동

# 상하좌우
for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    
for delta in range(4):
    dx[delta]
    dy[delta]
    
delta = [(-1, 0), (1, 0), (0, -1), (0, 1)]
for d in delta:
    nx = x + d[0]
    ny = y + d[1]
    
# 2) 행을 r, 열을 c로 표현
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]
```

### 상하좌우 인덱스 범위 확인 및 갱신

```python
# 1. 델타값을 이용해 상하좌우 이동
for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    
    #2. 범위를 벗어나지 않으면 갱신 ⭐⭐⭐
    if 0 <= nx < 3 and 0 <= ny < 3:
    	x = nx
        y = ny
```

### 델타 탐색 정리

```python
# 1. 델타값 정의 (상하좌우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 2. 이차원 리스트 순회
for x in range(n):
    for y in range(m):
        
        # 3. 델타값을 이용해 상하좌우 이동(델타순회)
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            # 4. 범위를 벗어나지 않으면 갱신(경계값)
            if 0 <= nx < n and 0 <= ny < m:
                x = nx
                y = ny
```

### 8방향 델타값

```python
dx = [-1, 1, 0, 0, -1, 1, -1, 1]
dy = [0, 0, -1, 1, -1, -1, 1, 1]
	  상 하 좌  우  좌상 좌하 우상 우하

# 시계방향
delta = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (1, -1), (-1, -1)]
```