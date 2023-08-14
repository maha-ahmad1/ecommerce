// import React, { useState } from "react";

// const ToolTip = ({ text, children, position }: any) => {
//   const [tooltipVisible, setTooltipVisible] = useState(false);

//   const handleHover = () => {
//     setTooltipVisible(true);
//   };

//   const handleLeave = () => {
//     setTooltipVisible(false);
//   };

//   const getTooltipClasses = () => {
//     let classes = "font-medium ";

//     if (!tooltipVisible) {
//       classes += "hidden ";
//     }
//     if (position === "left") {
//       classes += "left-full right-auto -bottom-6 ml-2 ";
//     } else if (position === "right") {
//       classes += "left-auto right-full -bottom-6 mr-2 ";
//     } else if (position === "center") {
//       classes += "left-1/2 transform -translate-x-1/2 bottom-6 ";
//     }

//     return classes;
//   };
//   //   return (
//   //     <span className="relative mt-7 mx-2 cursor-pointer"  onMouseEnter={handleHover} onMouseLeave={handleLeave}>
//   //       {children}
//   //       <div id="tooltip" className={getTooltipClasses()}>
//   //         {text}
//   //         {/* <div className="absolute left-full mt-1 border-solid border-black border-transparent transform -translate-x-1/2 hidden bg-black"></div> */}
//   //       </div>
//   //     </span>
//   //   );
//   // };
//   return (
//     <>
//     <div className={`mx-auto container max-w-[228px] px-4 py-4 bg-black rounded relative ${getTooltipClasses()}`}>
//       <p
//         className={`text-xs leading-none text-gray-600 pt-2 pb-2 `}
//       >
//         {text}
//       </p>
//       <svg
//         className="absolute z-10 bottom-[-10px]"
//         width={16}
//         height={10}
//         viewBox="0 0 16 10"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="black" />
//       </svg>

//     </div>
//          <div
//          className="absolute bottom-[-30px] z-10 cursor-pointer"
//          onMouseEnter={handleHover}
//          onMouseLeave={handleLeave}
//        >
//          {children}
//        </div>
//        </>
//   );
// };

// export default ToolTip;
import React, { useState } from "react";

const ToolTip = ({ text, children, position }: any) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleHover = () => {
    setTooltipVisible(true);
  };

  const handleLeave = () => {
    setTooltipVisible(false);
  };

  const getTooltipClasses = () => {
    let classes =
      "absolute rounded-lg px-20 py-2 text-center border shadow-lg bg-white font-medium ";

    if (!tooltipVisible) {
      classes += "hidden ";
    }
    if (position === "left") {
      classes += "left-full right-auto -bottom-6 ml-2 ";
    } else if (position === "right") {
      classes += "left-auto right-full -bottom-6 mr-2 ";
    } else if (position === "center") {
      classes += "left-1/2 transform -translate-x-1/2 bottom-6 ";
    }

    return classes;
  };
 // classes += "before:left-[-8px] before:-bottom-1/2 before:border-4 before:border-solid before:border-gray-300 before:border-t-transparent before:border-l-transparent before:border-r-transparent before:-translate-y-1/2 before:content[''] before:w-0 before:h-0 before:mt-[-8px] before:ml-[8px] before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-b-gray-300 ";

  return (
    <div className="">
      <span
        className="relative mt-7 mx-2 cursor-pointer "
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {children}
        <div
          className={`text-xs text-gray-600   ${getTooltipClasses()}`}
        >
          {text}
          <div className="">
            {/* <div className=" z-10 left-full mt-1 border-solid border-black border-transparent transform -translate-x-1/2 hidden bg-black"></div> */}
          </div>
        </div>
      </span>
    </div>
  );
};

export default ToolTip;
