import html from "./html.svg";

export const ProgressCard: React.FC = () => {
  return (
    <div className="border border-solid w-64 rounded-xl hover:shadow-2xl hover:transition hover:transition-opacity:0.5s hover:duration-700 hover:shadow-green-200">
      <div className="flex items-center justify-center m-5 mt-8 mb-8 rounded-xl ">
        <img className="w-20 h-20  rounded-full shadow-lg" src={html} alt="" />
      </div>
      <div className="p-5 float-left w-full border rounded-xl ">
        <p className="uppercase text-xs font-thin mb-1">Tutorial</p>
        <div className="">
          <p className="uppercase text-sm font-bold mb-1">Learn HTML</p>
          <div className="flex flex-row mb-1">
            <p className="mr-2 text-xs font-bold ">2 </p>
            <p className="text-xs font-light ">of</p>
            <p className="ml-2 text-xs font-bold ">74</p>
            <p className="ml-2 text-xs font-light ">lessions completed</p>
          </div>{" "}
        </div>
        <div className="text-xs font-bold w-full flex justify-end mt-5 mb-3 mr-10 transition transition-opacity:0.2s duration-1000">
          <p className="mr-2 text-2xl font-bold ">20%</p>
        </div>
      </div>
    </div>
  );
};


export const FlashCard: React.FC = () => {
  return (
    <div className="border border-solid w-64 rounded-xl hover:shadow-2xl hover:transition hover:transition-opacity:0.5s hover:duration-700 hover:shadow-green-200">
      <div className="flex items-center justify-center m-5 mt-8 mb-8 rounded-xl ">
        <img className="w-20 h-20  rounded-full shadow-lg" src={html} alt="" />
      </div>
      <div className="p-5 float-left w-full border rounded-xl ">
        <p className="uppercase text-xs font-thin mb-1">Tutorial</p>
        <div className="">
          <p className="uppercase text-sm font-bold mb-1">Learn HTML</p>
          <div className="flex flex-row mb-1">
            <p className="mr-2 text-xs font-bold ">2 </p>
            <p className="text-xs font-light ">of</p>
            <p className="ml-2 text-xs font-bold ">74</p>
            <p className="ml-2 text-xs font-light ">lessions completed</p>
          </div>{" "}
        </div>
        <div className="text-xs font-bold w-full flex justify-end mt-5 mb-3 mr-10 transition transition-opacity:0.2s duration-1000">
          <p className="mr-2 text-2xl font-bold ">20%</p>
        </div>
      </div>
    </div>
  );
};
