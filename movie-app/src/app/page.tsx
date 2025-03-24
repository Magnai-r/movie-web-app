"use client";
import { FooterContent } from "@/component/FooterContent";
import { MovieScrollCarousel } from "@/component/MovieScrollCarousel";
import { NavigationBar } from "@/component/NavigationBar";
import { PopularMovies } from "@/component/PopularMovies";
import { TopRatedMovies } from "@/component/TopRatedMovies";
import { UpComingMovies } from "@/component/UpComingMovies";
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

export default function Home() {
  return (
    <div className="flex w-full h-100vh flex-col gap-[52px]">
      <div className="flex w-full h-full flex-col gap-6">
        <NavigationBar />
        <MovieScrollCarousel />
      </div>
      <UpComingMovies />
      <PopularMovies />
      <TopRatedMovies />
      <FooterContent />
    </div>
  );
}
