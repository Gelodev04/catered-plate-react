import { useState } from "react";
import { Menu } from "../Button/Menu";

import { DropdownMenuDemo } from "../ui/dropdown";



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Our Menus", link: "/menus" },
    { name: "Blogs", link: "/blogs" },
  ];

  return (
    <nav className="bg-[#FEF8E0]  ">
      <div className="flex items-center justify-between p-4 border-b border-gray-300  h-20">
        <img width={220} src="/svg/logo.svg" alt="logo" />
        <Menu toggle={setIsOpen} toggled={isOpen} />
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="space-y-10 bg-white w-full h-[calc(100vh-5rem)] bg-[white] absolute">
          <ul className="space-y-7 my-9 mx-5 text-main ">
            {menuItems.map((item, index) => (
              <li key={index} className="">
                <a href="" className="">
                  {item.name}
                </a>
              </li>
            ))}

            {/* DROPDOWN */}
            <div>
             
            {/* <DropdownMenuDemo/> */}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};
