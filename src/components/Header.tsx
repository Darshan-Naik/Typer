import { RiKeyboardBoxFill } from "@remixicon/react";
import React from "react";

const Header = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <RiKeyboardBoxFill size={24} />
        <p className="text-xl font-semibold">Typer</p>
      </div>
      <a
        href="https://github.com/Darshan-Naik/Typer"
        target="_blank"
        className="underline underline-offset-2 text-primary"
      >
        Github
      </a>
    </div>
  );
};

export default Header;
