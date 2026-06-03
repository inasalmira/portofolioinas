"use server"

import { users } from "../../../db/schema";
import db from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(data) {
    const email = data.get("email"); 
    const password = data.get("password");
    
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (result.length > 0) {
        const user = result[0];
        if (user.password === password) {
            const cookieStore = await cookies();
            cookieStore.set("user_session", user.id, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24
            });
            if(user.role==="admin"){
                redirect('/admin')
            }
            redirect('/');
        }
        redirect('/login');
    }
    
    redirect('/login');
}
export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("user_session");
    redirect('/login');
}