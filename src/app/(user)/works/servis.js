"use server"

import { comments } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export async function komentar(data) {
    const komentar = data.get("komentar");
    const work_id = data.get("work_id");

    const cookieStore = await cookies();
    const userSession = cookieStore.get("user_session")?.value;

    if (!userSession) {
        redirect('/login');
    }

    await getDb().insert(comments).values({
        komentar: komentar,
        work_id: work_id ? Number(work_id) : null,
        blog_id: null,
        user_id: Number(userSession)
    });

    redirect(`/works/${work_id}`);
}

export async function listkomentar(id) {
    const data = await getDb().select().from(comments).where(eq(comments.work_id, id ));
    return data
}