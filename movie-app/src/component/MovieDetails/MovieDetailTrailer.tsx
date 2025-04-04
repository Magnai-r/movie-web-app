"use client";

import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/utils";
import { Play, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MovielistCard } from "../MovieLIstCard";
import { AllGenres } from "../AllGenres";

type MovieDetailData = {
  id: number;
  backdrop_path: string | null;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  name: string;
  key: string;
  overview: string;
  adult: boolean;
  original_title: string;
  title: string;
  poster_path: string | null;
};

type FilmGenres = {
  id: number;
  name: string;
};

export const MovieDetailFrame = ({ id }: { id: string }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const [trailerData, setTrailerData] = useState<MovieDetailData>({});
  const [movieGenre, setMovieGenre] = useState<FilmGenres[]>([]);

  const fetchFilmTrailer = async () => {
    const response = await axiosInstance.get(
      `/movie/${id}?language=en-US&page=1&page=1&page=1`
    );
    console.log(response, "response");
    setTrailerData(response.data);
  };
  const fetchData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${id}?language=en-US&page=1`
    );
    setMovieGenre(data.genres);
  };

  useEffect(() => {
    fetchFilmTrailer();
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full pt-[52px] items-start gap-6 pl-[180px] pr-[178px]">
      <div className=" flex w-full pr-3 justify-between items-center self-stretch">
        <div>
          <h1 className="text-4xl text-[#09090B] font-bold leading-[40px]">
            {trailerData.original_title}
          </h1>
          <div className="flex gap-0.5">
            <p className="text-lg text-[#09090B] font-normal leading-[28px]">
              {trailerData.release_date}
            </p>
            <p className="text-lg text-[#09090B] font-normal leading-[28px]">
              {trailerData.adult}
            </p>
            <p className="text-lg text-[#09090B] font-normal leading-[28px]">
              {trailerData.runtime}m
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xs font-medium leading-4 text-[#09090B]">Rating</p>
          <div className="flex h-12 items-center gap-1 self-stretch">
            <Star color="yellow " fill="yellow" size={28} />
            <div>
              <p className="text-lg text-[#09090B]">
                {trailerData.vote_average}
              </p>
              <p className="text-xs text-[#71717A]">
                {Math.floor(trailerData.vote_count / 1000)}K
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 w-full">
        <div className="w-[20%] min-w-[300px] h-[428px] border rounded-sm">
          <img
            className="w-full h-107 rounded-sm"
            src={`${imgUrl}${trailerData.poster_path}`}
            alt={trailerData.title}
          />
        </div>
        <div className="flex w-[80%] h-[428px] items-center border rounded-sm relative">
          <img
            className="flex w-full h-107 relative rounded-sm"
            src={`${imgUrl}${trailerData.backdrop_path}`}
            alt="backDrop_path"
          />
          {/* <iframe
            className="h-[428px] w-full"
            src="https://www.youtube.com/embed/pYmAy3H0s3Q"
            frameBorder="0"
          ></iframe> */}
          <div className="flex items-center gap-3  absolute left-6 bottom-6">
            <Button className="flex w-10 h-10 py-2 px-4 justify-center items-center gap-2 rounded-full bg-[#FFF] relative ">
              <Play color="black" className="absolute" />
            </Button>
            <p className="text-[#FFF] tex-base">Play trailer</p>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 ">
        {movieGenre?.map((genre) => (
          <AllGenres key={genre.id} genre={genre} />
        ))}
      </div>
      <div className="flex flex-col items-start gap-5 pt-8">
        <p>{trailerData.overview}</p>
      </div>

      {/* <div className="flex flex-col gap-5 self-stretch">
        <div className="flex flex-col items-center self-stretch">
          <div>
            <p></p>
            <p></p>
          </div>
          <div className="flex flex-col items-center gap-[10px] self-stretch p-1 border-b border-[#E4E4E7]"></div>
        </div>
      </div> */}

      {/* {trailerData.map((MovieDetailFrame) => (
        <MovieDetailFrame
          key={trailerData.id}
          filmTrailer={MovieDetailFrame}
        />
      ))} */}
    </div>
  );
};
