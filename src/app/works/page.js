import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div>
          <h1 className="font-bold text-3xl mb-6">Works</h1>
          <Link href="/works/detail">
            <div className="flex gap-9">
              <div className="w-[200px] h-[200px] relative overflow-hidden">
                <Image
                  src="/inas_cantik.jpeg"
                  alt="gambar saya"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="max-w-md flex flex-col gap-3">
                  <h2 className="font-bold text-3xl">siaka</h2>
                  <div className="flex">
                    <button className="bg-black text-white rounded-full px-4 py-2 w-[100px] h-[25px]">
                      2025
                    </button>

                    <button className=" text-gray-400 rounded-full px-4 py-2 w-[100px] h-[25px]">
                      dashboard
                    </button>
                  </div>
                  <p>
                    sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew
                    iejflkehfje uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr
                    urhgwiuguyrw ins
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <br></br>

          <Link href="/works/detail">
            <div className="flex gap-9">
              <div className="w-[200px] h-[200px] relative overflow-hidden">
                <Image
                  src="/inas_cantik.jpeg"
                  alt="gambar saya"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="max-w-md flex flex-col gap-3">
                  <h2 className="font-bold text-3xl">siaka</h2>
                  <div className="flex">
                    <button className="bg-black text-white rounded-full px-4 py-2 w-[100px] h-[25px]">
                      2025
                    </button>

                    <button className=" text-gray-400 rounded-full px-4 py-2 w-[100px] h-[25px]">
                      dashboard
                    </button>
                  </div>
                  <p>
                    sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew
                    iejflkehfje uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr
                    urhgwiuguyrw ins
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <br></br>

          <Link href="/works/detail">
            <div className="flex gap-9">
              <div className="w-[200px] h-[200px] relative overflow-hidden">
                <Image
                  src="/inas_cantik.jpeg"
                  alt="gambar saya"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="max-w-md flex flex-col gap-3">
                  <h2 className="font-bold text-3xl">siaka</h2>
                  <div className="flex">
                    <button className="bg-black text-white rounded-full px-4 py-2 w-[100px] h-[25px]">
                      2025
                    </button>

                    <button className=" text-gray-400 rounded-full px-4 py-2 w-[100px] h-[25px]">
                      dashboard
                    </button>
                  </div>
                  <p>
                    sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew
                    iejflkehfje uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr
                    urhgwiuguyrw ins
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
