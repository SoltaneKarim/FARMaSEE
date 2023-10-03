import React from "react";
import Image from 'next/image'

const page = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row bg-green-200 mt-6">
      <div className="md:w-1/3 md:mx-7">
        <div className="grid grid-cols-2 gap-4">
          {/* First Row */}
          <div className="col-span-1 bg-white shadow-lg">
          <p className="text-slate-500 w-auto">Experts</p>
          <h3 className="font-bold slashed-zero">121</h3>
          
          </div> 
          <div className="col-span-1 bg-white shadow-lg">Column 2</div>

          {/* Second Row */}
          <div className="col-span-2 bg-white shadow-lg">Single Column</div>
        </div>
      </div>
      <div className="w-full md:w-screen bg-white  shadow-lg ">Stats</div>
    </div>
  );
};

export default page;

