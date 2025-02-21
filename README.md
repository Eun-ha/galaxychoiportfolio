## 🌟 UI & FE 개발자 최은하의 포트폴리오 README

이 프로젝트는 Next.js 및 React.js 기술을 탐구하고 최은하의 포트폴리오를 위하여 제작되었습니다.

## 🚀 시작하기

이 프로젝트를 로컬 환경에서 실행하려면 아래의 단계를 따라 주세요.

#### 1. 레포지토리 클론

```bash
git clone https://github.com/Eun-ha/galaxychoiportfolio.git
```

#### 2. 프로젝트 디렉토리로 이동

```bash
cd galaxychoiportfolio
```

#### 3. 의존성 설치

먼저 레포지토리를 클론합니다

```bash
npm install
```

#### 4. 프로젝트 실행

```bash
npm run dev

#or

npmr run start
```

## 📑 포트폴리오 설명

프로젝트 구성은 크게 [<img src="https://img.shields.io/badge/Main-5C2EDE?style=flat&logo=starship&logoColor=white"/> ](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/)
[<img src="https://img.shields.io/badge/Resume-EB0000?style=flat&logo=stardock&logoColor=white"/>](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/resume/descriptions)
[<img src="https://img.shields.io/badge/Work-5C0D34?style=flat&logo=instatus&logoColor=white"/>](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/work) 페이지로 구성되어있습니다.

#### 1. [<img src="https://img.shields.io/badge/Main-5C2EDE?style=flat&logo=starship&logoColor=white"/> ](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/)페이지는 Home, About, Skills, Contact 섹션으로 나누어집니다. 주요 참고 내용은 아래 표와 같습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030">주요 섹션</td>
    <td> 설명 </td>
  </tr>
 <tr>
  <td style="border-right: 1px solid #303030"> Home </td>
    <td rowspan="2"> template & boundary를 활용한 통일 된 UI 적용 </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> About </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> Skills </td>
    <td> recharts 플러그인을 사용하여 데이터를 시각적으로 재미있게 표현 </td>
  </tr>
  <td style="border-right: 1px solid #303030"> Contact </td>
    <td> - useActionState 훅를 활용한 폼 상태관리 및 pending시 사용자에게 대기중을 알리는 UI 적용하여 사용자 경험 향상<br>- zod를 사용하여 입력 데이터 유효성검사 처리 <br>- nodemailer를 활용한 메일쓰기 기능 적용 </td>
  </tr>
  <tr>
   <td style="border-right: 1px solid #303030"> Common </td>
    <td> - motion 플러그인을 사용하여 컨텐츠 노출시 시차를 두어 동적인 효과 반영<br> - tsparticles 플러그인을 활용하여 세련된 느낌 반영 <br> - scroll-tracker-nav 컴포넌트는 브라우저 스크롤에 반응하여 컴포넌트 노출 및 활성화 UI 적용</td>
  </tr>
</table>

#### 2. [<img src="https://img.shields.io/badge/Resume-EB0000?style=flat&logo=stardock&logoColor=white"/>](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/resume/descriptions) 페이지는 AsideButton 및 contents 섹션으로 나누어집니다. 주요 참고 내용은 아래 표와 같습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030">주요 섹션</td>
    <td> 설명 </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> AsideButton </td>
    <td> useSelectedLayoutSegment 훅을 사용하여 segment 값을 가져오고, <br>그 값을 동적라우트의 slug 값과 비교하여 현재 페이지를 인식하여 활성화 UI 적용 </td>
  </tr>
  <td style="border-right: 1px solid #303030"> contents </td>
    <td>- asideButton 컴포넌트 안의 버튼 클릭시 동적라우트의 slug 값을 기반으로 한 4개의 컴포넌트(resume-description, resume-experience, resume-education, resume-certificate) 동적 로딩<br> - suspense 사용하여 로딩 지연시 SkeletonCard 컴포넌트를 노출하여 사용자 경험 향상<br> - titles-descriptions 컴포넌트를 사용하여 slug 별 타이틀과 간략한 설명 동적 적용
 </td>
  </tr>
</table>

#### 3. [<img src="https://img.shields.io/badge/Work-5C0D34?style=flat&logo=instatus&logoColor=white"/>](https://galaxychoiportfolio-git-main-eunhas-projects.vercel.app/work) 페이지는 Carousel을 사용하여 유저와 상호작용적인 인터렉션을 구현하였습니다. 주요 참고 내용은 아래 표와 같습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030">주요 섹션</td>
    <td> 설명 </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> Common </td>
    <td> - Carousel을 사용하여 유저와 상호작용 적인 인터렉션 구현<br> - 컨텐츠, 이미지, 버튼 영역(CarouselButton)컴포넌트를 조합하여 페이지를 구성 <br> - CarouselButton 컴포넌트의 경우 데이터(url,download,git) 유무에 따라 동적으로 버튼 생성
  </td>
  </tr>
</table>

#### 4. 🌱 포트폴리오 공통 구현 사항은 아래와 같습니다. 주요 참고 개발 내용은 아래 표와 같습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030">내용</td>
    <td> 설명 </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> 구현사항 </td>
    <td>
    - typescript를 통한 타입 안정성 확보 및 런타임 에러 방지<br>
    - error, not-found 컴포넌트를 사용하여 예외 상황 처리<br>
- loading 컴포넌트를 사용하여 지연시 상태를 알려 사용자 경험 향상<br>
- 컨텐츠 내용에 적용 상이하 컴포넌트에 template & boundary 기능을 사용하여 공통 UI 적용<br>
- 반응형 웹 적용<br>
- SEO 최적화를 위한 metadata 적용, 소셜미디어 공유를 위한 opengraph 이미지 추가, robots, sitemap 생성<br>
- 시멘틱 태그 사용 및 접근성 속성(aria-label) 적용<br>
- 크롬 Lighthouse를 사용하여 성능, 접근성, UX 개선<br>
    </td>
  </tr>
  <td style="border-right: 1px solid #303030"> 추가 개발 사항 </td>
    <td> - 국제화<br> - 데이터 관련 API 설계 및 운영툴화<br> - 에러 및 버그 추적을 위한 로그적용<br> - 배포 브랜치 분리
 </td>
  </tr>
</table>

## 🤝 기여 방법

이 프로젝트에 기여하려면 아래의 단계를 따르세요.<br>

#### 1. 먼저 레포지토리를 포크하세요.

#### 2. 아래 명령어를 수행해 주세요.

```bash
git checkout -b feature-branch #새로운 브랜치를 생성하세요

git commit -am 'Add new feature' #변경사항을 커밋하세요

git push origin feature-branch #변경사항을 푸시하세요

```

#### 3. Pull Request를 생성하세요.

## 📬 연락처

프로젝트에 관한 질문이나 제안은 다음 연락처로 보내 주세요.

이메일: galaxyceh@gmail.com

## 🙏 감사의 말

제 포트폴리오 레포지토리에 방문해 주셔서 감사합니다. 🧑‍💻🎉
