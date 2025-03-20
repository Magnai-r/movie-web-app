"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
export const NavigationBar = () => {
  return (
    <div className="flex w-full h-[59px] ">
      <div className=" flex w-full h-full px-4 justify-between items-center bg-[#FFF]">
        <div className="flex gap-2">
          <img src="film.svg" alt="film" />
          <p className=" text-base text-[#4338CA] italic font-bold leading-[20px]">
            Movie Z
          </p>
        </div>
        <div className="flex items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" border-1 border-[#E4E4E7] bg-[#FFF] rounded-md">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex w-[379px] px-3 items-center gap-[10px] border border-[#E4E4E7] bg-[#FFF] rounded-lg">
            <Search size={16} />
            <input
              className="w-full border-none outline-none"
              placeholder="Search.."
              type="text"
            />
          </div>
        </div>
        <div className="flex w-9 h-9 justify-center items-center  border border-[#E4E4E7] bg-[#FFF] rounded-md">
          <img className="h-4 w-4" src="moon.svg" alt="moon" />
        </div>
      </div>
    </div>
  );
};
