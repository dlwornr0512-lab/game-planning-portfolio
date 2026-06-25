/**
 * js/projects.js
 * 이 파일만 수정하면 프로젝트 소개, 기획서 PDF, 유튜브 영상, 링크를 쉽게 업데이트할 수 있습니다.
 */

const PROFILE = {
  name: "이재국",
  role: "Game Planner Portfolio",
  email: "dlwornr0512@gmail.com",
  github: "추후 입력",
  notion: "추후 입력",
  youtube: "추후 입력",
  intro:
    "게임의 세계관, 전투 구조, 레벨 구성, 시스템 문서화를 중심으로 작업하는 게임 기획자 지망생입니다. 프로젝트마다 기획 의도, 플레이 흐름, 콘텐츠 구조, 레벨 경험, 서비스 지표까지 문서화하며, 아이디어를 실제 프로토타입과 기획서로 정리하는 것을 목표로 합니다."
};

const PROJECTS = [
  {
    id: "leonard",
    navTitle: "Leonard",
    title: "레오나르의 날개",
    englishTitle: "Leonard's Wings",
    category: "Team Project",
    genre: "Open World Action RPG",
    theme: "스팀펑크 공중 세계 · 인간형 기계로봇 · 기억과 성장",
    image: "assets/images/leonard-bg.png",
    align: "left",
    color: "bronze",
    summary:
      "스팀펑크 스타일의 공중 세계를 배경으로, 인간처럼 생긴 기계로봇 주인공이 탐험과 전투를 통해 세계의 비밀에 접근하는 오픈월드 액션 RPG 프로젝트입니다.",
    storyIntro:
      "스팀펑크 공중 세계에서 인간형 기계로봇 주인공이 기억과 성장을 따라 아르카디아의 진실에 접근하는 이야기입니다.",
    role:
      "팀 프로젝트에서 게임 기획, 레벨 디자인, 서비스 기획, 프로젝트 문서 정리를 담당했습니다.",
    points: [
      "공중 세계 아르카디아를 중심으로 한 오픈월드 구조",
      "인간형 기계로봇 주인공의 탐험, 전투, 성장 흐름",
      "언리얼 엔진 기반 프로토타입 플레이 경험 정리",
      "레벨 디자인, 플레이 테스트, 서비스 지표 문서화"
    ],
    documents: [
      { title: "개발제안서", file: "assets/pdfs/leonard/WOL_development proposal.pdf" },
      { title: "게임스토리 & 게임 시나리오", file: "assets/pdfs/leonard/story_scenario.pdf" },
      { title: "캐릭터 컨셉 기획서", file: "assets/pdfs/leonard/character_concept.pdf" },
      { title: "배경 컨셉 기획서", file: "assets/pdfs/leonard/world_concept.pdf" },
      { title: "게임 메카닉스 기획서", file: "assets/pdfs/leonard/game_mechanics.pdf" },
      { title: "게임 콘텐츠 시스템 기획서", file: "assets/pdfs/leonard/content_system.pdf" },
      { title: "레벨 디자인 기획서", file: "assets/pdfs/leonard/level_design.pdf" },
      { title: "게임 UI 디자인 기획서", file: "assets/pdfs/leonard/ui_design.pdf" },
      { title: "게임 서비스 기획서", file: "assets/pdfs/leonard/service_plan.pdf" }
    ],
    video: {
      title: "레오나르의 날개 프로토타입 플레이 영상",
      youtubeId: "REPLACE_WITH_YOUTUBE_ID"
    }
  },
  {
    id: "armonia",
    navTitle: "Armonia",
    title: "아르모니아",
    englishTitle: "Armonia",
    category: "Personal Project",
    genre: "Pastel Fantasy MMORPG",
    theme: "다종족 · 마법 직업 클래스 · 의뢰 기반 전투모험",
    image: "assets/images/armonia-bg.png",
    align: "left",
    color: "pastel",
    summary:
      "인간, 요정족, 거인족, 정령족, 용족, 마족 등 다양한 종족과 수호자, 격투가, 조각가, 소환사, 치유술사 같은 직업 클래스를 중심으로 의뢰 기반 전투모험을 경험하는 파스텔 톤 판타지 MMORPG 프로젝트입니다.",
    storyIntro:
      "다양한 종족과 마법 직업이 공존하는 파스텔 판타지 세계에서 길드 의뢰를 수행하며 성장하는 모험 이야기입니다.",
    role:
      "개인 프로젝트로 세계관, 직업 클래스, 길드 의뢰, 전투/생활 모험 구조를 기획했습니다.",
    points: [
      "파스텔 톤 판타지 세계와 다양한 종족의 조화",
      "수호자, 격투가, 조각가, 소환사, 치유술사 중심 클래스 구조",
      "길드 의뢰를 통해 전투 모험과 생활 콘텐츠가 연결되는 흐름",
      "MMORPG형 지역, NPC, 의뢰, 성장 구조 문서화"
    ],
    documents: [
      { title: "개발제안서", file: "assets/pdfs/armonia/development_proposal.pdf" },
      { title: "게임스토리 & 게임 시나리오", file: "assets/pdfs/armonia/story_scenario.pdf" },
      { title: "캐릭터 컨셉 기획서", file: "assets/pdfs/armonia/character_concept.pdf" },
      { title: "배경 컨셉 기획서", file: "assets/pdfs/armonia/world_concept.pdf" },
      { title: "게임 메카닉스 기획서", file: "assets/pdfs/armonia/game_mechanics.pdf" },
      { title: "게임 콘텐츠 시스템 기획서", file: "assets/pdfs/armonia/content_system.pdf" },
      { title: "레벨 디자인 기획서", file: "assets/pdfs/armonia/level_design.pdf" },
      { title: "게임 UI 디자인 기획서", file: "assets/pdfs/armonia/ui_design.pdf" },
      { title: "게임 서비스 기획서", file: "assets/pdfs/armonia/service_plan.pdf" }
    ],
    video: {
      title: "아르모니아 프로토타입 플레이 영상",
      youtubeId: "REPLACE_WITH_YOUTUBE_ID"
    }
  },
  {
    id: "the-last-dance",
    navTitle: "Last Dance",
    title: "The Last Dance",
    englishTitle: "The Last Dance",
    category: "Personal Project",
    genre: "Action Roguelike",
    theme: "중세와 동양 무사 · 6가지 무기 · 7개의 죄악",
    image: "assets/images/the-last-dance-bg.png",
    align: "left",
    color: "crimson",
    summary:
      "중세와 동양 무사 테마가 결합된 세계를 배경으로, 주인공이 한손검, 단검, 레이피어, 창, 태도, 대검의 6가지 무기를 활용해 7개의 죄악을 상징하는 적들을 물리치는 액션 로그라이크 프로젝트입니다.",
    storyIntro:
      "죽음과 부활을 반복하는 무사가 6가지 무기를 다루며 7개의 죄악을 상징하는 적들에게 맞서는 이야기입니다.",
    role:
      "개인 프로젝트로 무기별 전투 정체성, 로그라이크 반복 구조, 보스 테마와 성장 시스템을 기획했습니다.",
    points: [
      "한손검, 단검, 레이피어, 창, 태도, 대검의 6무기 전투 스타일",
      "7개의 죄악을 상징하는 보스와 지역 테마",
      "죽음과 부활을 반복하며 빌드와 숙련도를 쌓는 로그라이크 구조",
      "전투 메카닉스, 캐릭터 성장, 데이터 테이블 기반 문서화"
    ],
    documents: [
      { title: "개발제안서", file: "assets/pdfs/the-last-dance/development_proposal.pdf" },
      { title: "게임스토리 & 게임 시나리오", file: "assets/pdfs/the-last-dance/story_scenario.pdf" },
      { title: "캐릭터 컨셉 기획서", file: "assets/pdfs/the-last-dance/character_concept.pdf" },
      { title: "배경 컨셉 기획서", file: "assets/pdfs/the-last-dance/world_concept.pdf" },
      { title: "게임 메카닉스 기획서", file: "assets/pdfs/the-last-dance/game_mechanics.pdf" },
      { title: "게임 콘텐츠 시스템 기획서", file: "assets/pdfs/the-last-dance/content_system.pdf" },
      { title: "레벨 디자인 기획서", file: "assets/pdfs/the-last-dance/level_design.pdf" },
      { title: "게임 UI 디자인 기획서", file: "assets/pdfs/the-last-dance/ui_design.pdf" },
      { title: "게임 서비스 기획서", file: "assets/pdfs/the-last-dance/service_plan.pdf" }
    ],
    video: {
      title: "The Last Dance 프로토타입 플레이 영상",
      youtubeId: "REPLACE_WITH_YOUTUBE_ID"
    }
  }
];

const TIMELINE = [
  {
    projectId: "leonard",
    project: "레오나르의 날개",
    subtitle: "팀 프로젝트 · 스팀펑크 오픈월드 액션 RPG",
    entries: [
      {
        date: "2026.05",
        title: "프로젝트 콘셉트와 개발 방향 정리",
        desc: "스팀펑크 공중 세계, 인간형 기계로봇 주인공, 오픈월드 액션 RPG 방향성을 정리했습니다.",
        works: ["핵심 장르와 플레이 감성 정리", "세계관 키워드와 프로젝트 차별점 정리", "팀 프로젝트 산출물 범위 정리"],
        outputs: ["개발제안서 초안", "프로젝트 개요", "핵심 콘셉트 정리"]
      },
      {
        date: "2026.05",
        title: "세계관·스토리·배경 컨셉 구체화",
        desc: "아르카디아, 레비 에센스, 레오나르와 다빈치의 갈등 구조를 중심으로 게임의 배경과 서사를 정리했습니다.",
        works: ["공중 세계 아르카디아 구조 정리", "주요 인물과 갈등 구조 정리", "구역별 배경 컨셉 방향 정리"],
        outputs: ["게임스토리 문서", "배경 컨셉 기획서", "캐릭터/세력 설정 메모"]
      },
      {
        date: "2026.06",
        title: "페럼 지역 레벨 컨셉 정리",
        desc: "페럼을 하층 생존 공간이자 불법개조 집단이 모여 있는 초반 핵심 지역으로 설정하고 구역별 역할을 정리했습니다.",
        works: ["기계 처리장, 기계 정비장, 암시장, 케이지 구역 분리", "메인 루트와 서브 출구 구조 정리", "랜드마크와 주요 NPC 역할 정리"],
        outputs: ["페럼 지역 레벨 컨셉 문서", "구역별 역할표", "블록아웃 기준 메모"]
      },
      {
        date: "2026.06",
        title: "페럼 레벨 디자인 문서 작성",
        desc: "플레이어가 페럼을 어떻게 이동하고, 어떤 순서로 전투와 상호작용을 경험하는지 레벨 디자인 문서로 구체화했습니다.",
        works: ["메인 동선과 보스 배치 설계", "체크포인트와 재도전 거리 정리", "상호작용 오브젝트와 전투 밀도 정리", "미니보스/메인보스 진입 구조 정리"],
        outputs: ["레벨 디자인 기획서", "보스 배치표", "인카운터 구성표"]
      },
      {
        date: "2026.06",
        title: "플레이 테스트 시나리오와 분석서 정리",
        desc: "레벨 디자인이 실제 플레이 흐름으로 검증될 수 있도록 테스트 순서, 체크리스트, 분석 항목을 문서화했습니다.",
        works: ["플레이 매뉴얼형 테스트 시나리오 작성", "구간별 관찰 포인트 정리", "테스트 후 기록할 분석 항목 구성"],
        outputs: ["플레이 테스트 시나리오", "플레이 분석서", "체크리스트"]
      },
      {
        date: "2026.06",
        title: "서비스 지표와 출시 전략 정리",
        desc: "패키지 게임 기준으로 Steam 출시 흐름, 가격 전략, KPI, 리스크를 정리해 프로젝트 제안의 완성도를 높였습니다.",
        works: ["Steam 출시 절차 정리", "데모→구매 전환 지표 정리", "플레이/진행/품질 지표 설계", "프로젝트 리스크 정리"],
        outputs: ["게임 서비스 기획서", "Steam 출시 전략서", "KPI 지표표"]
      }
    ]
  },
  {
    projectId: "armonia",
    project: "아르모니아",
    subtitle: "개인 프로젝트 · 파스텔 판타지 MMORPG",
    entries: [
      {
        date: "2026.06",
        title: "MMORPG 핵심 콘셉트 정리",
        desc: "전투 모험가와 생활 모험가가 길드를 중심으로 협력하는 파스텔 판타지 MMORPG 방향을 정리했습니다.",
        works: ["의뢰 기반 전투모험 구조 정리", "전투/생활 콘텐츠 연결 방향 정리", "NPC 운영 길드와 플레이어 길드 구조 구상"],
        outputs: ["프로젝트 개요", "핵심 플레이 루프", "길드 의뢰 구조 메모"]
      },
      {
        date: "2026.06",
        title: "종족과 직업 클래스 설정",
        desc: "인간, 요정족, 거인족, 정령족, 용족, 마족 등 다양한 종족과 5개 직업 클래스의 기본 이미지를 정리했습니다.",
        works: ["다종족 판타지 세계 방향 정리", "수호자, 격투가, 조각가, 소환사, 치유술사 역할 정리", "직업별 플레이 감성 구분"],
        outputs: ["캐릭터 컨셉 방향", "종족/직업 설정표", "프로젝트 카드 설명문"]
      },
      {
        date: "2026.06",
        title: "초반 지역과 의뢰 흐름 구상",
        desc: "회색가지 마을과 찬란왕도 루미나의 관계, 보급로 문제, 몬스터 난동을 중심으로 초반 플레이 시나리오를 정리했습니다.",
        works: ["초반 마을 문제 설정", "보급로 차단과 의뢰 발생 이유 정리", "플레이어가 지역 문제를 해결하는 구조 설계"],
        outputs: ["초반 플레이 시나리오", "NPC 의뢰 흐름", "지역 문제 구조 메모"]
      },
      {
        date: "2026.06",
        title: "세계관과 스토리 구조 방향 정리",
        desc: "하나의 선형 메인 서사보다, 큰 배경 위에 길드 의뢰·보스/NPC 서사·생활/전투 콘텐츠가 누적되는 MMORPG형 스토리 구조를 정리했습니다.",
        works: ["메인 배경 스토리 방향 정리", "서브 스토리와 지역 의뢰 연결", "보스/NPC 서사를 플레이 콘텐츠와 연결"],
        outputs: ["세계관 구조 메모", "스토리 구조 방향", "지역/NPC/보스 서사 초안"]
      },
      {
        date: "2026.06",
        title: "포트폴리오 웹사이트용 비주얼과 소개문 정리",
        desc: "아르모니아가 파스텔 톤 판타지 MMORPG로 보이도록 인트로 배경 이미지와 프로젝트 소개문을 정리했습니다.",
        works: ["웹사이트 인트로 이미지 방향 설정", "프로젝트 카드용 짧은 설명문 정리", "상세 소개용 긴 설명문 분리"],
        outputs: ["인트로 배경 이미지", "프로젝트 소개문", "웹사이트 섹션 문구"]
      }
    ]
  },
  {
    projectId: "the-last-dance",
    project: "The Last Dance",
    subtitle: "개인 프로젝트 · 중세/동양 무사 액션 로그라이크",
    entries: [
      {
        date: "2026.04",
        title: "액션 로그라이크 기본 콘셉트 정리",
        desc: "죽음과 부활을 반복하며 성장하는 로그라이크 구조와 중세·동양 무사 테마의 기본 방향을 정리했습니다.",
        works: ["장르와 반복 플레이 구조 정리", "7개의 죄악을 중심으로 한 세계 테마 설정", "전투 중심 프로젝트 방향 정리"],
        outputs: ["프로젝트 개요", "세계관 방향 메모", "핵심 루프 초안"]
      },
      {
        date: "2026.05",
        title: "6가지 무기 전투 정체성 정리",
        desc: "한손검, 단검, 레이피어, 창, 태도, 대검의 역할과 플레이 감각을 구분했습니다.",
        works: ["무기별 공격 범위와 전투 감각 구분", "기본 공격/스킬 구조 방향 정리", "무기 교체와 전투 흐름 검토"],
        outputs: ["무기별 전투 컨셉표", "캐릭터 베이스 문서 방향", "전투 메카닉스 메모"]
      },
      {
        date: "2026.05",
        title: "게임 메카닉스와 데이터 테이블 정리",
        desc: "전투 수치, 성장 공식, 스킬 구조, 기본 공격 테이블을 문서와 데이터 기준으로 정리했습니다.",
        works: ["HP, 공격력, 공격속도, 치명타 등 스테이터스 검토", "Damage Formula와 Crit 구조 정리", "스킬/무기/성장 데이터 테이블 구조 검토"],
        outputs: ["게임 메카닉스 문서", "데이터 테이블 구조", "전투 공식 메모"]
      },
      {
        date: "2026.05",
        title: "카드와 반복 성장 구조 정리",
        desc: "플레이 중 선택하는 카드 효과와 게임 종료 후 초기화되는 로그라이크형 성장 흐름을 정리했습니다.",
        works: ["카드 3장 제시 구조 정리", "리롤 1회, 스킵 없음, 중첩 가능 조건 정리", "엘리트 몬스터 보상 흐름 검토"],
        outputs: ["카드 시스템 기획 메모", "게임 메카닉스 수정 방향", "데이터 테이블 수정 프롬프트"]
      },
      {
        date: "2026.06",
        title: "웹사이트용 인트로 이미지와 소개문 정리",
        desc: "The Last Dance의 어두운 중세·동양 무사 분위기와 6무기, 7죄악 콘셉트가 보이도록 웹사이트용 비주얼 방향을 정리했습니다.",
        works: ["활이 포함되지 않도록 6무기 기준 재정리", "한손검, 단검, 레이피어, 창, 태도, 대검 기준 소개문 수정", "인트로 배경 이미지 재생성"],
        outputs: ["The Last Dance 인트로 배경 이미지", "프로젝트 소개문", "웹사이트 섹션 문구"]
      }
    ]
  }
];

const SKILLS = [
  { title: "Game Concept Planning", desc: "게임의 핵심 재미, 장르, 타깃, 차별점을 정리하고 개발제안서와 프로젝트 개요 문서로 구체화합니다." },
  { title: "Game Mechanics Design", desc: "전투, 성장, 무기, 스킬, 보상 구조를 설계하고 수치와 데이터 테이블로 구현 기준을 정리합니다." },
  { title: "Level Design", desc: "지역의 목적, 동선, 전투 배치, 체크포인트, 보스 진입 구조를 설계하고 블록아웃과 플레이 흐름을 기준으로 문서화합니다." },
  { title: "Content System Design", desc: "퀘스트, 반복 콘텐츠, 성장 재료, 보상 구조를 설계하고 플레이어가 콘텐츠를 반복하는 이유를 구조화합니다." },
  { title: "Story & Worldbuilding", desc: "세계관, 종족, 지역, NPC, 보스 서사를 정리하고 게임 플레이와 연결되는 스토리 구조를 설계합니다." },
  { title: "Service Planning", desc: "Steam 출시 전략, 가격, KPI, 서비스 지표, 리스크를 정리하고 패키지 게임 기준의 운영 지표를 설계합니다." }
];

const TOOLS = [
  { title: "Unreal Engine", items: ["프로토타입 맵 구성", "캐릭터 이동 및 전투 테스트", "레벨 블록아웃 확인"] },
  { title: "Excel", items: ["데이터 테이블 정리", "성장 공식, 전투 수치, 콘텐츠 구조 정리"] },
  { title: "Figma", items: ["UI 화면 구조 설계", "와이어프레임 제작", "포트폴리오 웹사이트 레이아웃 구상"] },
  { title: "Word / PDF", items: ["개발제안서, 시스템 기획서, 레벨 디자인 문서 작성", "기획 문서 양식 정리 및 제출용 PDF 제작"] },
  { title: "PowerPoint", items: ["발표용 기획서 구성", "프로젝트 제안서 시각화"] }
];
