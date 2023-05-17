"use client";
import "@styles/globals.css";
import { Nav} from "@components";
import userContext from "@context/userContext";
import { useEffect, useState } from "react";
import useAuth from "@utils/auth/useAuth";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share new AI prompts",
};

export default function RootLayout({ children }) {

  const [user,setUser]=useState(null);
  const {SignIn,SignOut}= useAuth({user,setUser});

  useEffect(()=>{
    SignIn();
  },[])


  return (
    <html lang="en">
      <body>
        <userContext.Provider value={{user,setUser}} >
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
