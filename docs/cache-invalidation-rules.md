# Cache Tag / Invalidation Rules

Phase 2 목표인 **도메인별 캐시 태그 도입 + 무효화 규칙 문서화** 내용입니다.

## 1) 태그 정의

- `main`
- `skill`
- `work`
- `resume` (resume 전체 공통)
- `resume:descriptions`
- `resume:certificates`
- `resume:experiences`
- `resume:educations`

태그 상수 및 무효화 유틸은 `lib/cache-tags.ts`에서 관리합니다.

## 2) 읽기(조회) 규칙

조회 함수는 `unstable_cache(..., { revalidate: 60, tags: [...] })`를 사용합니다.

- Main 목록 조회: `main`
- Skill 목록 조회: `skill`
- Work 목록 조회: `work`
- Resume 조회:
  - 모든 resume 조회는 공통으로 `resume`
  - 각 세부 도메인은 `resume:*` 태그를 추가

## 3) 쓰기(변경) 이후 무효화 규칙

쓰기 액션(생성/수정/삭제) 완료 후 아래 규칙으로 무효화합니다.

1. 변경 도메인 태그를 `revalidateTag`로 무효화
2. 사용자 페이지도 `revalidatePath`로 함께 무효화
3. Resume 도메인은 공통(`resume`) + 세부(`resume:*`)를 함께 무효화

## 4) 구현 가이드

관리자/쓰기 서버 액션에서 아래 유틸을 사용합니다.

```ts
import { revalidateDomainCache } from "@/lib/cache-tags";

// 예시: work 데이터 변경 후
revalidateDomainCache("work");
```

도메인별 경로 무효화 기준:

- `main`, `skill`: `/`
- `work`: `/work`
- `resume`: `/resume`

필요하면 상세 페이지(`resume/[slug]`) 경로도 추가로 `revalidatePath` 합니다.
