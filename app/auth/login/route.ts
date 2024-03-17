import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const cookieStore = cookies();

    // Parse JSON data
    const { email, password } = await req.json();

    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
    });

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 500 }
      );
    }

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
