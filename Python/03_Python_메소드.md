# 데이터 구조 (Data Structure)

## 메서드 (methods)

데이터타입.메서드()   ex:`input().split()`

## 시퀀스 (순서가 있는 데이터구조)

### 문자열 (String)

**문자열 탐색**

- `.find(x)` : x의 첫번째 위치를 반환. 없으면 -1을 반환함

```python
print('apple'.find('p'))
# 1
print('apple'.find('k'))
# -1
```

- `.index(x)` : x의 첫번째 위치를 반환. 없으면 오류남

```python
print('apple'.index('p'))
# 1
'apple'.index('k')
#ValueError Traceback (most recent call last)
#--------> 1 apple'.index ('k')
#ValueError : substring not found
```

**문자열 검증 (True/False)**

- `.isalpha()`
- `.isupper()`
- `.islower()`
- `.istitle()`

- `.isdecimal()`

```python
print('abc'.isalpha())
# True
print('Ab'.isupper())
# False
print('ab'.islower())
# True
print('Title Title!'.istitle())
# True
```

**문자열 변경**

- `.replace(old, new[, count])`
  - 바꿀 대상 글자를 새로운 글자로 바꿔서 전환
  - count를 지정하면 해당 개수만큼만 시행

```python
'coone' .replace('o', 'a')
# caane
'wooooowoo' .replace('o', '!', 2)
# w!!ooowoo
```

- `.strip([chars])`
  - 특정한 문자들을 지정하면,
  - 양쪽을 제거하거나(strip), 왼쪽을 제거하거나(lstrip), 오른쪽을 제거(rstrip)
  - 문자열을 지정하지 않으면 공백(sapce, \n)을 제거함

```python
print('    와우!\n'.strip())
# '와우!'
print('    와우!\n'.lstrip())
# '와우!\n'
print('    와우!\n'.rstrip())
# '    와우!'
print('안녕하세요????'.rstrip('?'))
# '안녕하세요'
```

- `.split(sep=None, maxsplit=-1)`
  - 문자열을 특정한 단위로 나눠 리스트로 반환
    - sep이 None이거나 지정되지 않으면 연속된 공백문자를 단일한 공백문자로 간주하고, 선행/후행 공백은 빈 문자열에 포함시키지 않음
    - maxsplit이 -1인 경우에는 제한이 없음

```python
print('a b c'.split())
# ['a', 'b', 'c']
```

- `'separator'.join([iterable])`
  - 반복가능한(iterable) 컨테이너 요소들을 separator(구분자)로 합쳐 문자열 반환
    - iterable에 문자열이 아닌 값이 있으면 TypeError 발생

```python
names = ','.join(['홍길동', '김철수'])
print(names)
# 홍길동,김철수

numbers = ' '.join(map(str, [10, 20, 100])
print(numbers)
# 10 20 100
```

- `.capitalize()`
- `.title()`
- `.upper()`
- `.lower()`
- `swapcase()`

문자열은 immutable하기 때문에 스스로 바뀌는 경우가 없다.

```python
msg = 'hI! Everyone.'
print(msg)
print(msg.capitalize())
print(msg.title())
print(msg.upper())
print(msg.lower())
print(msg.swapcase())

# hI! Everyone.
# Hi! everyone.
# Hi! Everyone.
# HI! EVERYONE.
# hi! everyone.
# Hi! eVERYONE.
```

#### 리스트 (List)

- 변경 가능한 값들의 나열된 자료형
- 순서를 가지며, 서로 다른 타입의 요소를 가질 수 있음
- 변경 가능하며(mutable), 반복 가능함(iterable)
- 항상 대괄호 형태로 정의하며, 요소는 콤마로 구분
- `list.append(x)`
  - 리스트에 x 값을 추가함

```python
cafe = ['starbucks', 'tomntomes']
cafe.append('hollys')
print(cafe)
# ['starbucks', 'tomntomes','hollys']
```

- `list.pop()`
- `list.sort()`
- `list.count()`

- `list.extend(iterable)`
  - 리스트에 여러개 원소 추가 (iterable)

```python
cafe = ['starbucks', 'tomntomes']
cafe.extend(['hollys', 'twosome'])
print(cafe)
# ['starbucks', 'tomntomes', 'hollys', 'twosome']
```

- `list.insert(i, x)`
  - 정해진 위치 i에 x 추가

```python
cafe = ['starbucks', 'tomntomes']
cafe.insert([0, 'twosome'])
print(cafe)
# ['twosome', 'starbucks', 'tomntomes']

# 인덱스가 리스트 길이보다 큰 경우 맨 뒤
cafe.insert([1000, 'end'])
print(cafe)
# ['twosome', 'starbucks', 'tomntomes', 'end']
```

- `list.remove(x)`
  - 리스트에서 값이 x인 것 삭제

```python
cafe = ['starbucks', 'tomntomes']
cafe.remove('starbucks')
print(cafe)
# cafe = ['tomntomes']
```

- `list.pop(i)`
  - 정해진 위치 i에 있는 값을 삭제하고 그 항목을 반환함
  - i가 지정되지 않으면 마지막 항목을 삭제하고 반환함


```python
numbers = [' hi', 1 , 2 , 3]
# ['hi', 1, 2, 3]
pop_number = numbers.pop()
print(pop_number)
# 3
print(numbers)
# ['hi', 1, 2]
```

```python
numbers = [' hi', 1 , 2 , 3]
# ['hi', 1, 2, 3]
pop_number = numbers.pop(0)
print(pop_number)
# 'hi'
print(numbers)
# [1, 2, 3]
```

- `list.clear()`
  - 모든 항목을 삭제함


```python
numbers = [1, 2, 3, 4]
print(numbers.clear())
# []
```

### 탐색 및 정렬

- `.index(x)`
  - x의 인덱스 값을 반환함

```python
numbers = [1, 2, 3, 4]
print(numbers.index(3))
# 2
```

- `.count(x)`
  - 원하는 값의 개수를 반환함

```python
numbers = [1, 2, 3, 1, 1]
print(numbers.count(1))
# 3
print(nubers.count(4))
# 0
```

- `.sort()`
  - 원본 리스트를 정렬함. None 반환
  - sorted 함수와 비교

```python
numbers = [3, 2, 5, 1]
result = numbers.sort()
print(numbers, result)
# [1, 2, 3, 5] None

numbers = [3, 2, 5, 1]
result = sorted(numbers)
print(numbers)
# [3, 2, 5, 1] --> 변화 없음
print(result)
# [1, 2, 3, 5]
```

- `.reverse()`
  - 순서를 반대로 뒤집음 (정렬 X). None 반환

```python
numbers = [3, 2, 5, 1]
result = numbers.reverse()
print(numbers, result)
# [1, 5, 2, 3] None
```

- 메서드는 return값이 0 이므로...

```python
a = [1, 2, 3]
a.append(4)
print(a)
# [1, 2, 3, 4]

a = [1, 2, 3]
a = a.append(4)
print(a)
# None
```

## 컬렉션 (순서가 없는 데이터 구조)

### 세트 (Set)

- 유일한 값들의 모음 (collection)
- 순서가 없고 중복값이 없음
- 변경, 반복 가능
- `s.copy` : 세트의 얕은 복사본을 반환
- `s.add(x)` : 항목 x가 세트 s에 없다면 추가
- `s.pop()` : 세트 s에서 랜덤하게 항목을 반환하고, 해당 항목을 제거
- `s.remove(s)` : 항목 x를 세트 s에서 삭제
- `s.discard(x)`: 항목 x가 세트 s에 있는 경우, 항목 x를 세트 s에서 삭제
- `s.update(t)`: 세트 t에 있는 모든 항목 중 세트 s에 없는 항목을 추가
- `s.clear()`: 모든 항목을 제거
- `s.isdisjoint(t)`: 세트 s가 세트 t의 서로 같은 항목을 하나라도 갖고 있지 않은 경우 True 반환
- `s.issubser(t)`: 세트 s가 세트 t의 하위 세트인 경우 True 반환
- `s.issuperset(t)`: 세트 s가 세트 t의 상위 세트인 경우 True 반환

### 딕셔너리 (Dictionary)

- 딕셔너리는 Key로 접근, 리스트는 Index로 접근
- `d.clear()` : 모든 항목을 제거
- `d.keys()`: 딕셔너리 d의 모든 키를 담은 뷰를 반환
- `d.values()`: 딕셔너리 d의 모든 값을 담은 뷰를 반환
- `d.items()`: 딕셔너리 d의 모든 키-값의 쌍을 담은 뷰를 반환
- `d.get(k)`: 키 k의 값을 반환하는데, 키 k가 딕셔너리에 없을 경우 None 반환

- `d.get(k,v)`: 키 k의 값을 반환하는데, 키 k가 딕셔너리에 없을 경우 v반환

```python
my_dict = {'apple': '사과', 'banana': '바나나'}
my_dict['pineapple']
#KeyError
print(my_dict.get('pineapple'))
# None
print(my_dict.get('apple'))
# 사과
print(my_dict.get('pineapple', 0))
# 0
```

- `d.pop(k)`: 키 k 의 값을 반환하고 키 k 인 항목을 딕셔너리 d 에서 삭제하는데 키 k 가 딕셔너리 d 에 없을 경우 KeyError 를 발생
- `d.pop(k,v)`: 키 k 의 값을 반환하고 키 k 인 항목을 딕셔너리 d 에서 삭제하는데 키 k 가 딕셔너리 d 에 없을 경우 v 를 반환

```python
my_dict = {'apple': '사과', 'banana': '바나나'}
data = my_dic.pop('apple')
print(data, my_dict)
# 사과 {'banana': '바나나'}
```

- `d.update([other])`
  - key, value 업데이트

```python
my_dict = {'apple': '딸기', 'banana': '바나나'}
my_dict.update(apple='사과')
print(my_dict)
# {'apple': '사과', 'banana': '바나나'}
```

## 공부 자료

파이썬 자습서

파이썬 위키독스 (점프 투 파이썬) <- 온라인 책

파이썬 코딩도장 <- 온라인 책

MIT Python