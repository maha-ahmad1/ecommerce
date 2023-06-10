// import React, { useState } from 'react';

// export default function ToggleSidebar() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = ([Children) => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         onClick={toggleSidebar}
//       >
//         <span className="sr-only">Open sidebar</span>
//         <svg
//           className="w-6 h-6"
//           aria-hidden="true"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//           ></path>
//         </svg>
//       </button>

//       <aside
//         id="default-sidebar"
//         className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0`}
//         aria-label="Sidebar"
//       >
//         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//           <button
//             type="button"
//             className="absolute block sm:hidden top-4 right-2 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={toggleSidebar}
//           >
//             <span className="sr-only">Close sidebar</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 1024 1024"
//             >
//               <path
//                 fill="currentColor"
//                 d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
//               />
//             </svg>
//           </button>
//         </div>
//         {Children}
//       </aside>
//     </div>
//   );
// };

