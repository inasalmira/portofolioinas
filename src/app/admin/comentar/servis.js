"use server"


import { blogs, comments, users } from "../../../db/schema";
import db from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export async function getAllcomments() {
    const data = await db.select(
        {
            ...comments,
            user: users.nama,
            konten: blogs.judul
        }
    ).from(comments)
        .innerJoin(users, eq(comments.user_id, users.id))
        .innerJoin(blogs, eq(comments.blog_id, blogs.id))
    return data;
}