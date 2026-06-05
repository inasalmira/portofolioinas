import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file) {
  try {
    if (!file || file.size === 0) {
      return null;
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "portofolio/uploads",
          public_id: `${Date.now()}-${file.name.replace(/\s+/g, "_").replace(/\.[^.]*$/, "")}`,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.secure_url);
          }
        }
      );

      uploadStream.end(buffer);
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}

export async function deleteFromCloudinary(imageUrl) {
  try {
    if (!imageUrl) {
      return;
    }

    // Extract public_id dari URL Cloudinary
    const urlParts = imageUrl.split("/");
    const fileName = urlParts[urlParts.length - 1].split(".")[0];
    const publicId = `portofolio/uploads/${fileName}`;

    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.warn("Error deleting from Cloudinary:", error.message);
  }
}
