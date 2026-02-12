export type Project = {
  id: string;
  title: string;
  category: string;
  archiveCategory: string;
  contribution: string;
  year: string;
  duration: string;
  description: string;
  collab: string;
  externalLink?: string; // Kept for backward compatibility if needed, but links array is preferred
  links?: { label: string; url: string; }[];
  imageUrl: string;
  aspectRatio: string;
  images: string[];
  [key: string]: any; 
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '국립중앙박물관 특별전시 <기억을 먹을 수 있다면?>',
    category: 'Exhibition',
    archiveCategory: 'Exhibition',
    contribution: 'Motion & Media Design',
    year: '2026',
    duration: '2026.01.27 - 2026.03.02',
    description: "”만약, 당신의 가장 소중한 기억을 맛볼 수 있다면 어떨까요?“ 2026년 국립중앙과학관이 새롭게 선보이는 이번 특별전은 바로 이 엉뚱하고도 설레는 질문에서 출발했습니다. 상상과학 특별전 <기억을 먹을 수 있다면?>은 바이오센서, 뇌파 분석, 3D 푸드 프린팅, 식품부산물, 식용 곤충 등 현재의 과학기술을 통해 다가올 미래를 함께 상상해보는 전시입니다. 저는 기억 식품 테스트 UX/UI 디자인, 전시 공간 영상 디자인을 포함한 미디어 디자인을 담당했습니다.",
    collab: `[주최/주관]
국립중앙과학관
권석민 이충원 김석형 진현서

[공동기획]
서울대학교 디자인과
총괄 | 이장섭
코디네이션 | 임정빈 진현서
공간디자인 | 백윤주
푸드디자인 | 안서효 임정빈
그래픽디자인 | 김소희 박주찬
3D디자인 | 윤보라
미디어디자인 | 이주현
선행연구 | 김민지 김소희 라하은 박주찬 백윤주 안서효 윤보라 이서영 이정아 정지운 이주현 임정빈 최예주 홍혜림

[협업]
모션그래픽 | 김아정
오브제제작 | 스튜디오 스두디오
음악 | 최지은(MiNIMA Sound)
사진 영상기록 | 배한솔(Studio Stack)

[협력기관]
대구경북과학기술원(DIGIST)
엔사이드(ENSIDE)
옴니핏(OMNIFIT)
탑테이블(TOPTABLE)
리하베스트(RE:HARVEST)
니오타니인섹트팜(NEOTENY INSECT FARM)

[제작/시공]
이노애드(INNOAD)`,
    links: [
      { label: "Visit Project", url: "https://www.science.go.kr/mps/0/bbs/321/moveBbsNttDetail.do?nttSn=48780" },
      { label: "MBTI test", url: "https://memory.waveon.me" },
      { label: "Motion design", url: "https://drive.google.com/file/d/1GEnvGgVsEd0XBR3H7zmNUDXKAL8BMIqK/view?usp=sharing" },
      { label: "Media design", url: "https://drive.google.com/file/d/1xOIP089zRCEF2S-0aTA52cW1TejX9rLx/view?usp=sharing" }
    ],
    imageUrl: '/assets/images/2026_1_1.png',
    aspectRatio: 'aspect-[4/3]',
    images: [
      '/assets/images/2026_1_1.png',
      '/assets/images/2026_1_2.png',
      '/assets/images/2026_1_3.png',
      '/assets/images/2026_1_4.png',
      '/assets/images/2026_1_5.png',
      '/assets/images/2026_1_6.png',
      '/assets/images/2026_1_7.png',
      '/assets/images/2026_1_8.JPG',
      '/assets/images/2026_1_9.JPG'
    ]
  },
  {
    id: 'p2',
    title: '한국 HCI학회 학술대회\n<임산부 택시 이동의 심리적 불안 요인 기반 모빌리티 서비스 전략>',
   category: 'Research',
    archiveCategory: 'Research',
    contribution: 'Research & Writing',
    year: '2026',
    duration: '2026.01.26 - 2026.01.28',
    description: "본 연구는 임산부의 택시 이동 과정에서 발생하는 불안 요인을 규명하고, 이를 완화하는 임산부 친화적 모빌리티 서비스를 제안하는 데 목적이 있다. 이를 위해 임신·출산 경험이 있는 여성 9명을 대상으로 온라인 설문을 실시하여 호출–대기–탑승–하차 전 과정의 주요 불안 요인을 도출하였다. 분석 결과를 기반으로 안전 옵션 선택, 속도·온도·대화 조절, 하차 도움 기능 등을 포함한 모바일 프로토타입을 설계하였다. 이후 임신 26주차 상황을 가정한 몰입 시나리오 하에 여성 5명을 대상으로 사용성 평가를 수행하였으며, SAM 척도·사후 설문·발화 코딩을 활용해 정량·정성 분석을 병행하였다. 그 결과 프로토타입은 호출 단계의 사전 설정과 탑승 중 실시간 제어 기능을 통해 높은 통제감과 심리적 안정감을 제공하는 것으로 나타났으며, 보호자에게 위치를 공유하는 기능은 사용자의 핵심적 니즈로 작용하였다. 반면 임산부의 특수성을 고려했을 때, 과도한 시각적 움직임·용어의 모호성·대기 구간의 낮은 통제감은 개선이 필요한 지점으로 나타났다. 본 연구는 임산부의 이동 경험을 전 여정 관점에서 구조적으로 분석하고, 심리적 안정과 사용 통제성을 중심으로 한 모빌리티 UX 설계 방향을 제안했다는 점에서 의의를 지닌다.",
    collab: "Juhyun Lee(1st Author), Juhyun Eune(Corresponding Author)",
    links: [
        { label: "Conference paper", url: "https://www.researchgate.net/publication/400373056_imsanbu_taegsi_idong-ui_simlijeog_bul-an_yoin_giban_mobilliti_seobiseu_jeonlyag_Mobility_Service_Strategies_Based_on_Psychological_Anxiety_Factors_in_Pregnant_Women's_Taxi_Use?_sg%5B0%5D=AAXLtcbR_exAyn8OBKHoCVhPBNw16sEQJVQoZRRkNDyUba_rIs4GH0lxgTXrPsHJtSWUkk4KNMiWxynkfBKIVlbo7vXFJtJhTFdLZMeS.y_gCYGFss3gyR5OcqyDM7KxqM8se4yR3OWfsKZxYSP9MygyQkGsX6fzssD5yBopvCxqDUfWmAC-avtAM_HSfZw&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19" },
        { label: "Service prototype", url: "https://pregnancy-safe-taxi.figma.site/" },
        { label: "Slide", url: "https://drive.google.com/file/d/1k6R1h6N3bj5yaHjeOhQpmzfrGlFQkOTW/view?usp=drive_link" }
      ],
     imageUrl: '/assets/images/2026_2_1.JPG',
    aspectRatio: 'aspect-[4/2]',
    images: [
      '/assets/images/2026_2_1.JPG',
      '/assets/images/2026_2_2.png',
      '/assets/images/2026_2_3.JPG'
    ]
  },
  {
    id: 'p3',
    title: '2025 World FoodTech Forum <Lib:Life of bite>',
    category: 'Exhibition',
    archiveCategory: 'Exhibition',
    contribution: 'Media Design',
    year: '2025',
    duration: '2025.12.04 - 2025.12.05',
    description: "월드푸드테크포럼 특별전시로 진행된 이번 전시는, 푸드테크가 현실의 기술을 넘어 인간의 감정·기억·정체성을 다루는 문화로 나아갈 가능성을 제시하는 사변적 디자인 과정을 소개한다. 인류의 지속가능성을 고민하는 예술과 푸드테크가 만나는 접점에서 미디어디자인으로 '기억 추출'의 사용자 경험을 구현하였다. 전시는 자신의 기억을 먹을 수 있다면 어떤 맛일지 상상하는 것에서 출발하여, 시각화된 푸드 형태로 경험할 수 있도록 구성되었다. 이를 통해 푸드테크가 단순한 기술적 진보를 넘어 인간의 본질적 경험과 연결될 수 있음을 탐구하였다.",
    collab: `[주최/주관]
월드푸드테크협의회

[공동기획]
서울대학교 디자인과
총괄 | 이장섭
영상 | 이주현, 김소희, 라하은
브랜드 | 이정아, 박주찬, 홍혜림
UX | 김민지, 윤보라, 정지운
프로토타입 | 안서효, 임정빈
전시 | 백윤주, 이서영, 최예주
협력 | 탑테이블, 노상훈 쉐프, 배한솔(Studio Stack)

[장소]
JW Marriott Hotel Seoul, Grand Ballroom`,
     links: [
     { label: "Media Design", url: "https://drive.google.com/file/d/1q5T1y_urOdavkdbGJp4c9u7n__MXYKJj/view?usp=sharing" },
     { label: "On-site Sketch", url: "https://drive.google.com/file/d/1bCHnapKRpiALPkOTYv12wY5BWhUFpqsl/view?usp=sharing" }
      ],
    imageUrl: '/assets/images/2025_1_1.jpg',
    aspectRatio: 'aspect-[3/4]',
    images: [
      '/assets/images/2025_1_1.jpg',
      '/assets/images/2025_1_2.jpg',
      '/assets/images/2025_1_3.jpg',
      '/assets/images/2025_1_0.jpg',
      '/assets/images/2025_1_4.jpg',
      '/assets/images/2025_1_5.png',
      '/assets/images/2025_1_6.png',
      '/assets/images/2025_1_7.png',
      '/assets/images/2025_1_9.png'
    ]
  },
  {
    id: 'p4',
    title: '한국디자인학회 가을학술대회 <AI가 나를 칭찬한 걸까? 성인 학습자의 인공지능 기반 칭찬 피드백 인식 차이 탐색>',
    category: 'Research',
    archiveCategory: 'Research',
    contribution: 'Research & Writing',
    year: '2025',
    duration: '2025.11.29',
    description: "본 연구는 학습 주체가 인간 교육자에서 인공지능으로 확장되는 교육 환경에서, 성인 학습자가 인공지능 기반 ‘칭찬 피드백’을 어떻게 인식하는지를 탐색하였다. 특히 칭찬 유형에 따라 이해도와 학습 지속 의도에 차이가 발생하는지를 분석하였다. 42명의 성인 학습자를 대상으로 실험한 결과, 시각적 표현(애니메이션·그래픽)을 포함한 칭찬은 텍스트 기반 칭찬보다 학습 동기를 더 효과적으로 유도했으며, 근거 기반 피드백이 감정 기반 피드백보다 높은 선호를 받았다. 또한 연령이 낮거나 학습 경험이 적은 집단일수록 애니메이션 피드백을 긍정적으로 인식한 반면, 연령이 높거나 학습 경험이 많은 집단은 근거 중심의 피드백을 선호하는 경향을 보였다. 이는 디지털 네이티브의 시각 정보 처리 특성과 숙련 학습자의 인지적 요구 차이를 반영하는 결과로, 학습 경험이 많을수록 감정적 표현보다 학습 성과 그 자체에 더 주의를 기울인다는 점을 시사한다.",
    collab: "Juhyun Lee(1st Author), Juhyun Eune(Corresponding Author)",
    links: [
        { label: "Conference paper", url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12512865" },
        { label: "Slide", url: "https://drive.google.com/file/d/15iEO7GGy_gghAG0nVQtPbFu2z6bchYGh/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/2025_2_1.JPG',
    aspectRatio: 'aspect-[4/3]',
    images: [
      '/assets/images/2025_2_1.JPG',
      '/assets/images/2025_2_2.JPG',
      '/assets/images/2025_2_3.JPG',
      '/assets/images/2025_2_5.JPG',
      '/assets/images/2025_2_6.JPG',
      '/assets/images/2025_2_7.JPG'
    ]
  },

   {
    id: 'p5',
    title: 'KCI Journal Publication <국제 식량안보 인포그래픽 설계 전략: 메타포⋅색상⋅그래프 형태의 효과 분석>',
    category: 'Research',
    archiveCategory: 'Research',
    contribution: 'Research & Writing',
    year: '2025',
    duration: '2025.08.28',
    description: "한국커뮤니케이션학회 커뮤니케이션학 연구 2025, vol.33, no.3, pp. 293-315 (23 pages). 국제 식량안보는 복합 요인이 얽힌 구조적 문제로, 이를 효과적으로 전달하기 위해 데이터 시각화가 활용된다. 그러나 기존 시각화는 단일 지표 중심의 단순 그래프 사용, 메타포 부재, 제한적 색상 활용 등으로 데이터의 맥락과 복합적 관계 전달에 한계가 있다. 본 연구는 113개국 식량안보 데이터를 통합하여 시각화하고, 메타포 활용과 색상 및 그래프 형태의 선정이 주제 연상, 정보 이해, 시각적 몰입에 미치는 영향을 탐색하였다. 연구 결과, 메타포 아이콘과 색상은 연상·이해·몰입을 높이는 핵심 요소였으며, 원형 그래프는 막대그래프에 비해 지역별 군집 구조 제시에 효과적이나 수치 비교 명확성은 부족한 것으로 나타났다. 또한, 일부 색상 구분 불명확, 특정 메타포 그래픽의 적합성 문제 등 개선 영역이 확인되었다. 본 연구는 질적 분석을 통해 식량안보 인포그래픽 설계 시요소별 기여도와 한계를 제시하며, 향후 유사 주제 시각화를 위한 시사점을 제공한다.`",
    collab: "Juhyun Lee(1st Author), Juhyun Eune(Corresponding Author)",
    links: [
       { label: "DOI", url: "https://kiss.kstudy.com/Detail/Ar?key=4189909" },
        { label: "Researchgate", url: "https://www.researchgate.net/publication/395340041_gugje_siglyang-anbo_inpogeulaepig_seolgye_jeonlyagmetaposaegsanggeulaepeu_hyeongtaeui_hyogwa_bunseog_Design_Strategies_for_International_Food_Security_Infographics_Analyzing_the_Effects_of_Metaphor_Co" }
    ],
    imageUrl: '/assets/images/p5_2.jpg',
    aspectRatio: 'aspect-[4/3]',
    images: [
      '/assets/images/p5_2.jpg',
     '/assets/images/2025_3_1.jpg',
      '/assets/images/2025_3_2.jpg'
    ]
  },

 {
    id: 'p6',
    title: '2025 KSDS International Spring Invitational exhibition <Global Food Security 2025: A Self-Sufficiency Perspective>',
    category: 'Exhibition',
    archiveCategory: 'Exhibition',
    contribution: 'Infographic Design',
    year: '2025',
    duration: '2025.06.04 - 2025.06.08',
    description: "Among  the  UN's  Sustainable  Development  Goals  (SDGs),  “Zero  Hunger”  remains  far  from achieved, with over 340 million people still  facing  food  insecurity  as  of  2025.  This  crisis  varies  greatly  by  country,  making  its  complexity  difficult  to  grasp  intuitively.  This  infographic  visualizes  food  security  indicators across 113 countries, integrating data such as food self-sufficiency, access to healthy food, IPC, and GHI. By organizing this information within a circular structure, the work enables comparative insights through visual cues. It aims not just to inform but to foster  public  discourse  through  narrative-driven information design.",
    collab: "Juhyun Lee(1st Author), Juhyun Eune(Corresponding Author)",
    links: [
        { label: "Exhibition Site", url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12312874&width=2560" }
    ],
    imageUrl: '/assets/images/p6_5.JPG',
    aspectRatio: 'aspect-[3/4]',
    images: [
      '/assets/images/p6_5.JPG',
      '/assets/images/p6_1.JPG',
      '/assets/images/p6_6.jpg',
      '/assets/images/p6_3.JPG',
      '/assets/images/p6_2.JPG',
      '/assets/images/p6_4.JPG'
    ]
  },

  {
    id: 'p7',
    title: '석사 졸업 연구 <신뢰감 증진을 위한 자율주행 택시 에이전트 시각화 연구>',
    category: 'Research',
    archiveCategory: 'Research',
    contribution: 'Thesis & Writing',
    year: '2025',
    duration: '2025.02.27',
    description: "본 연구는 자율주행 택시 신뢰 부족 문제를 해결하기 위해 에이전트 의인화 수준과 설명 가능한 인터페이스가 사용자 신뢰에 미치는 영향을 규명하는 것을 목표로 한다. 211명을 대상으로 한 1차 정량적 설문조사와 30명을 대상으로 한 현장 주행 시뮬레이션 분석 결과, 가장 인간형에 가까운 에이전트가 일관되게 가장 높은 신뢰도를 보였으며, 의인화의 구체성과-신뢰 관계는 선형적이지 않았다. 이 실증 데이터를 기반으로 자율주행 택시에 적합한 최적 의인화 수준과 신뢰 증진형 인터페이스 디자인 방향을 도출하였다. 연구 결과는 자율주행 택시 수용성 향상을 위한 HCI·XAI 설계의 기초 자료로 활용될 수 있다.",
    collab: "Juhyun Lee",
    links: [
        { label: "Thesis", url: "https://dcollection.snu.ac.kr/common/orgView/000000189408" },
        { label: "실험 설계", url: "https://drive.google.com/file/d/1MNPzQNW0Gpu9d-pxCupEmBcn063TyVsM/view?usp=drive_link" },
        { label: "예시 주행", url: "https://drive.google.com/file/d/1ONnKFwM8YDORMJ3F1tvOvW9GDOuxpRBA/view?usp=drive_link" },
        { label: "에이전트 상호작용", url: "https://drive.google.com/file/d/1fAVBV-TefKDW9hZOA1HXhqVrxrvhLZ-t/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/p7_1.JPG',
    aspectRatio: 'aspect-[4/3]',
    images: [
      '/assets/images/p7_1.JPG',
      '/assets/images/p7_2.jpg',
      '/assets/images/p7_3.JPG',
      '/assets/images/p7_4.jpg',
      '/assets/images/p7_6.jpg',
      '/assets/images/p7_5.jpg'
    ]
  },

   {
    id: 'p8',
    title: 'Design Future Food Feast 2030 <Bob: 3D food printing for sustainable eating>',
    category: 'Exhibition',
    archiveCategory: 'Exhibition',
    contribution: 'Graphic Design & Media Design',
    year: '2024',
    duration: '2024.12.20 - 2024.12.21',
    description: "단 5초, 당신만을 위한 아침이 프린트됩니다. 바쁜 현대 사회, 식사조차 여유롭게 챙기기 어려운 시대입니다. 하지만 우리는 패스트푸드의 속도와 슬로우푸드의 가치를 결합한 새로운 아침의 혁신을 상상했습니다. 브랜드 ‘ㅂ’은 ‘Bob’ 또는 사용자가 부르고 싶은 이름으로 불립니다. 로봇이 섬세하게 사용자의 입맛과 건강 데이터를 분석해 식품 부산물을 활용한 지속 가능한 재료로 원하는 맛, 원하는 모양, 원하는 크기의 아침을 선사합니다. 본 전시는 미래를 상상한 스페큘러티브 디자인 프로젝트로, 3D 푸드 프린팅 기술과 개인 맞춤형 영양 공급의 가능성을 탐구합니다.",
    collab: "Juhyun Lee, Jungbin Im",
    links: [
        { label: "Press Release", url: "https://design.co.kr/article/104226" },
        { label: "Exhibition description", url: "https://drive.google.com/file/d/1P6TzQu-SeoTVv7EXoiWA5Ru021sKZ8Aa/view?usp=sharing" },
 { label: "Media Design", url: "https://drive.google.com/file/d/12md4cb5ieD1ySO8lA-eeUZXCfZYT82YR/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/p8_2.png',
    aspectRatio: 'aspect-[3/4]',
    images: [
      '/assets/images/p8_1.png',
      '/assets/images/p8_2.png',
      '/assets/images/p8_3.png',
      '/assets/images/p8_14.JPG',
      '/assets/images/p8_13.JPG',
      '/assets/images/p8_15.JPG',
      '/assets/images/p8_10.JPG',
      '/assets/images/p8_11.png',
      '/assets/images/p8_12.JPG',
      '/assets/images/p8_5.png',
      '/assets/images/p8_8.png',
      '/assets/images/p8_9.png'
    ]
  },

   {
    id: 'p9',
    title: 'NAVER 석박사 우수 연구 세미나 발표',
    category: 'Research',
    archiveCategory: 'Research',
    contribution: 'Research & Presentation',
    year: '2024',
    duration: '2024.12.15',
    description: "2024년 네이버 석박사 우수 연구 세미나 발표에서 졸업 연구 성과를 발표하여 자율주행 택시 맥락에서의 에이전트 의인화 수준과 설명 가능한 인터페이스가 사용자 신뢰에 미치는 영향을 규명한 연구를 공유했다. 본 연구는 자율주행 택시 수용성 향상을 위한 HCI·XAI 설계의 기초 자료로 활용될 수 있도록 현업 현장에 공유되었다.",
    collab: "Juhyun Lee",
    links: [
        { label: "Slide", url: "https://drive.google.com/file/d/152ye5mH8X-8PFo9xgHXSIwTC1K75JVRG/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/p9_1.JPG',
    aspectRatio: 'aspect-[4/3]',
    images: [
      '/assets/images/p9_1.JPG',
      '/assets/images/p9_2.JPG',
      '/assets/images/p9_3.JPG'
    ]
  },

  

   {
    id: 'p10',
    title: '디자인이 머무는 도시, 세계 도시 디자인 트렌드 2024',
    category: 'Book',
    archiveCategory: 'Research',
    contribution: 'Research & Writing',
    year: '2024',
    duration: '2024.9.10',
    description: "서울디자인재단과 협업하여 해외에 거주하는 디자인 전문가로 참여하여 ’세계 도시 디자인 트렌드‘를 조사하여 세계 디자인 선진국의 우수한 도시 디자인 프로젝트를 조사한 내용에 대한 기록을 아카이브한 책을 집필하였다. 핀란드의 디자인을 소개하는 역할로 참여하였다.",
    collab: `[ISBN]
979-11-93840-04-7

[발행처]
서울디자인재단

[집필진]
강기향, 강유선, 구재은, 김경현, 김영인,
김홍, 김효중, 박춘석, 박효선, 안자은,
엄혜선, 이미현, 이윤규, 이주원, 이주현,
임현경, 정명용, 조서영, 최서경, 황지은`,
    links: [
      { label: "담당 파트: Finland", url: "https://drive.google.com/file/d/1S2jzqVIc3BETV_pdawT3C24eyALHgqoa/view?usp=drive_link" },
        { label: "Book url", url: "  https://seouldesign.or.kr/?menuno=326&bbsno=717&boardno=35&siteno=1&act=view&cates=" },
        { label: "서울디자인재단", url: "https://seouldesign.or.kr/?menuno=506&bbsno=5668&boardno=21&siteno=1&act=view&cates=" }
    ],
    imageUrl: '/assets/images/p10_3.png',
    aspectRatio: 'aspect-[16/9]',
    images: [
      '/assets/images/p10_3.png',
      '/assets/images/p10_1.png',
      '/assets/images/p10_2.png'
    ]
  },

   {
    id: 'p11',
    title: 'Album Cover Design <Darkness into light>',
    category: 'Visual Identity',
    archiveCategory: 'Visual Identity',
    contribution: 'Graphic Design',
    year: '2024',
    duration: '2024.06.20',
    description: "아티스트 SEMIN의 Digital double single album <Darkness into light>의 앨범 커버 디자인을 진행하였다. 보랏빛 밤 속에서 빛을 향해 나아가는 여정을 시각적으로 표현하였다. 음악의 주제와 감정을 반영하여 메인 그래픽을 흔들리며 파장하는 빛으로 표현하였다.",
    collab: "Juhyun Lee",
    links: [
        { label: "Spotify", url: "https://open.spotify.com/track/7koCEuZVxcM6p8ZZuuQyj6?si=-wrQQF5TSZmtzj7gIKX1jQ&nd=1&dlsi=1c31f0208c4d497a" }
    ],
    imageUrl: '/assets/images/p11_5.png',
    aspectRatio: 'aspect-[1/1]',
    images: [
      '/assets/images/p11_5.png',
      '/assets/images/p11_3.png',
      '/assets/images/p11_6.png',
      '/assets/images/p11_1.jpg',
      '/assets/images/p11_2.jpg',
      '/assets/images/p11_4.png'
    ]
  },

  {
    id: 'p12',
    title: 'Carved Connections, Finland',
    category: 'Exhibition',
    archiveCategory: 'Exhibition',
    contribution: 'Exhibition Design & Printmaking',
    year: '2024',
    duration: '2024.06.07 - 2024.06.10',
    description: "대지의 75%가 숲으로 덮여있는 목재의 나라, 핀란드에서 공부하는 동아시아 작가들이 참여하여 개인의 내러티브와 기획을 3인전에 담아냈다. 자살율 1위와 행복한 나라 1위 나라를 겪으며 느낀 점에 대한 것을 '깎아내리는 행위'를 통해 표현하고자 했다.",
    collab: "Juhyun Lee, Saki Oshino, Harim Kwon",
    links: [
        { label: "Exhibtion Site", url: "https://drive.google.com/file/d/1dyZz8KISieuJ0-Cr4GOy8VKdg8M2gPMF/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/p12_1.jpg',
    aspectRatio: 'aspect-[4/3]]',
    images: [
      '/assets/images/p12_1.jpg',
      '/assets/images/p12_2.jpg',
      '/assets/images/p12_3.jpg',
      '/assets/images/p12_4.jpg',
      '/assets/images/p12_5.jpg',
      '/assets/images/p12_6.jpg'
    ]
  },
  
   {
    id: 'p13',
    title: 'Identity Design <Monsterspindle>',
    category: 'Visual Identity',
    archiveCategory: 'Visual Identity',
    contribution: 'Identity Design',
    year: '2024',
    duration: '2024.02.24',
    description: "삼보기공의 새로운 브랜드 <Monsterspindle>의 로고 디자인을 진행하였다. 몬스터스핀들은 삼보기공의 기존 브랜드 아이덴티티를 계승하면서도 현대적이고 역동적인 이미지를 시각적으로 표현하고 이를 브랜드 가이드라인으로 제작하였다.",
    collab: "Juhyun Lee",
    links: [
        { label: "Slide", url: "https://drive.google.com/file/d/1irs1Z__kmNLOWiNeQgMBFWluSP602jqw/view?usp=drive_link" }
    ],
    imageUrl: '/assets/images/p13_1.png',
    aspectRatio: 'aspect-[2/4]',
    images: [
      '/assets/images/p13_1.png',
      '/assets/images/p13_2.png',
      '/assets/images/p13_3.png'
    ]
  },

  {
    id: 'p14',
    title: 'Identity Design <Valgwang>',
    category: 'Visual Identity',
    archiveCategory: 'Visual Identity',
    contribution: 'Identity Design',
    year: '2024',
    duration: '2024.01.15',
    description: "공익 광고단체 <세상을 밝히는 광고 '발광'>의 로고 디자인을 진행하였다. 발광은 사회적 이슈에 대해 목소리를 내고 변화를 촉구하는 단체로, 그들의 반짝이는 미션과 비전을 시각적으로 표현하고 이를 브랜드 가이드라인으로 제작하였다.",
    collab: "Juhyun Lee",
    links: [
        { label: "Instagram", url: "https://www.instagram.com/valgwang/" }
    ],
    imageUrl: '/assets/images/p14_1.jpg',
    aspectRatio: 'aspect-[2/3]',
    images: [
      '/assets/images/p14_1.jpg',
      '/assets/images/p14_2.jpg',
      '/assets/images/p14_3.jpg',
      '/assets/images/p14_4.jpg'
    ]
  }

];
