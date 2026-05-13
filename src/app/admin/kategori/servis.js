"use server"


import { kategoris} from "../../../db/schema";
import db from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export async function getAllKategoris() {
    const data = await db.select().from(kategoris)
    return data  

}

export async function deletekategori(data) {
    const id = data.get("id");
    await db.delete(kategoris).where(eq(kategoris.id, id))
    
     redirect("/admin/kategori")
}

export async function createkategori(data) {
    const nama = data.get("nama");
    const deskrifsi = data.get("deskripsi");
    await db.insert(kategoris).values({
        nama: nama , deskripsi : deskrifsi  
    })

    redirect("/admin/kategori")
    
}

export async function showkategori(id) {
    const data = await db.select().from(kategoris).where(eq(kategoris.id, id)).limit(1)
    return data[0]

}

export async function updatekategori(data) {
    const id = data.get("id");
    const nama = data.get("nama");
    const deskripsi = data.get("deskripsi");
    await db.update(kategoris).set({
        nama: nama , deskripsi: deskripsi 
    }) .where(eq(kategoris.id, id));

    redirect("/admin/kategori")
    
}