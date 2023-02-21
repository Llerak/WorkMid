import React from "react";

const ButtonTaskList = ({ children, className}: any) => {
    const style:string = "flex items-center py-0.5 px-4 border rounded-md m-0.5 h-8 text-sm font-mono";
    return(
        
        <a href="" className={style + " " + className}>
        {children}
      </a>
    )
}


export default ButtonTaskList;

export const PrimaryButton = ({ children, className, ...props }: any) => {
    const style =
      " border mt-2 py-1 px-3 bg-primary rounded border-[#7691ad] text-footer-text hover:bg-white hover:text-primary ";
    return (
      <>
        <button {...props} className={style + " " + className}>
          {children}
        </button>
      </>
    );
  };