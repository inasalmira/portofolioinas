// app/login/page.jsx

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      {/* Login Card */}
      <div className="w-[300px] bg-white rounded-[20px] shadow-xl px-4 py-6">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-blue-700 overflow-hidden">
            <Image
              src="/pt.gnng.jpeg"
              alt="avatar"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-3">
          <h1 className="text-lg font-bold text-blue-950">
            LOGIN
          </h1>

          <p className="text-gray-500 text-[10px] mt-1">
            WELCOME
          </p>
        </div>

        {/* Form */}
        <form className="mt-4 space-y-3">

          {/* Username */}
          <input
            type="email"
            placeholder="email"
            className="w-full h-8 px-3 rounded-full bg-gray-100 border border-gray-200 text-[10px] outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="PASSWORD"
            className="w-full h-8 px-3 rounded-full bg-gray-100 border border-gray-200 text-[10px] outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Remember */}
          <div className="flex justify-between items-center text-[9px]">

            <label className="flex items-center gap-1 text-gray-600">
              <input type="checkbox" className="w-3 h-3" />
              Remember
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-8 rounded-full border border-blue-700 text-blue-700 text-[11px] font-bold hover:bg-blue-700 hover:text-white transition"
          >
            LOGIN
          </button>

          {/* Create */}
          <Link href="/register" className="hover:text-gray-300">
            <p className="text-center text-gray-500 text-[9px] hover:text-blue-600 cursor-pointer">
              Create Account
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}