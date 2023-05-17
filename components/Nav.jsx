"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import userContext from "@context/userContext";
import useAuth from "@utils/auth/useAuth";

const Nav = () => {
  const {user,setUser}=useContext(userContext)
  const {SignIn,SignOut}=useAuth({user,setUser})

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={()=>{SignOut()}} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button type="button" onClick={()=>{SignIn()}} className="black_btn">
              Sign in
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            <Image
              src={user?.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    SignOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button type="button" onClick={()=>{SignIn()}} className="black_btn">
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
