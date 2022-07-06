# Github

## GitHub란?

![github](https://github.com/psun0610/TIL/raw/master/Git/GitHub.assets/github.png)

Git이 분산 버전 관리 시스템이라면 GitHub는 이러한 Git을 사용하는 프로젝트를 지원하는 웹호스팅 서비스(**원격 저장소**)다.

GitHub를 사용하여 버전관리와 협업을 더 효율적으로 할 수 있다.

## 원격저장소 (Remote Repository)

- 네트워크를 활용한 저장소
- Github, Gitlab, Bitbucket
- Microsoft가 8-10조에 인수

### 원격저장소의 기본 흐름

- 로컬 저장소의 버전(커밋)을 원격저장소로 보낸다. (`$ git push`)
- 원격저장소의 버전(커밋)을 로컬 저장소로 가져온다. (`$ git pull`)
  - 협업할때 작업물 받아서 할때 사용

## GitHub 명령어

- `$ git remote add 원격저장소이름(origin) 깃허브주소`
  - 원격저장소 추가
- `$ git remote -v`
  - 원격저장소 정보 확인

- `$ git push 원격저장소이름(origin) 브랜치이름(master)`

  - 원격저장소로 로컬 저장소 변경 사항(커밋)을 올림(push)

  - 로컬 폴더의 파일/폴더가 아닌 저장소의 버전(커밋)이 올라감

  - Push 할 때는 인증 정보 필수적

- `$ git pull 원격저장소이름 브랜치이름`
  - 원격저장소로부터 변경된 내역을 받아와서 이력을 Merge함
- `$ git clone 깃허브주소`
  - 원격저장소 복제 (로컬저장소에 없어서 원격저장소의 버전들을 가져오고 싶을 때)
- `$ git remote rm 원격저장소이름`
  - 원격저장소 삭제

## Github에 올리기

1. Github에 repository 생성
2. `$ git remote add 원격저장소이름(origin) 깃허브주소` (원격저장소 경로 설정)
3. `$ git push 원격저장소이름(origin) 브랜치이름(master)`
   - 원격저장소로 로컬 저장소 변경 사항(커밋)을 올림(push)
   - 로컬 폴더의 파일/폴더가 아닌 저장소의 버전(커밋)이 올라
   - Push 할 때는 인증 정보 필수적
4. `$ git pull 원격저장소이름 브랜치이름`
   - 원격저장소로부터 변경된 내역을 받아와서 이력을 Merge함

외부에서 다른 컴퓨터로 작업했을때 : git push, pull 생활화하기

[git add, commit, push 취소하기](https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html)

Vim 에서 나오기 -> esc하고 :wq (리눅스와같음)

## .gitignore: 버전 관리 필요없는 파일 관리하기

1. ` $ touch .gitignore`
   - .gitignore 파일 생성
2. `.gitignore`에 들어가서 버전 관리와 상관없는 파일명 or 디렉토리명 적고 저장하여 관리

- *.exe 라고 입력 시 exe파일은 모두 무시하게됨
- 이미 커밋한 파일은 삭제후 다시 입력해야 적용됨

[gitignore 파일 만드는 사이트](https://gitignore.io)



