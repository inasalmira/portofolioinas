"use server"


import { users } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";


export async function register(data) {
    const nama = data.get("nama");
    const email = data.get("email");
    const password = data.get("password");
    const role = "user"
    await getDb().insert(users).values({
        nama: nama , email: email , password: password , role: role 
    })

    redirect("/login")
    
}