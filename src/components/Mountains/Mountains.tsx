import Schedule from "./Schedule";

export default function Mountains() {
  return (
    <div
      id="team"
      className="__mountains_section flex items-center flex-col w-full"
    >
      <div className="__mountains_container lg:max-w-[60%] w-full">
        <div className="__information px-4 py-2 flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div className="__title flex w-full justify-center">
            <h1 className="text-9xl uppercase text-[#6c7b978c] font-bold w-fit ">
              02.
            </h1>
            <p className="text-4xl uppercase text-[#414f6bdd] font-bold w-fit flex items-center">
              climb
            </p>
          </div>
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos voluptatibus iste exercitationem architecto itaque totam
            sed soluta, corrupti quos repellat.
          </p>
        </div>
      </div>
      <div className="__mountain_menu bg-[#414f6bdd] w-full h-8 flex justify-center items-center">
        <div className="__links_container flex max-w-full justify-center lg:justify-start lg:max-w-[60%] w-full h-full">
          <a
            className=" text-gray-500 underline w-fit bg-gray-300 h-full font-bold px-3 flex justify-center items-center"
            href="#"
          >
            MOUNTAIN 1
          </a>
          <a
            className="w-fit text-white h-full font-bold px-3 flex justify-center items-center"
            href="#"
          >
            MOUNTAIN 2
          </a>
        </div>
      </div>
      <Schedule />
    </div>
  );
}
