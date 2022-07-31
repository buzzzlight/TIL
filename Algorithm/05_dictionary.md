# 딕셔너리

## 1. 해시 테이블

- Non-Sequence & Key-Value 순서 없음. 하지만 순회 가능

```python
{
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

# Key는 immutable (변경 불가능)
```

- 딕셔너리는 해시테이블을 이용하여 Key: Value 를 저장함
- 해시 함수 : 임의 길이의 데이터를 고정 길이의 데이터로 매핑하는 함수
- 해시 : 해시 함수를 통해 얻어진 값

![1280px-Hash_table_4_1_1_0_0_1_0_LL.svg](05_dictionary.assets/1280px-Hash_table_4_1_1_0_0_1_0_LL.svg.png)

https://emn178.github.io/online-tools/sha256.html

- **파이썬 딕셔너리**는 해시함수와 해시테이블을 이용하기 때문에 **삽입, 삭제, 수정, 조회 연산의 속도가 리스트보다 빠르다**
- 파이썬 시간복잡도 딕셔너리 VS 리스트 

|    연산     | 딕셔너리 |     리스트     |
| :---------: | :------: | :------------: |
|  Get item   |   O(1)   |      O(1)      |
| Insert Item |   O(1)   | O(1) 또는 O(N) |
| Update Item |   O(1)   |      O(1)      |
| Delete Item |   O(1)   | O(1) 또는 O(N) |
| Search item |   O(1)   |      O(N)      |

- 딕셔너리를 사용하는 경우
  - 리스트를 사용하기 힘든 경우
  - 데이터에 대한 **빠른 접근 탐색**이 필요한 경우
  - 현실 세계의 대부분의 데이터를 다룰 경우

## 2. 딕셔너리 기본 문법

### 선언 `{}`

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}
print(a)
#{'name': 'kyle', 'gender': 'male', 'address': 'Seoul'}
```

### 삽입, 수정

- `딕셔너리[key] = value`
- 내부에 key가 없으면 삽입, 있으면 수정

```python
## 삽입
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

a['job'] = 'coach'

print(a)
# {'name': 'kyle', 'gender': 'male', 'address': 'Seoul', 'job': 'coach'}
```

```python
## 수정
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

a['name'] = 'justin'

print(a)
# {'name': 'justin', 'gender': 'male', 'address': 'Seoul', 'job': 'coach'}
```

### 삭제 

- `딕셔너리.pop(key)`
- 내부에 존재하는 key에 대한 value 삭제 및 반환
- 존재하지 않는 key에 대해서는 KeyError 발생
- 두번째 인자로 기본값을 지정하여 KeyError 방지 가능


```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

gender = a.pop("gender")

print(a)
print(gender)
# {'name': 'kyle', 'address': 'Seoul'}
# male
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

phone = a.pop("phone")

print(a)
print(phone)
# KeyError

## KeyError 방지
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

phone = a.pop("phone", "010-1234-5678")

print(a)
print(phone)
# {'name': 'kyle', 'gender': 'male', address': 'Seoul'}
010-4173-0295
```

### 조회

- key에 해당하는 value 반환

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

print(a['name'])
# kyle
print(a.get()'name')
# kyle

print(a['phone'])
# KeyError
print(a.get('phone'))
# None
print(a.get('phone', '없음'))
# 없음
```

### Counting

```python
# Counting
scores = ["A", "A", "B", "c", "D" "A", "B"]

counter = {
	"A" : 0,
    "B" : 0,
    "C" : 0,
    "D" : 0
}

for score in scores:
	counter[score] += 1
  
print(counter)
```

```python
# Counting 2
from collections import Counter

scores = ["A", "A", "B", "c", "D" "A", "B"]
easy_counter = Counter(scores)

print(easy_counter)
```

## 3. 딕셔너리 메소드

### `.keys()`

- 딕셔너리의 key 목록이 담긴 dict_keys 객체 반환

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

print(a.keys())
# dict_keys(['name', 'gender', 'address'])
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

for key in a.keys():
    print(key)
# name
# gender
# address
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

for key in a:
    print(key)
# name
# gender
# address
```

### `.values()`

- 딕셔너리의 value 목록이 담긴 dict_values 객체 반환

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

print(a.values())
# dict_values(['kyle', 'male', 'Seoul'])
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

for value in a.values():
    print(value)
# kyle
# male
# Seoul
```

### `.items()`

- 딕셔너리의 (key, value) 쌍 목록이 담긴 dict_items 객체 반환

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

print(a.items())
# dict_items([('name', 'kyle'), ('gender', 'male'), ('address', 'Seoul')])
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

for item in a.items():
    print(item)
# ('name', 'kyle')
# ('gender', 'male')
# ('address', 'Seoul')
```

```python
a = {
    'name': 'kyle'
    'gender': 'male'
    'address': 'Seoul'
}

for key, value in a.item():
    print(key, value)
# name kyle
# gender male
# address Seoul
```

## 연습문제

http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=4372&sca=pyd0

http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=4373&sca=pyd0

http://jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=4380&sca=pyd0
