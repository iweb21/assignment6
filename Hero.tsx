import React from "react";
import image1 from './assets/image_1.png';


export default function Hero() {
  return (
    <div className="w-full h-[800px] bg-beige-100 flex flex-col md:flex-row items-center ml-20">
      <div className="md:w-1/2">
        <h1 className="text-6xl font-bold mb-4">
          Learn new skills<br/> online with ease
        </h1>
        <p className="text-lg mb-6">
          Discover a wide range of courses covering a variety of<br/> subjects,
          taught by expert instructors.
        </p>
        <div className="mt-6 flex space-x-4 justify-center md:justify-start">
          <button className="bg-[#000000] text-[#FFFFFF] px-6 py-3 rounded-md">
            Start learning now
          </button>
          <button className="border-[#676767] border-[1px] bg-[#FFFFFF] text-[#000000] px-6 py-3 rounded-md">
            Explore Courses
          </button>
        </div>
         
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
  <div className="p-4 rounded">
    <img src="book.png" alt="Girl pic" width={640} height={900} />
  </div>
</div>

  
  
</div>


);}



// w-full h-auto