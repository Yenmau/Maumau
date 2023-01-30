const Navbarr = () => {
  return (
    <div className="p-2 bg-black w-full flex gap-x-[1050px]">
      <div className="px-10 mx-8 flex justify-start">
        <div className="text-2xl">
          <nav className="font-bold text-[rgb(250,0,0)] my-3 mr-10">MAOMAO</nav>
        </div>
      </div>
      <div className="text-white text-lg font-semibold flex">
        <button className="flex justify-center py-[6px] my-2 hover:text-[rgb(255,0,0)] hover:-translate-y-[1.5px] duration-300 rounded-lg">
          Sign In
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="my-1 mx-1 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbarr;
