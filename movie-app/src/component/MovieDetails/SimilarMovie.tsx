"use client";
import { Button } from "@/components/ui/button";
import { Play, Star, ArrowRight } from "lucide-react";
import { MovielistCard } from "../MovieLIstCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";

type SimilarMovieData = {
  id: number;
  poster_path: string | null;
  original_title: string;
  title: string;
  vote_average: number;
  release_date: string;
};

export const SimilarMovies = ({ id }: { id: string }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  const [similarFilms, setSimilarFilms] = useState<SimilarMovieData[]>([]);

  const fetchSimilarFilms = async () => {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    setSimilarFilms(response.data.results);
  };
  console.log(similarFilms);

  useEffect(() => {
    fetchSimilarFilms();
  }, []);
  return (
    <div className="flex flex-col w-full pt-8 gap-8">
      <div className="flex justify-between items-start w-full pl-45 pr-45">
        <p className="text-black text-2xl font-semibold leading-[32px]">
          More like this
        </p>
        <Button className="flex h-9 py-2 px-4 justify-center itmes-center gap-2 bg-[#FFF] rounded-md text-black border">
          See more
          <ArrowRight color="black" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-8 pl-45 pr-45">
        {similarFilms.slice(0, 5).map((value, index) => (
          <MovielistCard movie={value} key={index} />
        ))}
      </div>
    </div>
  );
};
