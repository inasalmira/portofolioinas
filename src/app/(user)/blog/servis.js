"use server"

import { comments } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export async function komentar(data) {
    const komentar = data.get("komentar");
    const blog_id = data.get("blog_id");

    const cookieStore = await cookies();
    const userSession = cookieStore.get("user_session")?.value;

    if (!userSession) {
        redirect('/login');
    }

    await getDb().insert(comments).values({
        komentar: komentar,
        blog_id: blog_id ? Number(blog_id) : null,
        work_id: null,
        user_id: Number(userSession)
    });

    redirect(`/blog/${blog_id}`);
}

export async function listkomentar(id) {
    const data = await getDb().select().from(comments).where(eq(comments.blog_id, id ));
    return data
}
