# 문자열 (String)

문자열은 immutable. 변경 불가능한 시퀀스형 자료형

## 1. 문자열 슬라이싱

```python
str = abcdefghi

s[1] -> 'b'
s[2:5] -> 'cde'
s[2:5:2] -> 'ce'
s[5:2:-1] -> 'fed'
s[:3] -> 'abc'
s[5:] -> 'fghi'
s[::] -> 'abcdefghi'
s[::-1] -> 'ihgfedcba'
```

## 2. 문자열 메소드

- `.split(기준 문자)`
  - 문자열을 일정 기준으로 나누어 리스트로 반환
  - 괄호 안에 아무것도 넣지 않으면 자동으로 공백을 기준으로 설정


```python
word = "I play the piano"
print(word.split())
# ['I', 'play', 'the', 'piano']

word = "apple,banana,orange,grape"
print(word.split(","))
# ['apple', 'banana', 'orange', 'grape']
```

- `.strip(제거할 문자)`
  - 문자열의 양쪽 끝에 있는 특정 문자를 모두 제거한 새로운 문자열 반환
  - 괄호 안에 아무것도 넣지 않으면 자동으로 공백을 제거 문자로 설정
  - 제거할 문자를 여러개 넣으면 해당하는 모든 문자들을 제거

```python
word = "Hello World"
print(word.strip())
# Hello World

word = "aHello Worlda"
print(word.strip(a))
# Hello World

word = "Hello World"
print(word.strip(Hd))
# ello Worl

word = "Hello Worldddddd"
print(word.strip(d))
# Hello Worl
```

- `.find(찾는 문자)`
  - 특정 문자가 처음으로 나타나는 위치(인덱스) 반환
  - 찾는 문자가 없다면 -1 반환


```python
word = "apple"

print(word.find('p'))
# 1
print(word.find('k'))
# -1
```

- `.index(찾는 문자)`
  - 특정 문자가 처음으로 나타나는 위치(인덱스) 반환
  - 찾는 문자가 없다면 오류 발생

```python
word = "apple"

print(word.index('p'))
# 1
print(word.index('k'))
#ValueError Traceback (most recent call last)
#--------> 1 apple'.index ('k')
#ValueError : substring not found
```

- `.count(개수를 셀 문자)`
  - 문자열에서 특정 문자가 몇개인지 반환
  - 문자 뿐만 아니라 문자열의 개수도 확인 가능

```python
word = "banana"
print(word.count("a"))
# 3

word = "banana"
print(word.count("na"))
# 2

word = "banana"
print(word.count("ana"))
# 1
```

- `.replace(기존 문자, 새로운 문자)`
  - 문자열에서 기존 문자를 새로운 문자로 수정한 새로운 문자열 반환
  - 특정 문자를 빈 문자열("")로 수정하여 마치 해당 문자를 삭제한 것 같은 효과

```python
word = "buzzlightyear"
print(word.replace("buzz", "woody"))
# woodylightyear

word = "buzzlightyear"
print(word.replace("b", "B"))
# Buzzlightyear

word = "buzzlightyear"
print(word.replace("buzz", ""))
# lightyear
```

- `삽입할 문자.join(iterable)`
  - *iterable*의 각각 원소 사이에 특정 문자를 삽입한 새로운 문자열 반환
  - 공백 출력, 콤마 출력 등 원하는 출력 형태를 위해 사용

```python
word = "buzzlightyear"
print(" ".join(word))
# b u z z l i g h t y e a r

word = "buzzlightyear"
print(".".join(word))
# b.u.z.z.l.i.g.h.t.y.e.a.r

word = ["buzz", "naver.com"]
print("@".join(word))
# buzz@naver.com

word = ["b", "u", "z", "z"]
print("".join(words))
# buzz
```

## 3. 아스키(ASCII) 코드

> American Standard Code for Information Interchange
>
> 미국 정보교환 표준부호

![9950783F5A322ACB02](04_string.assets/9950783F5A322ACB02.png)

### ord(문자)

- 문자 ===> 아스키코드

```python
print(ord("A"))
# 65

print(ord('a'))
# 97
```

### chr(아스키코드)

- 아스키코드 ===> 문자

```python
print(chr(65))
# A

print(chr(97))
# a
```

