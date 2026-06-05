# Cloudinary Setup Guide

## 🎯 Mengapa Cloudinary?

✅ **Advantages:**
- ✅ No local volume needed
- ✅ Images persist automatically
- ✅ Auto-optimize images
- ✅ CDN delivery (faster)
- ✅ Unlimited storage (free plan)
- ✅ Works lokal dan production

❌ **No need untuk:**
- Setup Railway volume
- Local file management
- Worry about storage

---

## 📋 Step-by-Step Setup

### Step 1: Daftar Cloudinary

1. Pergi ke https://cloudinary.com
2. Klik **"Sign Up for free"**
3. Fill form:
   - Email: your email
   - Password: choose password
   - First/Last Name: optional
4. Klik **"Create account"**
5. Verify email (check inbox)

### Step 2: Get API Credentials

Setelah login:

1. Pergi ke **Dashboard** (https://cloudinary.com/console/dashboard)
2. Lihat section di bagian atas "Account Details"
3. Salin nilai-nilai ini:
   ```
   Cloud Name: __________________
   API Key: __________________
   API Secret: __________________
   ```

**JANGAN SHARE API SECRET ke public!** (Keep it secret)

### Step 3: Setup di Local Development

1. **Buka `.env` file** di project
2. **Update values:**
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
3. **Save file**
4. **Restart dev server:**
   ```bash
   npm run dev
   ```

### Step 4: Setup di Railway Production

1. **Railway Dashboard** → Project → portofolioinas service
2. **Klik tab "Variables"**
3. **Add 3 variables baru:**
   ```
   CLOUDINARY_CLOUD_NAME = your_cloud_name
   CLOUDINARY_API_KEY = your_api_key
   CLOUDINARY_API_SECRET = your_api_secret
   ```
4. **Deploy:**
   ```bash
   git add .
   git commit -m "Setup: Add Cloudinary integration for image uploads"
   git push
   ```

---

## ✅ Testing

### Test Local:
```bash
1. npm run dev
2. Pergi ke admin panel (http://localhost:3000/admin)
3. Upload gambar di Blog atau Works
4. Check gambar muncul
```

### Test Production (Railway):
```bash
1. Upload gambar di https://your-app.railway.app/admin
2. Check gambar muncul di /blog atau /works
3. Redeploy project
4. Gambar MASIH ada? ✅ SUKSES!
```

---

## 🔍 Troubleshooting

### Problem: "CLOUDINARY_CLOUD_NAME is required"

**Solution:**
- Check `.env` file semua credentials filled
- Restart dev server
- Check Railway Variables semua ada

### Problem: Gambar tidak upload tapi tidak ada error

**Solution:**
- Check Cloudinary API credentials correct
- Check .env variables properly formatted
- Check Rails logs via Railway Console

### Problem: "Invalid Cloudinary URL"

**Solution:**
- Double-check Cloud Name spelled correctly
- No typo di credentials
- Regenerate API Key di Cloudinary dashboard

---

## 🎓 Cloudinary Free Plan Includes:

- ✅ 25 GB storage
- ✅ 25 GB bandwidth
- ✅ Auto image optimization
- ✅ 4 million transformations/month
- ✅ Full API access

**Perfect untuk portfolio!** 🎉

---

## 📚 Reference

- Cloudinary Docs: https://cloudinary.com/documentation
- Node.js SDK: https://cloudinary.com/documentation/node_integration
- API Reference: https://cloudinary.com/documentation/image_upload_api_reference

---

## ✨ All Set!

Sekarang project Anda:
- ✅ Upload gambar ke Cloudinary (cloud storage)
- ✅ Gambar persist di production
- ✅ No volume setup needed
- ✅ Auto-optimized images
- ✅ CDN delivery for speed

Happy uploading! 🚀
