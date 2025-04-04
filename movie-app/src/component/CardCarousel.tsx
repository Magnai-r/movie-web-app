"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
type CarouselData = {
  id: number;
  backdrop_path: string | null;
  original_title: string;
  overview: string;
  title: string;
  vote_average: number;
};
type NowPlaying = { currentPlaying: CarouselData };
export const CardCarousel = ({
  currentPlaying,
  onClick,
}: {
  currentPlaying: NowPlaying;
  onClick: () => void;
}) => {
  console.log(currentPlaying.title, "PLAYING NOW");

  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div onClick={onClick} className="h-[900px] w-full relative">
      <img
        className="w-full object-cover"
        src={`${imgUrl}${currentPlaying.backdrop_path}`}
        alt={currentPlaying.title}
      />
      <div className="absolute bottom-30 left-30">
        <p className="text-white text-2xl">Now Playing:</p>
        <p className="text-[36px] font-bold text-white">
          {currentPlaying.original_title}
        </p>
        <div className="flex items-center gap-2">
          <Star color="yellow" fill="yellow" size={20} />
          <span className="text-white text-[20px] font-bold">
            {currentPlaying.vote_average}
          </span>
          <span className="text-white">/10</span>
        </div>
        <p className="text-white w-100 py-4">{currentPlaying.overview}</p>
        <Button className="bg-white text-black hover:text-white">
          <Play />
          WatchTrailer
        </Button>
      </div>
    </div>
  );
};
