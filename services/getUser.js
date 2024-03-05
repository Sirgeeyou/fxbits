import supabase, { supabaseClient } from "../lib/supabase.ts";

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getSession();
  console.log(user);
}
