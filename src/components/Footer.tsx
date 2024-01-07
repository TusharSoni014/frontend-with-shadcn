import React from "react";
import logo from "../assets/logo.png";
import textLogo from "../assets/text-logo.png";

export default function Footer() {
  return (
    <footer className="__sticky_nav sticky z-20 top-0 flex justify-center items-center py-2 px-3 bg-slate-700 text-black shadow-lg">
      <div className="__inner_content flex justify-between items-center w-full lg:max-w-[60%]">
        <div className="__logo flex justify-start items-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <img className="h-9" src={textLogo} alt="text-logo" />
        </div>
        <p className="font-bold text-slate-500">COPYRIGHT 2016 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
