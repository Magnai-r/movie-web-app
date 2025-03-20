import { Star } from "lucide-react";
type MovieListsProps = {
  imgUrl: string;
  rating: string;
  title: string;
};

export const MovielistCard = ({ imgUrl, rating, title }: MovieListsProps) => {
  return (
    <div className="flex w-[230px] flex-col border rounded-md">
      <img className="w-full min-h-[340px] object-cover" src={imgUrl} />
      <div className="flex min-h-[95px] flex-col p-2 rounded-t-md">
        <div className="flex justify-items-start gap-[2px]">
          <Star color="yellow" size={16} />
          <p className="text-s text-[#09090B]">{rating}</p>
        </div>
        <p className="text-lg text-[#09090B] truncate">{title}</p>
      </div>
    </div>
  );
};
