import React from "react";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

export const Page1content = (props) => {
  console.log(props)
  return (
    <div className="flex items-center gap-20 h-[90vh] w-full py-10 px-5">
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  );
};
