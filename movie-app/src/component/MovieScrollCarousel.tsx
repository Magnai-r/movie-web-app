"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardCarousel } from "./CardCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";
export interface NowPlayingMovieData {
  id: number;
  original_title: string;
  backdrop_path: string | null;
  title: string;
  vote_average: number;
  overview: string;
}

export const MovieScrollCarousel = () => {
  const [NowPlaying, setNowPlaying] = useState<NowPlayingMovieData[]>([]);
  const router = useRouter();
  const fetchData = async () => {
    const { data } = await axiosInstance.get(
      "movie/now_playing?language=en-US&page=1"
    );
    setNowPlaying(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleOnClick = (movieId: string) => {
    router.push(`/detail/${movieId}`);
  };
  return (
    <div className="flex w-full h-[900px] justify-center items-center">
      <Carousel>
        <CarouselContent>
          {NowPlaying.slice(0, 3).map((currentPlaying) => (
            <CarouselItem
              onClick={() => {
                handleOnClick(currentPlaying.id);
              }}
              key={currentPlaying.id}
            >
              <CardCarousel currentPlaying={currentPlaying} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute ml-20" />
        <CarouselNext className="absolute mr-20" />
      </Carousel>
    </div>
  );
};
