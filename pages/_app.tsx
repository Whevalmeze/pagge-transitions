import "@/styles/scss/header.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "400"]
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`main ${inter.className}`}>
      <div className="header">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Component key={router.route} {...pageProps} />
      </div>
    </div>
  );
}
