import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://zeqefyxwhznqiyfgjmrn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplcWVmeXh3aHpucWl5ZmdqbXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjYwNTcsImV4cCI6MjA2MzMwMjA1N30.ktk-5EzJBa7W2zq5ALoYMDrRHrx0wScyiu874g0czaw";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Check current session
export async function checkSession() {
    const {
        data: { session }
    } = await supabase.auth.getSession();

    return session;
}

// Sign up new users
export async function signUp(email, password) {

    email = email.trim().toLowerCase();

    if (!email.endsWith("@vvit.net")) {
        return {
            data: null,
            error: {
                message: "Only @vvit.net email addresses are allowed."
            }
        };
    }

    return await supabase.auth.signUp({
        email,
        password
    });
}

// Sign in existing users
export async function signIn(email, password) {

    email = email.trim().toLowerCase();

    if (!email.endsWith("@vvit.net")) {
        return {
            data: null,
            error: {
                message: "Only @vvit.net email addresses are allowed."
            }
        };
    }

    return await supabase.auth.signInWithPassword({
        email,
        password
    });
}

// Sign out users
export async function signOut() {
    return await supabase.auth.signOut();
}