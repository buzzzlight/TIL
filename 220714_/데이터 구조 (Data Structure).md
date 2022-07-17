## 데이터 구조 (Data Structure)

데이터타입.메서드()   ex:`input().split()`

### 메서드 (methods)

#### 시퀀스 (순서가 있는 데이터구조)

##### 문자열 (String)

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

##### 리스트 (List)

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
```



- `list.remove(x)`
  - 리스트에서 값이 x인 것 삭제
- `list.pop()`
- `list.clear()`

#### 탐색 및 정렬

- `.index(x)`
  - x의 인덱스 값을 반환함
- `.count(x)`
  - 원하는 값의 개수를 반환함

- `.sort()`
- `.reverse()`
  - 순서를 반대로 뒤집음 (정렬 X). None 반환



메서드는 return값,. 반환값이 0 이므로...

a = [1, 2, 3]

a.append(4)

print(a)

이렇게 써야함

a = [1, 2, 3]

a = a.append(4)

print(a)

이렇게 하면 None 나옴

#### 세트 (Set)

#### 딕셔너리 (Dictionary)

- `.get(key[,dafault])`
  - key를 통해 value를 가져옴
  - KeyError가 발생하지 않으며 default 값을 설정할 수 있음 (기본: None)

```python
my_dict = {'apple': '사과', 'banana': '바나나'}
my_dict['pineapple']
#KeyError

my_dict.get()
```

- `.pop(key[,default])`

- `.update([other])`
  - 값을 제공하는 key, value로 덮어씁니다.

```python
my_dict = {'apple': '사과', 'banana': '바나나'}
```

딕셔너리는 키로 접근, 리스트는 인덱스로 접근



공부자료

파이썬 자습서

파이썬 위키독스 (점프 투 파이썬) <- 온라인 책

파이썬 코딩도장 <- 온라인 책

MIT Python