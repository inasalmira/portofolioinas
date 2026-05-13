"use server";

import { kategoris, blogs } from "../../../db/schema";
import db from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";

export async function getAllblogs() {
  const data = await db
    .select({
      ...blogs,
      kategori: kategoris.nama,
    })
    .from(blogs)
    .innerJoin(kategoris, eq(blogs.kategori_id, kategoris.id));
  return data;
}

export async function deleteblogs(data) {
  const id = data.get("id");
  await db.delete(blogs).where(eq(blogs.id, id));

  redirect("/admin/blog");
}

export async function createblogs(data) {
  const judul = data.get("judul");
  const isi = data.get("isi");
  const kategori_id = data.get("kategori_id");
  const file = data.get("gambar");

  let filePath = null;

  // Proses upload gambar
  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Membuat nama file unik
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;

    // Menentukan lokasi penyimpanan
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const fullPath = path.join(uploadDir, fileName);

    // Simpan file
    await fs.writeFile(fullPath, buffer);

    // Path yang disimpan ke database
    filePath = `/uploads/${fileName}`;
  }

  await db.insert(blogs).values({
    judul: judul,
    gambar: filePath ,
    isi: isi,
    kategori_id: kategori_id,
  });

  redirect("/admin/blog");
}

export async function showblogs(id) {
    const data = await db.select({
      ...blogs,
      kategori: kategoris.nama,
    }).from(blogs).where(eq(blogs.id, id)).limit(1).innerJoin(kategoris, eq(blogs.kategori_id, kategoris.id));
    return data[0]

}

export async function updateblogs(formData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul");
  const isi = formData.get("isi");
  const kategori_id = Number(formData.get("kategori_id"));
  const file = formData.get("gambar");

  // Ambil data lama dari database
  const existingData = await db
    .select()
    .from(blogs)
    .where(eq(blogs.id, id))
    .limit(1);

  const oldImage = existingData[0]?.gambar;
  let filePath = oldImage; // Gunakan gambar lama sebagai default

  // Jika ada gambar baru diunggah
  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Nama file unik
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;

    // Direktori upload
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const fullPath = path.join(uploadDir, fileName);

    // Simpan gambar baru
    await fs.writeFile(fullPath, buffer);
    filePath = `/uploads/${fileName}`;

    // Hapus gambar lama jika ada
    if (oldImage) {
      const oldImagePath = path.join(
        process.cwd(),
        "public",
        oldImage.replace(/^\/+/, "")
      );

      try {
        await fs.unlink(oldImagePath);
      } catch (error) {
        console.warn("Gagal menghapus gambar lama:", error.message);
      }
    }
  }

  // Update data di database
  await db
    .update(blogs)
    .set({
      judul: String(judul),
      isi: String(isi),
      kategori_id: kategori_id,
      gambar: filePath,
    })
    .where(eq(blogs.id, id));

  redirect("/admin/works");
}
