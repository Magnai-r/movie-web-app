import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
type CarouselProps = {
  status: string;
  title: string;
  imgUrl: string;
  description: string;
  cardButton: string;
  rating: string;
};

export const CardCarousel = ({
  title,
  imgUrl,
  status,
  description,
  rating,
}: CarouselProps) => {
  return (
    <div className="h-[900px] relative">
      <img className="w-full object-cover" src={imgUrl} />
      <div className="absolute bottom-30 left-30">
        <p className="text-white text-4">{status}</p>
        <p className="text-[36px] font-bold text-white">{title}</p>
        <div className="flex items-center gap-2">
          <Star color="yellow" size={20} />
          <span className="text-white text-[20px] font-bold">{rating}</span>
          <span className="text-white">/10</span>
        </div>
        <p className="text-white w-100 py-4">{description}</p>
        <Button className="bg-white text-black hover:text-white">
          <Play />
          WatchTrailer
        </Button>
      </div>
    </div>
  );
};
