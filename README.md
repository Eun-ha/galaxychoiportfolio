This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## UI&FE 개발자 최은하의 포트폴리오 README

이 프로젝트는 Next.js 및 React.js 기술을 탐구하고 최은하의 포트폴리오를 위하여 제작되었습니다.

크게 <img src="https://img.shields.io/badge/Main-5C2EDE?style=flat&logo=starship&logoColor=white"/>
<img src="https://img.shields.io/badge/Resume-EB0000?style=flat&logo=stardock&logoColor=white"/>
<img src="https://img.shields.io/badge/Work-5C0D34?style=flat&logo=instatus&logoColor=white"/> 페이지로 구성되며, <img src="https://img.shields.io/badge/Main-5C2EDE?style=flat&logo=starship&logoColor=white"/> 페이지는 Home, About, Skills, Contact 섹션으로 나누어집니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030"> <img src="https://img.shields.io/badge/Main-5C2EDE?style=flat&logo=starship&logoColor=white"/> </td>
    <td> Description </td>
  </tr>
 <tr>
  <td style="border-right: 1px solid #303030"> Home </td>
    <td rowspan="2"> template & boundary를 활용한 통일 된 UI  </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> About </td>
    
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> Skills </td>
    <td> recharts 플러그인을 사용하여 데이터를 시각적으로 재미있게 표현 </td>
  </tr>
  <td style="border-right: 1px solid #303030"> Contact </td>
    <td> - useActionState 훅를 활용한 폼 상태관리 및 pending 시 사용자에게 대기중을 알리는 UI 적용 <br>- zod를 사용하여 입력 데이터 유효성검사 처리 <br>- nodemailer를 활용한 메일쓰기 기능 적용 </td>
  </tr>
  <tr>
   <td style="border-right: 1px solid #303030"> Common </td>
    <td> - motion 플러그인을 사용하여 컨텐츠 노출시 시차를 두어 동적인 효과 반영<br> - tsparticles 플러그인을 활용하여 세련된 느낌 반영 <br> - scroll-tracker-nav는 브라우저 스크롤에 반응하여 UI 노출 및 활성화 기능 적용</td>
  </tr>
</table>

<img src="https://img.shields.io/badge/Resume-EB0000?style=flat&logo=stardock&logoColor=white"/> 페이지는 AsideButton 및 contents 섹션으로 나누어집니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030"> <img src="https://img.shields.io/badge/Resume-EB0000?style=flat&logo=stardock&logoColor=white"/> </td>
    <td> Description </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> AsideButton </td>
    <td> useSelectedLayoutSegment 훅을 사용하여 segment 값을 가져오고, <br>그 값을 동적라우트의 slug 값과 비교하여 현재 페이지를 인식하여 활성화 UI를 적용 </td>
  </tr>
  <td style="border-right: 1px solid #303030"> contents </td>
    <td>- asideButton 클릭시 동적라우트의 slug 값을 기반으로 한 컴포넌트를 로딩<br> - suspense 사용하여 로딩 지연시 SkeletonCard 컴포넌트를 노출하여 사용자에게 현재 상태를 알림<br> - titles-descriptions 컴포넌트를 사용하여 slug 별 타이틀과 간략한 설명을 추가
 </td>
  </tr>
</table>

<img src="https://img.shields.io/badge/Work-5C0D34?style=flat&logo=instatus&logoColor=white"/> 페이지는 Carousel을 사용하여 유저와 상호작용적인 인터렉션을 구현하였습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030"> <img src="https://img.shields.io/badge/Work-5C0D34?style=flat&logo=instatus&logoColor=white"/>   </td>
    <td> Description </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> CarouselButton </td>
    <td> 데이터(url,download,git) 유무에 따라 동적으로 버튼 생성 </td>
  </tr>
  <td style="border-right: 1px solid #303030"> Common </td>
    <td> - Carousel을 사용하여 유저와 상호작용 적인 인터렉션 구현<br> - 컨텐츠, 이미지, 버튼 영역을 컴포넌트화 하여 조합하여 페이지를 구성
 </td>
  </tr>
</table>

포트폴리오 공통 구현사항은 아래와 같습니다.

<table style="width:100%; border: 1px solid #000; background-color: #101010">
  <tr>
    <td style="border-right: 1px solid #303030"> 공통 </td>
    <td> Description </td>
  </tr>
  <tr>
  <td style="border-right: 1px solid #303030"> 구현사항 </td>
    <td>
    - error, not-found 컴포넌트를 사용하여 예외 상황 처리<br>
- loading 컴포넌트를 사용하여 지연시 상태 사용자에게 알림<br>
- template & boundary 기능을 사용하여 공통 UI를 구성이 다른 컨텐츠 내용에 적용<br>
- 반응형 웹 적용<br>
- SEO를 위한 metadata 적용, robots, sitemap 생성<br>
- 시멘틱 태그 사용 및 접근성 속성(aria-label) 적용<br>
- 크롬 Lighthouse를 사용하여 성능, 접근성 개선<br>
    </td>
  </tr>
  <td style="border-right: 1px solid #303030"> 추가 개발 사항 </td>
    <td> - 국제화<br> - 데이터 관련 운영툴화 예정<br> - 에러 및 버그 추적을 위한 로그적용<br> - 배포브렌치 분리
 </td>
  </tr>
</table>
