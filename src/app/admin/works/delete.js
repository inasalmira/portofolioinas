"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm("Yakin ingin menghapus data ini?")) {
          e.preventDefault();
        }
      }}
    >
      hapus
    </button>
  );
}