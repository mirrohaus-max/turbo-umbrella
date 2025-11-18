
export default function sitemap() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return [
    { url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 }
  ];
}
