# OOP (객체지향 프로그래밍)

*object oriented programming*

> 프로그램을 여러개의 독립된 개체들과 그 객체들 간의 상호작용으로 파악하는 프로그래밍 방법

- 컴퓨터 프로그래밍의 패러다임 중 하나

- 컴퓨터의 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러개의 독립된 단위, 즉 '객체'들의 모임으로 파악하고자 하는것

- 타입 (class) , 값 (instance)

## 1. 객체

> 객체(object)는 특정 타입(class)의 인스턴스(instance)이다

- 123, 900, 5는 모두 int의 인스턴스

- 'hello', 'bye'는 모두 string의 인스턴스

- [232, 89], [1]는 모두 list의 인스턴스

### 객체의 특징

- 타입 (type) : 어떤 연산자(operator)와 조작(method)이 가능한가?
- 속성 (attribute) : 어떤 상태(데이터)를 가지는가?
- 조작법 (method) : 어떤 행위(함수)를 할 수 있는가?

### 객체지향 VS 절차지향

- 객체지향 프로그래밍 : 프로그램을 여러개의 독립된 개체들과 그 객체들 간의 상호작용으로 파악하는 프로그래밍 방법, 데이터와 기능(메서드) 분리, 추상화된 구조(인터페이스) ex) Python, Java

- 절차지향 프로그래밍 : 위에서부터 아래로 순차적인 처리가 중요시 되며 프로그램 전체가 유기적으로 연결되도록 하는 프로그래밍 기법. 절차를 중심으로 데이터와 함수의 변화를 프로그래밍한다. ex) C언어

### 객체지향의 장점

- 객체 지향 프로그래밍은 프로그램을 유연하고 변경이 용이하게 만들기 때문에 대규모 소프트웨어 개발에 많이 사용됨
- 프로그래밍을 더 배우기 쉽게 하고 소프트웨어 개발과 보수를 간편하게 하며, 보다 직관적인 코드 분석을 가능하게 함

## 2. OOP 기초

> 객체의 틀(Class)을 가지고, 객체(Instance)를 생성한다.

```python
class MyClass:
    pass
# 인스턴스 생성
my_instance = MyClass()
# 메소드 호출
my_iinstance.my_method()
# 속성
my_instance.my_attribute
```

### 클래스와 인스턴스

- 클래스(Class) : 객체들의 분류
- 인스턴스(Instance) : 하나하나의 실체/예
- *Person (Class) ===> 배우 박은빈, 배우 강태오, 가수 수지 (Instance)*

```python
class Person:
    pass

print(type(Person))
# type
p1 = Person()
print(type(p1))
# __main__.Person
isinstance(person1, Person)
# True
```

### 속성

- 특정 데이터 타입/클래스의 객체들이 가지게 될 상태/데이터를 의미

```python
class Person:
    
    def __init__(self, name):
        self.name = name
        
person1 = Person('지민')
person1.name
# 지민
```

### 메소드

- 특정 데이터 타입/클래스의 객체에 공통적으로 적용 가능한 행위 (함수)

```python
class Person:
    
    def talk(self):
        print('안녕')
        
    def eat(self, food):
        print(f'{food}를 냠')
        
person1 = Person()
person1.talk()
# 안녕
person1.eat('피자')
# 피자를 냠
person1.eat('치킨')
# 치킨을 냠
```

### 객체 비교하기

- `==`
  - 동등한 (equal)
  - 변수가 참조하는 객체가 동등한 (내용이 같은) 경우, True
  - 두 객체가 같아보이지만 실제로 동일한 대상을 가리키고 있다고 확인해준 것은 아님
- `is`
  - 동일한 (identical)
  - 두 변수가 동일한 객체를 가리키는 경우,True

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b, a is b)
# True False
```

```python
a = [1, 2, 3]
b = a

print(a == b, a is b)
# True True
```

## 3. 인스턴스

### 인스턴스 변수

- 인스턴스가 개인적으로 가지고 있는 속성(attribute)
- 각 인스턴스들의 고유한 변수
- 생성자 메소드에서 `self.<name>`으로 정의
- 인스턴스가 생성된 이후 `<instance>.<name>`으로 접근 및 할당

```python
class Person:
    
    def __init__(self, name):
        self.name = name # 인스턴스 변수 정의

john = Person('john')
print(john.name)         # 인스턴스 변수 접근 및 할당
# john

john.name = 'John Kim'   # 인스턴스 변수 접근 및 할당
print(john.name)
# John Kim
```

### 인스턴스 메소드

- 인스턴스 변수를 사용하거나, 인스턴스 변수에 값을 설정하는 메소드
- 클래스 내부에 정의되는 메소드의 기본
- 호출 시, 첫번째 인자로 인스턴스 자기자신(self)이 전달됨
  - `self`:  인스턴스 자기자신
  - 파이썬에서 인스턴스 메소드는 호출 시 첫번째 인자로 인스턴스 자신이 전달되게 설계
    - 매개변수 이름으로 `self`를 첫번째 인자로 정함
    - 다른 단어로 써도 작동하지만 암묵적인 규칙

```python
class MyClass:
    def instance_method(self, arg1, ...)
    
my_instance = MyClass()
my_instance.instance_method(...)
```

### 생성자(constructor) 메소드

- 인스턴스 객체가 생성될 때 자동으로 호출되는 매소드
- 인스턴스 변수들의 초기값을 설정
  - 인스턴스 생성
  - `__init__`메소드 자동 호출

```python
class Person:
    def __init__(self):
        print('인스턴스가 생성되었습니다.')
        
person1 = Person()
# 인스턴스가 생성되었습니다.
```

```python
class Person:
    def __init__(self, name):
        print(f'인스턴스가 생성되었습니다. {name}')
        
person1 = Person('지민')
# 인스턴스가 생성되었습니다. 지민
```

### 소멸자(destructor) 메소드

- 인스턴스 객체가 소멸(파괴)되기 직전에 호출되는 메소드

```python
class Person:
    def __del__(self):
        print('인스턴스가 사라졌습니다.')
        
person1 = Person()
del person1
# 인스턴스가 사라졌습니다.
```