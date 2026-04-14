type TrackExceptionParams = {
  context: string;
  requestId?: string;
  error: unknown;
  tags?: Record<string, string | number | boolean>;
};

type QueryMetricParams = {
  key: string;
  durationMs: number;
  status: "success" | "error";
};

export function trackException(params: TrackExceptionParams) {
  const { context, requestId, error, tags } = params;

  const payload = {
    level: "error",
    context,
    requestId,
    tags,
    error:
      error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : { message: String(error) },
    timestamp: new Date().toISOString(),
  };

  console.error("[observability] exception", payload);

  const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN;
  if (!sourceToken) return;

  void fetch("https://in.logs.betterstack.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sourceToken}`,
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    // 로깅 실패는 서비스 흐름에 영향을 주지 않아야 한다.
  });
}

export function trackQueryMetric({ key, durationMs, status }: QueryMetricParams) {
  const payload = {
    level: "info",
    type: "query_metric",
    key,
    durationMs,
    status,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    console.info("[query-metric]", payload);
    return;
  }

  console.info("[query-metric]", payload);
}
