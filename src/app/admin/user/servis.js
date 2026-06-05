"use server"


import { users } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export async function getAllUser() {
    const data = await getDb().select().from(users)
    return data  

}

export async function deleteUser(data) {
    const id = data.get("id");
    await getDb().delete(users).where(eq(users.id, id))
    
    redirect("/admin/user")
}

export async function createUser(data) {
    const nama = data.get("nama");
    const email = data.get("email");
    const password = data.get("password");
    const role = data.get("role");
    await getDb().insert(users).values({ 
        nama: nama , email: email , password: password , role: role 
    })

    redirect("/admin/user")
    
}

export async function showUser(id) {
    const data = await getDb().select().from(users).where(eq(users.id, id)).limit(1)
    return data[0]

}

export async function updateUser(data) {
    const id = data.get("id");
    const nama = data.get("nama");
    const email = data.get("email");
    const password = data.get("password");
    const role = data.get("role");
    await getDb().update(users).set({
        nama: nama , email: email , password: password , role: role 
    }) .where(eq(users.id, id));

    redirect("/admin/user")
    
}


