import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
     <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-md flex flex-col gap-9">
          <h1 className="font-bold text-3xl">Halo Saya INAS ALMIRA KHALILAH</h1>
          <p>
            saya alumni MAN Enrekang dan sekarang saya melanjutkan 
            pendidikan di Universitas DIPA Makassar saya mengambil 
            prodi Sistem Infomasi.
          </p>
          <button className="font-bold bg-red-500 text-black rounded-full px-4 w-[100px] h-[25px]">
            Klik Saya
          </button>
        </div>

        <div className="w-[200px] h-[200px] relative rounded-lg overflow-hidden">
          <Image
            src="/pt.gnng.jpeg"
            alt="gambar saya"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
