import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center text-sm text-primary">
      <p className="sm:block hidden">© 2024. All Rights Reserved</p>
      <a
        href="https://www.darshannaik.com"
        target="_blank"
        className=" underline underline-offset-2"
      >
        Author: Darshan Naik
      </a>
    </div>
  );
};

export default Footer;
