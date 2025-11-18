
import { NextResponse } from "next/server";
export function GET() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const body = `User-agent: *\nAllow: /\nSitemap: ${url}/sitemap.xml\n`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
