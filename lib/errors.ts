export const ERROR_CODES = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  DB_QUERY_FAILED: "DB_QUERY_FAILED",
  INVALID_PARAM: "INVALID_PARAM",
  NOT_FOUND: "NOT_FOUND",
  EXTERNAL_SERVICE_ERROR: "EXTERNAL_SERVICE_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

export class AppError extends Error {
  code: ErrorCode;
  status: number;
  details?: unknown;

  constructor({
    code,
    message,
    status = 500,
    details,
  }: {
    code: ErrorCode;
    message: string;
    status?: number;
    details?: unknown;
  }) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;
    this.details = details;
  }
}
