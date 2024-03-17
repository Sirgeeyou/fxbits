import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const cookieStore = cookies();

    // Parse JSON data directly without logging the raw request body
    const { email, password } = await req.json();

    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
    });

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      },
    });

    if (error) throw new Error("An error has occured", error);

    return NextResponse.redirect(url.origin, {
      status: 301,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
