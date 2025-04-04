"use client";
import { Star } from "lucide-react";
type Movie = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  original_title: string;
  release_date: string;
};

type MovieType = { movie: Movie };

export const MovielistCard = ({
  movie,
  onClick,
}: {
  movie: MovieType;
  onClick: () => void;
}) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <div
      onClick={onClick}
      className="flex w-[230px] flex-col border rounded-md"
    >
      <img
        className="w-[230px] h-[340px] rounded-md"
        src={
          movie.poster_path ? `${imgUrl}${movie.poster_path}` : "NoImage.png"
        }
        alt={movie.title}
      />
      <div className="flex min-h-[95px] flex-col p-2 rounded-t-md">
        <div className="flex justify-items-start gap-[2px]">
          <Star color="yellow" size={16} fill="yellow" />
          <p className="text-s text-[#09090B]">
            {movie.vote_average.toString().substring(0, 3)}
          </p>
          <p>/10</p>
        </div>
        <p className="text-lg text-[#09090B] truncate">
          {movie.original_title}
        </p>
      </div>
      <p className="flex gap-2 justify-end text-[14px]">{movie.release_date}</p>
    </div>
  );
};
