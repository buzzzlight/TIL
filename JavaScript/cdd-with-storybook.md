npm i -D => devDependencies

npm i => dependencies



**dependencies에는 애플리케이션 동작과 직접적으로 연관된 라이브러리를 설치하고 devDependencies에는 개발할 때 필요한 라이브러리를 설치**한다.



리드미 레퍼런스 -> awesome readme 검색



1. 라이브러리로 사용될 저장소 만들기

```
mkdir cdd-storybook-wanted
```

우리가 사용할 앱을 위한 라이브러리

예) react, antd, mui, react-hooks-form tanStack Query

2. npm 환경 초기화

```
npm init -y
pnpm init
```

- Package.json 생성됨

3. 스토리북 설치 (vite, react)

4. styled 설치
5. 불필요한 스토리북 파일 제거 ( 오로지 버튼만 남김 )

6. 스토리북 디렉터리 경로 수정 후 config 반영
7. 번들러 설치 (rollup)
8. 진입점
9. esbuild 설치
10. peerDeps 설치 및 설정
11. ESM, CJS output 설정 변경
12. npm Login & npm 패키지명 중복 확인
13. npm publish
14. 사용할 라이브러리에서 배포한 npm 패키지 설치
15. GitHub Pages <= Storybook 배포



앞으로 할것

1. TypeScript 전환

   배포하기 전에 빌드 과정이 바뀌게 된다.

2. Github Actions / Workflow 작성

   - 자동 배포 트리거 시점 만들기
   - commit 메세지 보고 SEMver => NPM Update
   - commit 메세지 보고 SEMVer => Release 문서 생성
   - Storybook Page 배포

   main 배포 시 자동으로 NPM, Release, Storybook Page 배포

3. 최적화

   CJS, ESM 어떤 빌드 방법을 가질지

4. 아래 Workflow 만들기

   깃 커밋 => 배포시점 트리거 => NPM Update => Release 문서 생성 => Storybook Page 배포

5. Figma 수정 => JSON 생성 => 디자인토큰 생성 => GitHub Action Trigger => 저장소에서 사용 가능

6. Storybook 커스텀하기

   https://storybook.js.org/showcase 참고

스토리북 페이지 배포를 하는 목적 => 디자이너 보여주려고? 디자인토큰 보요주려고

