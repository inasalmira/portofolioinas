
import { NextResponse } from 'next/server';

export function middleware(request) {

  const session = request.cookies.get('user_session')?.value;
  const role = request.cookies.get('user_role')?.value;
  const { pathname } = request.nextUrl;


  if (pathname.startsWith('/admin')) {

    if (!session || role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  
  if (session && (pathname === '/login' || pathname === '/register')) {
    // Jika dia admin, arahkan langsung ke /admin setelah login
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    '/admin/:path*', 
    '/login',
    '/register'
  ],
};