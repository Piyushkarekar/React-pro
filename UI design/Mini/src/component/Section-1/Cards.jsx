import React from "react";

export const Cards = (props) => {
  return (
    <div className="h-full w-50 rounded-4xl relative overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-2">
        <h3 className=" h-10 w-10  bg-gray-100 rounded-full justify-center flex items-center text-2xl">
          {props.id}
        </h3>
        <div>
          <p className="text-sm mb-5 text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            aperiam hic eum distinctio. Adipisci, laudantium.
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className="text-white text-lg px-5 py-1 rounded-3xl">
              {props.tag}
            </button>
            <button style={{backgroundColor:props.color}} className=" text-white text-lg h-10 w-10 rounded-full">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
