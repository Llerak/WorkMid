import React from "react";

const ButtonTaskList = ({ children, className, id}: any) => {
  const style: string =
    "cursor-pointer flex items-center py-0.5 px-4 border rounded-md m-0.5 h-8 text-sm font-mono bg-[#EAF0F5]";
  return (
    <div className={style + " " + className} id={id}>
      {children}
    </div>
  );
};

export default ButtonTaskList;
