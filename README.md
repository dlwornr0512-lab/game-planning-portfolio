# Game Planning Portfolio Showcase Site

HTML, 순수 CSS, 순수 바닐라 JavaScript만 사용한 게임 프로젝트 포트폴리오 사이트입니다.

이번 버전은 프로젝트 카드형이 아니라, **게임 1개가 화면 1페이지를 차지하는 쇼케이스형 구조**입니다.

## 사이트 구조

```txt
Home
↓
레오나르의 날개 전체 화면
↓
아르모니아 전체 화면
↓
The Last Dance 전체 화면
↓
작업 히스토리
↓
About / Planning Skills / Tools / Contact
```

각 게임 화면에는 다음 버튼이 있습니다.

```txt
[프로젝트 상세 보기]
[해당 게임 기획서 모아보기]
[플레이 영상 보기] 또는 [게임 시뮬레이터]
```

## 폴더 구조

```txt
game_portfolio_showcase_site/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ projects.js
│  └─ main.js
└─ assets/
   ├─ images/
   │  ├─ leonard-bg.png
   │  ├─ armonia-bg.png
   │  └─ the-last-dance-bg.png
   └─ pdfs/
      ├─ leonard/
      ├─ armonia/
      └─ the-last-dance/
```

## 수정해야 하는 파일

대부분의 내용은 아래 파일에서 수정합니다.

```txt
js/projects.js
```

수정 가능한 내용:

- 프로젝트 제목
- 프로젝트 설명
- 담당 역할
- 핵심 포인트
- PDF 경로
- YouTube 영상 ID
- 작업 히스토리
- About / Contact
- 사용 툴
- 기획 역량

## PDF 넣는 방법

예를 들어 `레오나르의 날개` 개발제안서를 연결하려면 아래 위치에 PDF를 넣습니다.

```txt
assets/pdfs/leonard/development_proposal.pdf
```

그리고 `js/projects.js` 안의 경로가 아래처럼 되어 있으면 연결됩니다.

```js
{ title: "개발제안서", file: "assets/pdfs/leonard/development_proposal.pdf" }
```


## The Last Dance 게임 시뮬레이터 연결 방법

The Last Dance 섹션의 세 번째 버튼은 이제 `영상 보기` 대신 `게임 시뮬레이터`로 표시됩니다.
기본 연결 위치는 아래 파일입니다.

```txt
simulators/the-last-dance/index.html
```

실제 게임 시뮬레이터 HTML 파일이 있다면 위 파일을 교체하면 됩니다.
파일명이 다르거나 다른 폴더에 넣고 싶다면 `js/projects.js`에서 아래 값을 수정하세요.

```js
simulator: {
  title: "The Last Dance 게임 시뮬레이터",
  url: "simulators/the-last-dance/index.html"
}
```

## YouTube 영상 넣는 방법

YouTube 주소가 다음과 같다면:

```txt
https://www.youtube.com/watch?v=abc123
```

`js/projects.js`에서 해당 프로젝트의 값을 아래처럼 바꿉니다.

```js
youtubeId: "abc123"
```

## 연락처 링크 수정

`js/projects.js` 상단의 `PROFILE`에서 수정합니다.

```js
const PROFILE = {
  github: "추후 입력",
  notion: "추후 입력",
  youtube: "추후 입력"
};
```

## 작업 히스토리 수정 방법

이번 버전의 작업 히스토리는 프로젝트별 탭 구조입니다.
아래 파일의 `TIMELINE`에서 프로젝트별 `entries`를 수정하면 됩니다.

```txt
js/projects.js
```

각 작업 항목은 아래 구조를 가집니다.

```js
{
  date: "2026.06",
  title: "작업 제목",
  desc: "작업을 한 이유와 요약 설명",
  works: ["작업 내용 1", "작업 내용 2"],
  outputs: ["결과물 1", "결과물 2"]
}
```

화면에서는 다음 순서로 표시됩니다.

```txt
[레오나르의 날개] [아르모니아] [The Last Dance]
↓
기간 / 작업 제목 / 작업 설명 / 작업 내용 / 결과물
```
