
import { kategoris } from "../../../db/schema";
import db from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export async function getAllKategoris() {
    const data = await db.select().from(kategoris)
    return data  

}