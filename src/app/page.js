import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-blue-500 h-16 flex items-center text-white">
        <div className="container flex justify-end gap-6 ">
          <Link href="/">Works</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>

     <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-md flex flex-col gap-9">
          <h1 className="font-bold text-3xl">Halo saya Inas</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-red-500 text-black px-4 py-2 w-[100px] h-[25px]">
            Klik Saya
          </button>
        </div>

        <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden">
          <Image
            src="/inas_cantik.jpeg"
            alt="gambar saya"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
