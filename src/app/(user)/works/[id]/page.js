import { showWorks } from "../../../admin/works/servis";
import Image from "next/image";
import Link from "next/link";

export default async function DetailWorks({ params }) {
  const { id } = await params;
  const data = await showWorks(id);

  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Data tidak ditemukan {id}</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: 60 }}>
      <h1 className="font-bold text-3xl mb-6">{data.judul}</h1>

      <div className="max-w-md flex flex-col gap-3">
        <div className="gap-3 flex items-center">
          <button className="bg-gray-500 text-white rounded-full px-4 py-1 text-sm">
            {new Date(data.created_at).toLocaleDateString("id-ID")}
          </button>

          <button className="text-gray-500">{data.kategori}</button>
        </div>

        <p className="mb-10">{data.isi}</p>
      </div>

      <div className="relative overflow-hidden rounded-lg" style={{width:600,height:1000}}>
        {data.gambar ? (
          <Image
            src={data.gambar}
            alt={data.judul}
            fill
            className="object-cover"
          />
        ) : (
          <p className="text-gray-500">Gambar tidak tersedia</p>
        )}
      </div>
    </div>
  );
}
