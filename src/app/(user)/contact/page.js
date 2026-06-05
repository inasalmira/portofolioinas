import { Mail, Phone } from "lucide-react";

export default async function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f9f9f8] p-4">
            {/* Card Utama */}
            <div className="w-full max-w-sm bg-blue-300 rounded-[32px] p-4 shadow-sm font-sans">

                {/* Header Hitam */}
                <div className="relative bg-[#111612] text-white rounded-[24px] py-8 px-4 text-center mb-6 overflow-hidden">

                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#ccff00]"></div>
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#ccff00]"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#ccff00]"></div>
                    <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#ccff00]"></div>

                    {/* Teks Header */}
                    <h2 className="text-sm font-medium text-gray-200 mb-1">Call Me Whenever you Want!</h2>
                   
                </div>

                {/* List Kontak */}
                <div className="space-y-4 px-2 pb-4">

                    <a
                        href="mailto:inasalmira69@gmail.com"
                        className="flex items-center space-x-4 group transition-transform duration-200 active:scale-95"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111612] text-[#ccff00] group-hover:opacity-90 transition-opacity">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black group-hover:underline">
                           inasalmira69@gmail.com
                        </span>
                    </a>

                    <a
                        href="https://wa.me/6282191870221"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group transition-transform duration-200 active:scale-95"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111612] text-[#ccff00] group-hover:opacity-90 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black group-hover:underline">
                           +6282191870221
                        </span>
                    </a>

                    <a
                        href="https://instagram.com/inasalmira_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group transition-transform duration-200 active:scale-95"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111612] text-[#ccff00] group-hover:opacity-90 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black group-hover:underline">
                            @inasalmira_
                        </span>
                    </a>


                    <a
                        href="https://youtube.com/@cemen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group transition-transform duration-200 active:scale-95"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111612] text-[#ccff00] group-hover:opacity-90 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black group-hover:underline">
                            @cemen
                        </span>
                    </a>

                </div>
            </div>
        </div>
    );
}