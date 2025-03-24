"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovielistCard } from "./MovieLIstCard";
import axios from "axios";
import { useEffect, useState } from "react";

export interface TopRatedMoviesData {
  name: string;
  id: number;
  original_title: string;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
}

export const TopRatedMovies = () => {
  const [topRatedFilm, setTopRatedFilm] = useState<TopRatedMoviesData[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289&`
    );
    setTopRatedFilm(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(topRatedFilm, "TopRatedFilm");

  return (
    <div className="flex w-full h-full flex-col px-20 ">
      <div className="flex w-full justify-between pb-[52px]">
        <p className="text-black text-2xl font-semibold leading-[32px]">
          Top Rated
        </p>
        <Button className="flex h-9 py-2 px-4 justify-center itmes-center gap-2 bg-[#FFF] rounded-md text-black">
          See more
          <ArrowRight color="black" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-8">
        {topRatedFilm.slice(0, 10).map((movie) => (
          <MovielistCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
