# Observability / Quality Rules (Phase 4)

## 1) API / Action 에러 코드 체계

모든 API/Action 에러는 `AppError` 기반으로 처리합니다.

- 구현 파일: `lib/errors.ts`
- 공통 코드:
  - `INTERNAL_ERROR`
  - `DB_QUERY_FAILED`
  - `INVALID_PARAM`
  - `NOT_FOUND`
  - `EXTERNAL_SERVICE_ERROR`

`withApiHandler`는 에러를 표준 응답 형태로 반환합니다.

```json
{
  "success": false,
  "error": {
    "code": "DB_QUERY_FAILED",
    "message": "Failed to fetch descriptions data"
  },
  "requestId": "..."
}
```

## 2) 에러 추적 (Sentry/Logtail 연동 포인트)

`lib/observability.ts`의 `trackException`에서 구조화 로그를 남깁니다.

- 기본: 서버 콘솔 구조화 로깅
- Logtail: `LOGTAIL_SOURCE_TOKEN`이 있으면 Better Stack ingest API로 전송
- Sentry: 추후 SDK 도입 시 `trackException` 내부에 transport 추가

## 3) 쿼리 성능 모니터링

클라이언트 쿼리는 `trackQueryMetric`으로 duration 측정 로그를 남깁니다.

- 적용 예시: `useResumeDescriptionsQuery`
- 측정 항목:
  - `key`
  - `durationMs`
  - `status` (`success` | `error`)

## 4) 운영 가이드

1. 신규 API는 반드시 `withApiHandler` 사용
2. 비즈니스 레이어는 `AppError`로 코드/상태를 명시
3. 외부 연동 실패 시 `EXTERNAL_SERVICE_ERROR` 사용
4. 장애 분석 시 `requestId`로 API 에러와 로그를 연결
