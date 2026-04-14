import { NextResponse } from "next/server";
import { ERROR_CODES, toAppError } from "./errors";
import { trackException } from "./observability";

type ApiResolver<T> = () => Promise<T> | T;

export async function withApiHandler<T>(
  resolver: ApiResolver<T>,
  context: string
) {
  const requestId = crypto.randomUUID();

  try {
    const data = await resolver();
    return NextResponse.json({
      success: true,
      data,
      requestId,
    });
  } catch (error) {
    const appError = toAppError(error, {
      code: ERROR_CODES.INTERNAL_ERROR,
      message: "Failed to fetch data",
      status: 500,
    });

    trackException({
      context,
      requestId,
      error: appError,
      tags: {
        code: appError.code,
        status: appError.status,
      },
    });

    return NextResponse.json(
      {
        success: false,
        error: {
          code: appError.code,
          message: appError.message,
          details: appError.details,
        },
        requestId,
      },
      { status: appError.status }
    );
  }
}
