import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="py-1 flex justify-center items-center top-0 absolute w-full z-10 px-3">
      <div className="__header_inner_container flex justify-between items-center w-full lg:max-w-[60%]">
        <div className="__logo w-10 h-10">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex gap-10 justify-center items-center">
          <a href="#history" className=" italic underline uppercase text-white">
            01. History
          </a>
          <a href="#team" className=" italic underline uppercase text-white">
            02. Team
          </a>
        </nav>
      </div>
    </header>
  );
}
