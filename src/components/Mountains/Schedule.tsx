import mountains from "../../assets/footer.jpg";
export default function Schedule() {
  return (
    <div className="__schedule min-h-[calc(100vh-176px)] w-full relative">
      <img
        className=" absolute top-0 left-0 w-full h-full z-0 object-cover"
        src={mountains}
        alt=""
      />
      <div className="__schedule_container relative max-w-[350px] bg-[#ffffffaa] text-slate-500 z-30 p-5 rounded-lg shadow-lg left-5 top-5 text-sm lg:left-1/4 lg:top-[50px]">
        <h1 className=" text-slate-500 font-bold text-3xl uppercase">
          Schedule
        </h1>
        <div className="__schedule_timing flex w-full justify-between items-center">
          <p>25 Nov 2016</p>
          <p>Vestibulum Vivera</p>
        </div>
        <div className="__schedule_timing flex w-full justify-between items-center">
          <p>28 Nov 2016</p>
          <p>Vestibulum Vivera</p>
        </div>
        <div className="__schedule_timing flex w-full justify-between items-center">
          <p>1 Dec 2016</p>
          <p>Vestibulum Vivera</p>
        </div>
        <br />
        <div className="__schedule_timing flex w-full justify-between items-center">
          <p>15 Dec 2016</p>
          <p>Vestibulum Vivera</p>
        </div>
        <br />
        <div className="__schedule_timing flex w-full justify-between items-center">
          <p>25 Nov 2016</p>
          <p>Vestibulum Vivera</p>
        </div>
      </div>
    </div>
  );
}
