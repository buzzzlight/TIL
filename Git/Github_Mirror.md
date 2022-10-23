## Github Repository Mirror

### 1. Github Repository 생성

새로운 저장소를 생성합니다.

### 2. 미러링할 Repository clone

미러링할 저장소를 clone 합니다.

```bash
git clone --mirror [미러링할 저장소 주소]
cd [미러링할 저장소 이름]
```

### 3. 복사한 저장소의 원격 저장소 설정

새롭게 생성한 저장소를 clone한 프로젝트의 원격 저장소로 설정합니다.

```bash
git remote set-url --push origin [새롭게 생성한 저장소 주소]
```

### 4. push

프로젝트를 Push 합니다.

```bash
git push --mirror
```

### 에러날 경우

```bash
git clone --bare [미러링할 저장소 주소]
cd [미러링할 저장소 이름]
git push --mirror [새롭게 생성한 저장소 주소]
```

