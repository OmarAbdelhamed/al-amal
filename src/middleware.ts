import { NextResponse, type NextRequest } from "next/server";

const LANGS = ["en", "ar"];

/** Every page lives under /en or /ar. Bare paths are redirected to the visitor's
 *  saved language (cookie), else their browser language, else English. */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const first = pathname.split("/")[1];
  if (LANGS.includes(first)) return NextResponse.next();

  const saved = req.cookies.get("lang")?.value;
  const accept = req.headers.get("accept-language") ?? "";
  const lang = saved && LANGS.includes(saved) ? saved : /^ar\b|,\s*ar\b/i.test(accept) ? "ar" : "en";

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals and static files
  matcher: ["/((?!_next|api|favicon.ico|.*\\.[a-zA-Z0-9]+$).*)"]
};
