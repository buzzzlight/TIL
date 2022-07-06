# Github

## 원격저장소 (Remote Repository)

- 네트워크를 활용한 저장소
- Github, Gitlab, Bitbucket
- Microsoft가 8-10조에 인수

### 원격저장소의 기본 흐름

- 로컬 저장소의 버전(커밋)을 원격저장소로 보낸다. ($ git push)
- 원격저장소의 버전(커밋)을 로컬 저장소로 가져온다. ($ git pull)
  - 협업할때 작업물 받아서 할때 사용

### 원격저장소 정보 확인

- git remote -v
- git push 원격저장소이름 브랜치이름
  - 원격 저장소로 로컬 저장소 변경 사항(커밋)을 올림(push)
  - 로컬 폴더의 파일/폴더가 아닌 저장소의 버전(커밋)이 올라감
- git pull 원격저장소이름 브랜치이름

Vim 에서 나오기 -> esc하고 :wq (리눅스와같음)



## Github에 올리는법

- Github에 repository 생성
- $ git remote add origin 깃헙주소
- $ git push 원격저장소이름 브랜치이름

외부에서 다른 컴퓨터로 작업했을때 : git push, pull 생활화하기



## Git 영향 안받게 하는법

1. touch .gitignore
2. gitignore에 들어가서 파일명 적고 저장하면 됨

- *.exe 라고 입력 시 exe파일은 모두 무시하게됨
- 이미 커밋한 파일은 삭제후 다시 입력해야 무시됨

[gitignore 파일 만드는 사이트](https://gitignore.io)



