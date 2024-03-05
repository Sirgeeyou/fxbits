import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log(req.nextUrl.pathname);

  if (!session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  // console.log(session);
  return res;
}

export const config = {
  matchers: [
    {
      path: ["/((?!_next/static|_next/image|favicon.ico|^/$).*)"],
      handler: middleware,
    },
    {
      path: "/profile",
      handler: middleware,
    },
  ],
};
