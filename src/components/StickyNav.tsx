import logo from "../assets/logo.png";
import textLogo from "../assets/text-logo.png";

export default function StickyNav() {
  return (
    <div className="__sticky_nav sticky z-20 top-0 flex justify-center items-center py-1 px-3 bg-white text-black shadow-lg">
      <div className="__inner_content flex justify-between items-center w-full lg:max-w-[60%]">
        <div className="__logo flex justify-start items-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <img className="h-9" src={textLogo} alt="text-logo" />
        </div>
        <nav className="flex gap-10 justify-center items-center">
          <a href="#history" className=" italic underline uppercase text-black">
            01. History
          </a>
          <a href="#team" className=" italic underline uppercase text-black">
            02. Team
          </a>
        </nav>
      </div>
    </div>
  );
}
