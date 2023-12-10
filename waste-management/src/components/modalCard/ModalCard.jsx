// import React from "react";

// const ModalCard = ({
//   header,
//   details,
//   price,
//   duration,
//   background,
//   buttonTextColor,
// }) => {
//   return (
//     <div>
//       <div className={`flex flex-col ${background} rounded-2xl`}>
//         <div className="px-6 py-8 sm:p-10 sm:pb-6">
//           <div className="grid items-center justify-center w-full grid-cols-1 text-left">
//             <div>
//               <h2 className="text-lg font-bold tracking-tighter text-white md:text-2xl">
//                 {header}
//               </h2>
//               <p className="mt-2 text-sm text-gray-100">{details}</p>
//             </div>
//             <div className="mt-6">
//               <p>
//                 <span className="text-xl font-medium tracking-tight text-white">
//                   {`₦${price}`}
//                 </span>
//                 <span className="text-base font-light text-white">
//                   {" "}
//                   {`/${duration}`}{" "}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex px-6 pb-8 sm:px-8">
//           <a
//             aria-describedby="tier-starter"
//             className={`items-center justify-center w-full px-6 py-2.5 text-center ${buttonTextColor} duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white`}
//             href="#"
//           >
//             Select Plan
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalCard;

// import React from "react";

// const ModalCard = ({
//   header,
//   details,
//   price,
//   duration,
//   background,
//   buttonTextColor,
// }) => {
//   return (
//     <div>
//       <div className={`flex flex-col ${background} rounded-2xl`}>
//         <div className="px-4 py-6 sm:p-6">
//           <div className="grid items-center justify-center w-full grid-cols-1 text-center sm:text-left">
//             <div>
//               <h2 className="text-lg font-bold tracking-tighter text-white md:text-2xl">
//                 {header}
//               </h2>
//               <p className="mt-2 text-sm text-gray-100">{details}</p>
//             </div>
//             <div className="mt-4 sm:mt-0">
//               <p>
//                 <span className="text-xl font-medium tracking-tight text-white">
//                   {`₦${price}`}
//                 </span>
//                 <span className="text-base font-light text-white">
//                   {" "}
//                   {`/${duration}`}{" "}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex px-4 pb-6 sm:px-6">
//           <a
//             aria-describedby="tier-starter"
//             className={`items-center justify-center w-full px-4 py-2 text-center ${buttonTextColor} duration-200 bg-white border-2 border-white rounded-lg nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white`}
//             href="#"
//           >
//             Select Plan
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalCard;

import React from "react";

const ModalCard = ({
  header,
  details,
  price,
  duration,
  background,
  buttonTextColor,
}) => {
  return (
    <div>
      <div className={`flex flex-col ${background} rounded-2xl `}>
        <div className="p-2 sm:p-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-center sm:text-left">
            <div className="hidden sm:block">
              {/* Hide header on mobile screens */}
              <h2 className="text-lg font-bold tracking-tighter text-white md:text-2xl">
                {header}
              </h2>
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-100 hidden sm:block">
                {details}
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p>
                <span className="text-xl font-medium tracking-tight text-white">
                  {`₦${price}`}
                </span>
                <span className="text-base font-light text-white">
                  {" "}
                  {`/${duration}`}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-4 p-3 sm:px-6">
          <a
            aria-describedby="tier-starter"
            className={`font-bold sm:items-center justify-center w-full px-2 sm:px-4 py-1 sm:py-2 text-center ${buttonTextColor} duration-200 bg-white border-2 border-white rounded-xl inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm sm:text-xs focus-visible:ring-white`}
            href="#"
          >
            Select Plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
