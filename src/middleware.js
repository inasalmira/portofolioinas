import { NextResponse } from 'next/server';

export function middleware(request) {
  try {
    const session = request.cookies.get('user_session')?.value;
    const role = request.cookies.get('user_role')?.value;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/admin')) {
      if (!session || role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }
    }

    if (session && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/admin/:path*', 
    '/login',
    '/register'
  ],
};