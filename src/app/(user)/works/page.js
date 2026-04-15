import { getAllworks } from "../../admin/works/servis";
import Image from "next/image";
import Link from "next/link";

export default async function Works() {
  const data = await getAllworks();
  return (
    <div>
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div>
          <h1 className="font-bold text-3xl mb-6">Works</h1>
          {data.map((row, index) => (
              
            <Link href={`/works/${row.id}`}key={index}>
              <div className="flex gap-9 my-5">
                <div className="w-[200px] h-[200px] relative overflow-hidden">
                  <Image
                    src={row.gambar}
                    alt="gambar saya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="max-w-md flex flex-col gap-3">
                    <h2 className="font-bold text-3xl">{row.judul}</h2>
                    <div className="flex">
                      <button className="bg-black text-white rounded-full px-4 w-[100px] h-[25px]" suppressHydrationWarning>
                        {new Date(row.created_at).toLocaleDateString("id-ID")}
                      </button>

                      <button className=" text-gray-400 rounded-full px-4 py-2 w-[100px] h-[25px]">
                        {row.kategori}
                      </button>
                    </div>
                    <p>
                      {row.isi}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          

        </div>
      </div>
    </div>
  );
}
