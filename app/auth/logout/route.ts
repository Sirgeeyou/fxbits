import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Reached logout route");
  const url = new URL(req.url);
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { error } = await supabase.auth.signOut();
  if (error) console.log("LOGOUT ERROR", error);
  console.log("LOGOUT SUCCESSSFULL");
  return NextResponse.redirect(url.origin, {
    status: 301,
  });
}
