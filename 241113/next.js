React.js :
- JS를 활용해서 UI를 호율적으로 제어 라이브러리
- 라이브러리에서 제공해주는 요소들을 가지고 개발자 대부분의 기능을
커스텀할 수 있도록 해주는 지원도구
기능을 커스텀할 수 있도록 해주는 지원도구
- 페이지 라우팅 // react-router-dom // Routes & Route
- Outlet
- CSR : Client Side Rendering <-> SSR : Server Rendering
- meta


*SSR : 
사용자 <-> 웹브라우저 <-> 서버 // 너무나 많은 서버 의존 
> 서버 구현 구동 비효율 자원
> 과중한 업무 // 서버 문제

*2018년부터 문제제기
- React.js 웹페이지 VS SSR 웨벺이지 > SEO

Next.js :
- 프레임워크 // 개발자가 어떤것을 제어할 수 있는 대상x
- 이미완성 || 구축되어있는 문법체계를 그냥 가져다가 사용
- 답답함을 느끼기도 합니다 && 크리에이티브한 문법x

- 기존 SSR방식 업그레이드 된 SSR방식
- Pre-Rendering = 사전 렌더링 방식 채택

1) SEO 검색률이 매우 향상
2) FCP (*First Contentful Paint)
3) Hydration (*어떤 상태가 실질적인 상태로 변화되어지는 화학적 작용)
> 컴포넌트 마운트 => 사용자 액션
=> TTI (Time To Interactive)시간 매우 개선!!!

*Next.js

1. Framework : 거의 답이 정해져 있는 Rule
2. SEO 최적화
3. FCP > Pre-Rendering 기능
4. Hydration // TTI 개선

2023.6월 Beta // 8월 정식 채택
> Page Router
> App Router

-----

React.js
> Class 컴포넌트 => function 컴포넌트

F/e => Next.js & supabase

Server를 활용해서 API 데이터 

postgresql://postgres.xsaygoqevszhjmhhyhpp:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres

supabase : firebase처럼 cloud 공간 // 서버 공간

schema : 서버를 구축 > DB 어떤 방식 저장.출력 => 가져오고 

Next.js + TS + Supabase + Vecel & Prisma

npx prisma db push

npm run seed

npm run build

npm run start

localhost:12345/book

npx prisma studio

npx create-next-app@14 ui-main

Next.js 페이지 라우터
> react-router-dom 페이지 라우팅x
> 라우팅을 하고 싶은 폴더 > index

npm i
npm run dev
> 3000포트

1. Next.js 소개
2. Page Router 기능

1) 기본 페이지 라우팅
- Common Page Routing
- Page Routing
- Query String
- URL Parameter
- 404 Page Routing

2) 네비게이션


http://localhost:3000/search?q=hoon

Next.js : 프레임워크
> React.js => jsx

http://localhost:3000/book/2

http://localhost:3000/book/man/shirt/charecter

복수의 동적 파라미터의 반영하는 path의 경우, Catch All Segment 기능 사용
> 파일명 : [...파일명]

Otional Catch All Segment기능 사용!!
> 파일명 : [[...파일명]]