import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../container/container";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { appContext } from "../../context/app-context";
const Navbar = () => {
  const nav = [
    {
      title: "خانه",
      path: "/",
    },
    {
      title: "نمونه کارها",
      path: "/sample-work",
    },
    {
      title: "درباره",
      path: "/about",
    },
    {
      title: "سیاست",
      path: "/policy",
    },
    {
      title: "تماس",
      path: "/contact",
    },
  ];
  const location = useLocation().pathname;
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const { mode, setMode } = useContext(appContext);
  const changeModeHandler = () => {
    setMode(!mode);
  };
  return (
    <>
      {menu && (
        <div
          className="h-screen inset-0 bg-black opacity-50 fixed z-10 "
          onClick={menuHandler}
        ></div>
      )}
      <div
        className={`${
          menu ? "w-72" : "w-0"
        } h-screen duration-500 overflow-hidden z-30 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg fixed `}
      >
        <FaTimes
          className="text-white absolute left-3 top-3 text-3xl"
          onClick={menuHandler}
        />
        <nav>
          <ul className="p-4 mt-12">
            {nav.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  <li className="listItemSidebar" onClick={menuHandler}>
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="h-20 shadow flex items-center bg-[#009899]">
        <Container>
          <div className="flex justify-between items-center">
            <nav className="hidden lg:block text-white">
              <ul className="flex items-center gap-8">
                {nav.map((item, index) => {
                  return (
                    <Link key={index} to={item.path}>
                      <li
                        className={`${
                          location == item.path && "listItemMenu"
                        } listItemMenu`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
            <HiMenuAlt3
              onClick={menuHandler}
              className="lg:hidden text-white text-3xl cursor-pointer"
            />

            <div className="flex items-center gap-4">
              <div
                className="border rounded-md cursor-pointer p-2 text-neutral-300"
                onClick={changeModeHandler}
              >
                {mode ? (
                  <IoMoonOutline size={27} />
                ) : (
                  <IoSunnyOutline size={30} />
                )}
              </div>

              <img
                src="https://s8.uupload.ir/files/logo2_0qpk.png"
                className="w-28"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

// import { FaTimes } from "react-icons/fa";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Container from "../container/container";

// const Navbar = () => {
//   const nav = [
//     { title: "خانه", path: "/" },
//     { title: "نمونه کارها", path: "/sample-work" },
//     { title: "درباره", path: "/about" },
//     { title: "سیاست", path: "/policy" },
//     { title: "تماس", path: "/contact" },
//   ];

//   const location = useLocation().pathname;
//   const [menu, setMenu] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollPosition, setLastScrollPosition] = useState(0);

//   const menuHandler = () => {
//     setMenu(!menu);
//   };

//   const handleScroll = () => {
//     const currentScrollPosition = window.scrollY;
//     if (currentScrollPosition > lastScrollPosition) {
//       setIsVisible(false); // اسکرول به پایین: Navbar مخفی شود
//     } else {
//       setIsVisible(true); // اسکرول به بالا: Navbar ظاهر شود
//     }
//     setLastScrollPosition(currentScrollPosition);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollPosition]);

//   return (
//     <>
//       {menu && (
//         <div
//           className="h-screen inset-0 bg-black opacity-50 fixed z-10"
//           onClick={menuHandler}
//         ></div>
//       )}
//       <div
//         className={`${
//           menu ? "w-72" : "w-0"
//         } h-screen duration-500 overflow-hidden z-30 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg fixed`}
//       >
//         <FaTimes
//           className="text-white absolute left-3 top-3 text-3xl"
//           onClick={menuHandler}
//         />
//         <nav>
//           <ul className="p-4 mt-12">
//             {nav.map((item, index) => (
//               <Link key={index} to={item.path}>
//                 <li className="listItemSidebar" onClick={menuHandler}>
//                   {item.title}
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <div
//         className={`${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         } fixed top-0 left-0 w-full h-20 shadow flex items-center bg-[#009899] duration-300 z-50`}
//       >
//         <Container>
//           <div className="flex justify-between items-center">
//             <nav className="hidden lg:block text-white">
//               <ul className="flex items-center gap-8">
//                 {nav.map((item, index) => (
//                   <Link key={index} to={item.path}>
//                     <li
//                       className={`${
//                         location === item.path &&
//                         "border-b-[7px] border-white py-7 px-1"
//                       } listItemMenu`}
//                     >
//                       {item.title}
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             </nav>
//             <HiMenuAlt3
//               onClick={menuHandler}
//               className="lg:hidden text-white text-3xl cursor-pointer"
//             />
//             <div>
//               <img
//                 src="https://s8.uupload.ir/files/logo2_0qpk.png"
//                 className="w-28"
//                 alt="logo"
//               />
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Navbar;
