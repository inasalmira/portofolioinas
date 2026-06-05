"use server";

import { kategoris, blogs } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../lib/cloudinary";

export async function getAllblogs() {
  const data = await getDb()
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
  
  // Get image URL before deleting
  const existingData = await getDb()
    .select()
    .from(blogs)
    .where(eq(blogs.id, id))
    .limit(1);

  const imageUrl = existingData[0]?.gambar;

  await getDb().delete(blogs).where(eq(blogs.id, id));

  // Delete from Cloudinary if image exists
  if (imageUrl) {
    await deleteFromCloudinary(imageUrl);
  }

  redirect("/admin/blog");
}

export async function createblogs(data) {
  const judul = data.get("judul");
  const isi = data.get("isi");
  const kategori_id = data.get("kategori_id");
  const file = data.get("gambar");

  let filePath = null;

  // Upload gambar ke Cloudinary
  if (file && file.size > 0) {
    filePath = await uploadToCloudinary(file);
  }

  await getDb().insert(blogs).values({
    judul: judul,
    gambar: filePath ,
    isi: isi,
    kategori_id: kategori_id,
  });

  redirect("/admin/blog");
}

export async function showblogs(id) {
    const data = await getDb().select({
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
  const existingData = await getDb()
    .select()
    .from(blogs)
    .where(eq(blogs.id, id))
    .limit(1);

  const oldImage = existingData[0]?.gambar;
  let filePath = oldImage; // Gunakan gambar lama sebagai default

  // Jika ada gambar baru diunggah
  if (file && file.size > 0) {
    filePath = await uploadToCloudinary(file);

    // Hapus gambar lama dari Cloudinary jika ada
    if (oldImage) {
      await deleteFromCloudinary(oldImage);
    }
  }

  // Update data di database
  await getDb()
    .update(blogs)
    .set({
      judul: String(judul),
      isi: String(isi),
      kategori_id: kategori_id,
      gambar: filePath,
    })
    .where(eq(blogs.id, id));

  redirect("/admin/blog");
}
