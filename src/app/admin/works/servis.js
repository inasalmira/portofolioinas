"use server";

import { kategoris, works } from "../../../db/schema";
import { getDb } from "../../../db/index";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../lib/cloudinary";

export async function getAllworks() {
  const data = await getDb()
    .select({
      ...works,
      kategori: kategoris.nama,
    })
    .from(works)
    .innerJoin(kategoris, eq(works.kategori_id, kategoris.id));
  return data;
}

export async function deleteWorks(data) {
  const id = data.get("id");
  
  // Get image URL before deleting
  const existingData = await getDb()
    .select()
    .from(works)
    .where(eq(works.id, id))
    .limit(1);

  const imageUrl = existingData[0]?.gambar;

  await getDb().delete(works).where(eq(works.id, id));

  // Delete from Cloudinary if image exists
  if (imageUrl) {
    await deleteFromCloudinary(imageUrl);
  }

  redirect("/admin/works");
}

export async function createWorks(data) {
  const judul = data.get("judul");
  const isi = data.get("isi");
  const kategori_id = data.get("kategori_id");
  const file = data.get("gambar");

  let filePath = null;

  // Upload gambar ke Cloudinary
  if (file && file.size > 0) {
    filePath = await uploadToCloudinary(file);
  }

  await getDb().insert(works).values({
    judul: judul,
    gambar: filePath ,
    isi: isi,
    kategori_id: kategori_id,
  });

  redirect("/admin/works");
}

export async function showWorks(id) {
    const data = await getDb().select({
      ...works,
      kategori: kategoris.nama,
    }).from(works).where(eq(works.id, id)).limit(1).innerJoin(kategoris, eq(works.kategori_id, kategoris.id));
    return data[0]

}

export async function updateWorks(formData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul");
  const isi = formData.get("isi");
  const kategori_id = Number(formData.get("kategori_id"));
  const file = formData.get("gambar");

  // Ambil data lama dari database
  const existingData = await getDb()
    .select()
    .from(works)
    .where(eq(works.id, id))
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
    .update(works)
    .set({
      judul: String(judul),
      isi: String(isi),
      kategori_id: kategori_id,
      gambar: filePath,
    })
    .where(eq(works.id, id));

  redirect("/admin/works");
}
