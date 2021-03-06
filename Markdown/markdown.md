# 마크다운

## 마크다운의 개요와 특징

- 텍스트 기반의 마크업 언어
- 단순 텍스트 문법으로 작성하면 다양한 환경에서 변환하여 보여짐

## 마크다운 문법

### 제목/소제목 (Heading)

- #의 개수에 따라 h1 ~ h6까지 표현 가능
- **글자 크기 조절을 위해 사용하면 안됨**

# h1

## h2

### h3

#### h4

##### h5

###### h6

### 목록 (list)

#### 순서가 없는 리스트 : - (hypen), * (asterisk)

목록 활용시 단계를 tab과 shift + tab 으로 조절

- 바나나
- 딸기
  - 산딸기

#### 순서가 있는 리스트 : 1.

1. 샤워
2. 산책
3. 홈페이지 접속
   1. 로그인
   2. 대시보드 확인
4. 유튜브 접속
   1. 수업듣기

### 코드 블록 (Fenced Code block)

- `(backtick) 기호 3개를 활용하여 작성 ```

- 특정 언어를 명시하면 Syntax Highlighting 적용 가능

```python
print('hello')
# 주석
```

```html
print('hello')
<h1>
    제목
</h1>
<!-- 주석 -->
```

- Inline 코드 블록은 backtick 기호 1개를 인라인에 활용하여 작성 (``)

  `nano`

### Link

- `[문자열](url)`을 통해 링크 작성
- `[문자열](파일경로)` 폴더나 파일도 링크 가능

### Images

- `![문자열](url)`
- 그냥 끌어다 놔도 첨부 가능
- 해당 폴더에 있는 이미지까지 전달해야 이미지가 안깨짐
  - url은 절대경로와 상대경로로 나뉘어짐
    - 절대경로 : 깃허브 등에 올렸을 때 안 뜸
    - 상대경로 : 폴더를 같이 공유한다면 다른곳에 공유해도 사진이 뜸


### Blockquotes (인용문)

- `>`를 통해 인용문 작성
- 정의 내릴 때 쓰면 좋음

> Hello World
>
> > Hello World
> >
> > > Hello Word

이렇게 겹쳐서 사용 가능

### Table (표)

- 본문 > 표 > 표 삽입 (`ctrl + t`)

### Text 강조

- **굵게(bold)** : `**` 또는 ctrl + b
- *기울임(Italic)* : `* ` 또는 ctrl + i
- ***굵게 기울임*** : `***`
- ~~취소선~~ : `~~`
- <u>밑줄</u> : `<u>` `</u>`

### 수평선

- 3개 이상의 asterisks `***`, dashes `---` , or underscores `___`

***

### 마크다운 소스코드 모드

`Ctrl + /`

### 마크다운 포맷 무시하기

`\`(backslash)를 원하는 글자 앞에 붙인다

### 토글(접기/펼치기)

- 📥 **입력값**

  ```
  <details>
  	<summary>토글사용</summary>
  	<div markdown="1">
  	
  	본문 내용을 여기에 적습니다
  	
  	</div>
  </details>
  ```

  📤 **출력값**

  <details><summary>토글사용</summary>
    <div markdown="1">
      <br>본문 내용을 여기에 적습니다
      <br>
    </div>
  </details>

### 문서 안에서 목차 이동

```
[목차](#목차)

* 특수문자 제거
* 스페이스를 '-'로 변경
4. 대문자 > 소문자로 바꾸기
ex) 내가 가장 좋아하는것은! Code > #내가-가장-좋아하는것은-code
```

### Check Box

`-` , `*` , `+` 을 작성 후 `[]`

`[+스페이스바+]`는 빈 체크박스, `[x]`는 표시가 된 체크박스

- [ ] TIL
- [x] TIL

### 폰트 색상

> ***Github*에서 색깔 사용하는 방법**

````diff
```diff 사용
- text in red
+ text in green
! oran
# gray
@@text in purple(and bold)@@
```
````

#### **HTML 이용** 

[HTML color names]:(https://www.w3schools.com/colors/colors_names.asp)	"색상 이름 검색 가능"

- **폰트 색상 바꾸는법** : `<span style="color:color name"></span>`
- **형광펜 효과** : `<span style="background-color:color name"></span>`
- **색상 + 형광펜 효과** : `<span sytle="color:color name; background-color:color name"></span>`

## 마크다운 관련 자료

- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Markdown Guide Markdown](https://www.markdownguide.org/)



