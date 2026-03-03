import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{padding: 60}}>
        <h1 className="font-bold text-3xl mb-6" style={{marginBottom: 20}}>Inas Almira Khalilah</h1>
      <div className="max-w-md flex flex-col gap-3">
        <div className="gap-3 flex">
          <button className="bg-gray-500 text-black rounded-full px-4 py-2 w-[100px] h-[25px]">
            2026
          </button>
          <button className=" text-gray-400 rounded-full py-2">
            dashboard
          </button>

          <button className=" text-gray-400 rounded-full py-2">user</button>
        </div>

        <p  style={{marginBottom: 100}}>
          sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew iejflkehfje
          uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr urhgwiuguyrw ins
        </p>
      </div>
      <div className="w-full h-[500px] relative overflow-hidden ">
        <Image
          src="/inas_cantik.jpeg"   
          alt="gambar saya"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
