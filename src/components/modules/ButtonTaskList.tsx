import React from "react";

const ButtonTaskList = ({ children, className, href}: any) => {
  const style: string =
    "flex items-center py-0.5 px-4 border rounded-md m-0.5 h-8 text-sm font-mono";
  return (
    <a href={href} className={style + " " + className}>
      {children}
    </a>
  );
};

export default ButtonTaskList;
