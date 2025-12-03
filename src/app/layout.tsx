import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "dx402",
  description: "",
  metadataBase: new URL("https://dx402.computer/"),
  twitter: {
    card: "summary_large_image",
    creator: "@digitalax",
    title: "dx402",
    description: "",
  },
  openGraph: {
    title: "dx402",
    description: "",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "DX.COMPUTER",
  publisher: "DX.COMPUTER",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "DIGITALAX",
    "Open Source LLMs",
    "DIGITALAX",
    "digitalax",
    "dxcomputer",
    "x402",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DX.COMPUTER",
              url: "https://dx.computer/",

              founder: {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "DIGITALAX",
                url: "https://digitalax.xyz/",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://digitalax.xyz/",
                },
                sameAs: [
                  "https://web3fashion.xyz/",
                  "https://emancipa.xyz/",
                  "https://highlangu.com/",
                  "https://digitalax.xyz/",
                  "https://cc0web3fashion.com/",
                  "https://cc0web3.com/",
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
