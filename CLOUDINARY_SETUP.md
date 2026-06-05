# Cloudinary Integration Guide

## ✅ Perubahan yang Telah Dilakukan

Saya telah mengintegrasikan **Cloudinary** untuk penyimpanan gambar menggantikan penyimpanan lokal di folder `public/uploads`. Berikut file-file yang telah diupdate:

### 1. **File Utility Baru**
- `src/lib/cloudinary.js` - Fungsi helper untuk upload dan delete di Cloudinary

### 2. **File Admin yang Diupdate**
- `src/app/admin/works/servis.js`
  - `createWorks()` - Upload ke Cloudinary saat membuat
  - `updateWorks()` - Upload ke Cloudinary saat update, hapus gambar lama
  - `deleteWorks()` - Hapus gambar dari Cloudinary saat delete
  
- `src/app/admin/blog/servis.js`
  - `createblogs()` - Upload ke Cloudinary saat membuat
  - `updateblogs()` - Upload ke Cloudinary saat update, hapus gambar lama
  - `deleteblogs()` - Hapus gambar dari Cloudinary saat delete

### 3. **File User Pages (Tidak Perlu Diubah)**
- `src/app/(user)/works/page.js` - Otomatis menampilkan URL Cloudinary
- `src/app/(user)/blog/page.js` - Otomatis menampilkan URL Cloudinary

## 🔧 Setup Cloudinary

### Langkah 1: Buat Akun Cloudinary
1. Kunjungi [cloudinary.com](https://cloudinary.com)
2. Sign up untuk akun gratis
3. Pergi ke [Cloudinary Console](https://cloudinary.com/console)

### Langkah 2: Dapatkan Credentials
Di dashboard Cloudinary, Anda akan melihat:
- **Cloud Name** (bersifat publik)
- **API Key** (jaga kerahasiaan)
- **API Secret** (jaga kerahasiaan)

### Langkah 3: Setup Environment Variables
1. Copy `.env.local.example` menjadi `.env.local`
2. Isi dengan credentials Anda:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### Langkah 4: Restart Development Server
```bash
npm run dev
```

## 📝 Fitur yang Diimplementasikan

✅ **Upload Gambar** - Gambar di-upload ke Cloudinary dengan folder `portofolio/uploads`
✅ **Update Gambar** - Gambar lama otomatis dihapus dari Cloudinary saat di-update
✅ **Delete Gambar** - Gambar otomatis dihapus dari Cloudinary saat dihapus record
✅ **URL Cloudinary** - Database menyimpan URL Cloudinary (bukan path lokal)
✅ **CDN Benefits** - Gambar disajikan melalui CDN global Cloudinary

## 🔍 Perubahan Database

Nilai kolom `gambar` di database sebelumnya:
```
/uploads/1234567890-file.jpg
```

Sekarang menjadi (contoh):
```
https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/portofolio/uploads/1234567890-file.jpg
```

## 🚀 Testing

1. Buka admin dashboard `/admin/works` atau `/admin/blog`
2. Coba **Tambah** (Add) gambar baru
3. Coba **Edit** dengan gambar baru
4. Coba **Delete** 
5. Verifikasi di dashboard Cloudinary bahwa file ada

## ❌ Troubleshooting

### "Error uploading to Cloudinary"
- Pastikan `.env.local` sudah benar
- Cek credentials di Cloudinary Console
- Restart development server

### Gambar tidak muncul
- Cek Network tab di browser DevTools
- Pastikan URL Cloudinary accessible
- Verifikasi credentials

### Gambar duplikat di Cloudinary
- Cek apakah `public_id` sudah unique
- Update kode jika diperlukan

## 📚 Dependencies Baru

- `cloudinary` - SDK untuk server-side uploads
- `next-cloudinary` - Already installed (untuk future client-side usage)

## 🎯 Next Steps (Opsional)

Untuk peningkatan lebih lanjut:

1. **Client-side Upload Widget** - Gunakan Cloudinary Upload Widget untuk UX lebih baik
2. **Image Transformation** - Resize/optimize gambar otomatis
3. **Signed Uploads** - Secure upload dengan signature
4. **Video Support** - Dukungan untuk video files

---

**Catatan:** Semua gambar lama di `public/uploads` masih ada secara lokal tapi tidak lagi digunakan. Anda bisa menghapus folder tersebut jika sudah memastikan semua data sudah dimigrasikan ke Cloudinary.
