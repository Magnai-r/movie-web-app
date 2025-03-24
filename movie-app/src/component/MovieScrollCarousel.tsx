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

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&page=1&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289&`
    );
    setNowPlaying(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex w-full h-[900px] justify-center items-center">
      <Carousel>
        <CarouselContent>
          {NowPlaying.slice(0, 3).map((currentPlaying) => (
            <CarouselItem key={currentPlaying.id}>
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
