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
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { AllGenres } from "./AllGenres";
export interface GenresData {
  id: number;
  name: string;
}

export const NavigationBar = () => {
  const [allGenre, setAllGenre] = useState<GenresData[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289&`
    );

    setAllGenre(data.genres);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  <NavigationMenuLink>
                    <div className="flex w-[577px] h-[333px] p-5 flex-col items-start bg-[#FFF]">
                      <div className="flex w-[213px] flex-col items-start gap-1">
                        <h3 className="text-[#09090B] text-2xl font-semibold">
                          Genres
                        </h3>
                        <p className="text-[#09090B] font-normal">
                          See lists of movies by genre
                        </p>
                      </div>
                      <div className="flex p-4 flex-col items-center self-stretch gap-[10px] border-t border-black"></div>
                      <div className="flex items-start content-start gap-4 self-stretch flex-wrap">
                        {allGenre?.map((genre) => (
                          <AllGenres key={genre.id} genre={genre} />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex w-[379px] px-3 items-center gap-[10px] border border-[#E4E4E7] bg-[#FFF] rounded-lg">
            <Search size={16} />
            <input
              className="w-full border-none outline-none h-9"
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
