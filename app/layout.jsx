"use client";
import "@styles/globals.css";
import { Nav } from "@components";
import userContext from "@context/userContext";
import { useEffect, useState } from "react";
import useAuth from "@utils/auth/useAuth";
import Head from "next/head";



export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const { SignIn, SignOut } = useAuth({ user, setUser });

  useEffect(() => {
    SignIn();
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Promptonia</title>
        <desc>Discover & share new AI prompts</desc>
        <link rel="shortcut icon" href="/assets/images/logo.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/logo.svg"
        />
      </Head>
      <body>
        <userContext.Provider value={{ user, setUser }}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </userContext.Provider>
      </body>
    </html>
  );
}
