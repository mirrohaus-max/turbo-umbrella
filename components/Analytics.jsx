
"use client";
import Script from "next/script";
export default function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  if (!provider || provider === "none") return null;
  if (provider === "ga4") {
    const id = process.env.NEXT_PUBLIC_GA4_ID;
    if (!id) return null;
    return (
      <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
        <Script id="ga4">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','${id}',{anonymize_ip:true});
        `}</Script>
      </>
    );
  }
  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    if (!domain) return null;
    return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
  }
  return null;
}
