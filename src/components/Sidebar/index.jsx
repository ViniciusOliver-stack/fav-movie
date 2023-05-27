import Link from "next/link";
import { useState } from "react";

import {
  HouseSimple,
  Compass,
  MagnifyingGlass,
  SignOut,
} from "@phosphor-icons/react";

export function Sidebar() {
  const [selectedLink, setSelectedLink] = useState("home");

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <div className="bg-[#19161F] w-64 h-full fixed">
        <div>
          <h1>Logo</h1>
        </div>

        <nav className="flex flex-col gap-8 mt-12">
          <p className="text-zinc-400 font-medium">Menu</p>
          <ul className="flex flex-col gap-10">
            <li
              className={` ${selectedLink === "home" ? "active-link" : ""}`}
              onClick={() => handleClick("home")}
            >
              <Link href="/" className="flex gap-3 items-center pl-3">
                <HouseSimple size={28} className="text-zinc-400" />
                <span className="text-zinc-400 font-medium">Home</span>
              </Link>
            </li>
            <li
              className={`flex gap-3 items-center ${
                selectedLink === "discovery" ? "active-link" : ""
              }`}
              onClick={() => handleClick("discovery")}
            >
              <Link href="/discovery" className="flex gap-3 items-center pl-3">
                <Compass size={28} className="text-zinc-400" />
                <span className="text-zinc-400 font-medium">Discovery</span>
              </Link>
            </li>
            <li
              className={`flex gap-3 items-center ${
                selectedLink === "search" ? "active-link" : ""
              }`}
              onClick={() => handleClick("search")}
            >
              <Link href="/search" className="flex gap-3 items-center pl-3">
                <MagnifyingGlass size={28} className="text-zinc-400" />
                <span className="text-zinc-400 font-medium">Search</span>
              </Link>
            </li>

            <li
              className={`flex gap-3 items-center ${
                selectedLink === "exit" ? "active-link" : ""
              }`}
              onClick={() => handleClick("exit")}
            >
              <Link href="/exit" className="flex gap-3 items-center pl-3">
                <SignOut size={28} className="text-zinc-400" />
                <span className="text-zinc-400 font-medium">Exit</span>
              </Link>
            </li>
          </ul>

          <div className="flex items-center absolute bottom-11 gap-3">
            <img
              src="https://img.quizur.com/f/img638ac08a140922.32676873.jpg?lastEdited=1670037644"
              alt=""
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="font-semibold text-white text-sm">
                Vinicius Santos
              </p>
              <span className="text-zinc-400 text-xs">vinicius@email.com</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
