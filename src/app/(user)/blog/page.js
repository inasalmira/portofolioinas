import { getAllblogs } from "../../admin/blog/servis";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
    const data = await getAllblogs();
  
  return (
    <div className="flex flex-row gap-10 justify-center items-center">
        {data.map((row, index) => ( 
      <Link href={`/blog/${row.id}`}key={index}>
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center gap-10">
        <div className="bg-blue-300 max-w-3xl" style={{padding: 40}}>
          <h1 className="font-bold text-3xl mb-6">{row.judul}</h1>
          <br></br>

          <div className="flex gap-9">
            <div>
              <div className="max-w-md flex flex-col gap-3">
                <div className="gap-3 flex">
                   <button className=" text-black-400 rounded-full py-2  ">
                     {new Date(row.created_at).toLocaleDateString("id-ID")}
                  </button>

                  <button className=" text-black-400 rounded-full py-2">
                    {row.kategori}
                  </button>

                </div>

                <p>
                  {row.isi}
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </Link>
      ))}
    </div>
  );
}
