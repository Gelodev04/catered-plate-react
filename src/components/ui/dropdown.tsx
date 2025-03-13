import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcnui/dropdown-menu";
import { DropArrow } from "../svgicons/drop";
import { useState } from "react";

export function DropdownMenuDemo() {
  const [open, setOpen] = useState<boolean>(false);

  const menuItems = [
    { name: "FAQ", link: "/faq" },
    { name: "Gallery", link: "/gallery" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms and Conditions", link: "/terms-and-conditions" },
    { name: "Style Guide", link: "/style-guide" },
    { name: "License", link: "/license" },
    { name: "Changelog", link: "/changelog" },
    { name: "404", link: "/404" },
  ];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button color="" className="text-lg flex items-center gap-2">
          <span>Pages</span>
          <span
            className={` transition-transform duration-200 ${
              open ? "-rotate-180" : "rotate-0"
            }`}
          >
            <DropArrow />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-4 bg-[#faf3d7] font-display ">
        <DropdownMenuGroup className="space-y-3 ">
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="text-main text-md cursor-pointer  hover:bg-transparent focus:bg-transparent  hover:text-inherit"
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
