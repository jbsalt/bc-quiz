import { NextResponse } from "next/server";

export function middleware(req, ev) {
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval'; 
    child-src 'self';
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self'  *.gstatic.com;
  `;

  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    ContentSecurityPolicy.replace(/\n/g, "")
  );

  return response;
}
