import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data, error } = await supabase.auth.getSession();

  const { session } = data;

  if (!session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  if (error) {
    throw new Error("An error has occured", error);
  }

  return res;
}

export const config = {
  matcher: ["/profile", "/addlisting"],
};
