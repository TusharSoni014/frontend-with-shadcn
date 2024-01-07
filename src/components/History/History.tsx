import StickyNav from "../StickyNav";
import history from "../../assets/history.jpg";
import Carousel from "./Carousel";

export default function History() {
  return (
    <div
      id="history"
      className="__history_section relative h-screen overflow-hidden"
    >
      <img
        className=" absolute top-0 left-0 w-[150vw] h-[150vh] object-cover z-0 select-none pointer-events-none"
        src={history}
        alt=""
      />
      <StickyNav />
      <div className="__details relative z-10 pt-10 flex flex-col items-center justify-between h-[calc(100vh-40px)]">
        <div className="__details_container w-full lg:max-w-[60%] flex flex-col justify-center">
          <div className="__upper p-3">
            <div className="__title flex">
              <h1 className="text-9xl uppercase text-[#6c7b978c] font-bold w-fit ">
                01.
              </h1>
              <p className="text-4xl uppercase text-[#414f6bdd] font-bold w-fit flex items-center">
                history
              </p>
            </div>
            <p className="text-slate-600 drop-shadow-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              expedita tempore error voluptates libero eum labore autem, aut
              fugiat nobis natus aspernatur accusantium et laudantium quas
              veniam fugit minus mollitia.
            </p>
          </div>
        </div>
        <div className="__lower w-full flex justify-center items-center py-10 bg-[#414f6bb4]">
          <div className="__carousel_container max-w-[60%]">
          <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
