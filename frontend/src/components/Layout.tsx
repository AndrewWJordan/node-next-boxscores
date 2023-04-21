import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/baseball">Baseball</Link> |{" "}
          <Link href="/football">Football</Link> |{" "}
          <Link href="/hockey">Hockey</Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>Footer</span>
      </footer>
    </div>
  );
}
