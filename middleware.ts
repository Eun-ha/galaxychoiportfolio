import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|favicon\\.ico$).*)",
  ],
};

const SUPPORTED_LOCALES = ["ko", "en"];

// ❗ 로케일 처리만 별도로 export
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const hasLocalePrefix = SUPPORTED_LOCALES.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  const acceptLang = request.headers.get("accept-language") || "ko";
  const detectedLocale = acceptLang.split(",")[0].split("-")[0];
  const locale = SUPPORTED_LOCALES.includes(detectedLocale)
    ? detectedLocale
    : "ko";

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
