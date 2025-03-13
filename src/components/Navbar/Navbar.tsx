import { useState } from "react";
import { Menu } from "./Menu";
import MyDropdown from "../Dropdown";

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
        <div className=" bg-white w-full h-[calc(100vh-5rem)] absolute">
          <ul className="space-y-6  my-9 mx-5 text-maincolor">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="" className="">
                  {item.name}
                </a>
              </li>
            ))}

            {/* DROPDOWN */}
            <div>
              <p className="text-lg">Pages</p>
            
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};
