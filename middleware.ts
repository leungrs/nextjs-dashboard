
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


// export function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   // 将 pathname 注入到 Header 中
//   requestHeaders.set('x-pathname', request.nextUrl.pathname);
//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }