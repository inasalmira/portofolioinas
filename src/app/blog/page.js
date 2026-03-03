import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
     
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center gap-10">
        <div className="bg-blue-300 max-w-3xl" style={{padding: 40}}>
          <h1 className="font-bold text-3xl mb-6">Inas Almira Khalilah</h1>
          <br></br>

          <div className="flex gap-9">
            <div>
              <div className="max-w-md flex flex-col gap-3">
                <div className="gap-3 flex">
                   <button className=" text-gray-400 rounded-full py-2  ">
                    06 maret 2007
                  </button>

                  <button className=" text-gray-400 rounded-full py-2">
                    dashboard
                  </button>

                </div>

                <p>
                  sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew iejflkehfje
                  uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr urhgwiuguyrw ins
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 max-w-3xl" style={{padding: 40}}>
          <h1 className="font-bold text-3xl mb-6">Inas Almira Khalilah</h1>
          <br></br>

          <div className="flex gap-9">
            <div>
              <div className="max-w-md flex flex-col gap-3">
                <div className="gap-3 flex">
                   <button className=" text-gray-400 rounded-full py-2  ">
                    06 maret 2007
                  </button>

                  <button className=" text-gray-400 rounded-full py-2">
                    dashboard
                  </button>

                </div>

                <p>
                  sjdjshadgh uhefuhrfiwej ihdjehfjewhd iehfiewhfjew iejflkehfje
                  uehdfuiwehfhe uuehfjewhfjweah jewhfjhfihr urhgwiuguyrw ins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
