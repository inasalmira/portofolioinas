import { showWorks } from "../../../admin/works/servis";
import Image from "next/image";
import Link from "next/link";
import { komentar, listkomentar } from "../servis";

export default async function DetailWorks({ params }) {
  const { id } = await params;
  const data = await showWorks(id);

  const daftarKomentarStatis = [
  {
    id: 1,
    nama: "Alex Jones",
    created_at: "2026-06-01",
    isi: "Desainnya keren banget! Detail pengerjaannya sangat rapi dan estetik."
  },
  {
    id: 2,
    nama: "Siti Rahma",
    created_at: "2026-05-28",
    isi: "Suka sekali dengan kombinasi warna yang digunakan di project ini. Menginspirasi!"
  }
];

  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Data tidak ditemukan {id}</h1>
      </div>
    );
  }
   const datakomentar = await listkomentar(id)

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

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* ================= SEKSI KOMENTAR STATIS ================= */}
      <div className="max-w-2xl justify-self-center">
        <form action={komentar}>

        <div className="bg-[#e8f0fe] rounded-[24px] p-6 mb-10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Rate your experience</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            We highly value your feedback! Kindly take a moment to provide us with your valuable feedback.
          </p>

          <div className="flex flex-col items-center gap-4">

            <textarea
              placeholder="Tell us about your experience!"
              rows={4}
              name="komentar"
              className="w-full rounded-[20px] p-4 bg-[#f0f4ff] border border-gray-200/50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] resize-none"
            />
             <input defaultValue={id} name="work_id" hidden/>

            <button
              type="submit"
              className="bg-[#fbc02d] hover:bg-[#f9a825] text-gray-900 font-semibold px-8 py-2.5 rounded-full shadow-sm transition-transform active:scale-95 text-sm"
            >
              Send
            </button>
          </div>
        </div>
        </form>
        
        {/* 1. Form Tambah Komentar (Gaya mirip image_a1f8c5.jpg) */}

        {/* 2. Tampilan Daftar Komentar */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800">
            Comments ({datakomentar.length})
          </h3>

          <div className="space-y-4">
            {datakomentar.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-[16px] p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-gray-700">{item.komentar}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleDateString("id-ID")}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.isi}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
       <br></br>
        <br></br>
         <br></br>
    </div>
  );
}
