// auth.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// replace these with your Supabase project values
const SUPABASE_URL = "https://zeqefyxwhznqiyfgjmrn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplcWVmeXh3aHpucWl5ZmdqbXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjYwNTcsImV4cCI6MjA2MzMwMjA1N30.ktk-5EzJBa7W2zq5ALoYMDrRHrx0wScyiu874g0czaw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Check if user already logged in
export async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// ✅ Sign up new users
export async function signUp(email, password) {
  return await supabase.auth.signUp({ email, password });
}

// ✅ Login users
export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// ✅ Logout
export async function signOut() {
  return await supabase.auth.signOut();
}
