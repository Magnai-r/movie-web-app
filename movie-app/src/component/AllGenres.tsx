"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Genres = {
  id: number;
  name: string;
};
type GenreType = { genre: Genres };
export const AllGenres = ({ genre }: GenreType) => {
  return (
    <div>
      <Button>
        <p>{genre.name}</p>
        <ChevronRight />
      </Button>
    </div>
  );
};
