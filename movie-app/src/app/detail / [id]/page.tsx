"use client";
import { NavigationBar } from "@/component";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
type MovieDetailData = {
  name: string;
  id: number;
  original_title: string;
  published_at: string;
};

export default function Detail({}) {
  return (
    <div className="flex w-full h-100vh flex-col">
      <div className="flex w-full h-full flex-col gap-6 ">
        <NavigationBar />
      </div>
      {/* MovieFrame */}
      <div className="flex flex-col w-full pt-[52px] items-start gap-6 pl-[180px] pr-[178px]">
        {/* movieDetailTitle */}
        <div className="flex w-full pr-3 justify-between items-center self-stretch">
          <div>
            <h1 className="text-4xl text-[#09090B] font-bold leading-[40px]">
              Wicked
            </h1>
            <p className="text-lg text-[#09090B] font-normal leading-[28px]">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>
          {/* movieRating */}
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium leading-4 text-[#09090B]">
              Rating
            </p>
            <div className="flex h-12 items-center gap-1 self-stretch">
              <Star color="yellow" fill="yellow" />
              <div>
                <p className="text-lg text-[#09090B]">6.9/10</p>
                <p className="text-xs text-[#71717A]">37k</p>
              </div>
            </div>
          </div>
        </div>
        {/* poster&video */}
        <div className="flex items-center gap-8 w-full">
          <div className="w-[20%] min-w-[300px] h-[428px] border rounded-sm">
            <img />
          </div>
          <div className="flex w-[80%] bg-gray-600 h-[428px] items-center border rounded-sm"></div>
        </div>
      </div>
      {/* MovieDiscription */}
      <div className="flex flex-col items-start gap-5 pt-8 pl-[180px] pr-[180px]">
        <div className="flex gap-3 items-center">
          <Badge>Fairytale</Badge>
          <Badge>Fairytale</Badge>
          <Badge>Fairytale</Badge>
          <Badge>Fairytale</Badge>
          <Badge>Fairytale</Badge>
        </div>
        {/* Description */}
        <p className="text-base leading-6 text-[#09090B]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        {/* StaffInformation */}
        <div className="flex flex-col items-center self-stretch gap-5">
          <div className="flex flex-col gap-5 self-stretch">
            <div className="flex flex-col items-center self-stretch ">
              <div className="flex items-center self-stretch gap-[53px]">
                <p>Director </p>
                <p>Jon M. Chu</p>
              </div>
              <div className="flex flex-col items-center gap-[10px] self-stretch p-1 border-b border-[#E4E4E7]"></div>
            </div>
            <div className="flex flex-col items-center self-stretch ">
              <div className="flex items-center self-stretch gap-[53px]">
                <p>Director </p>
                <p>Jon M. Chu</p>
              </div>
              <div className="flex flex-col items-center gap-[10px] self-stretch p-1 border-b border-[#E4E4E7]"></div>
            </div>
            <div className="flex flex-col items-center self-stretch ">
              <div className="flex items-center self-stretch gap-[53px]">
                <p>Director </p>
                <p>Jon M. Chu</p>
              </div>
              <div className="flex flex-col items-center gap-[10px] self-stretch p-1 border-b border-[#E4E4E7]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* movieMoreLikeThis */}
      <div className="flex flex-col w-full pt-8 pl-[180px] pr-[182px] gap-8">
        <div className="flex justify-between items-start w-full">
          <p className="text-black text-2xl font-semibold leading-[32px]">
            More like this
          </p>
          <Button className="flex h-9 py-2 px-4 justify-center itmes-center gap-2 bg-[#FFF] rounded-md text-black">
            See more
            <ArrowRight color="black" />
          </Button>
        </div>
        <div className="flex items-start gap-8 self-stretch">
          <div className="flex w-[230px] flex-col border rounded-ms">
            <img className="w-[230px] h-[340px] rounded-t-2xl" src="" />
            <div className="flex min-h-[95px] p-2 rounded-t-md">
              <div className="flex items-start gap-[2px]">
                <Star color="yellow" fill="yellow" />
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex w-[230px] flex-col border rounded-ms">
            <img className="w-[230px] h-[340px] rounded-t-2xl" src="" />
            <div className="flex min-h-[95px] p-2 rounded-t-md">
              <div className="flex items-start gap-[2px]">
                <Star color="yellow" fill="yellow" />
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex w-[230px] flex-col border rounded-ms">
            <img className="w-[230px] h-[340px] rounded-t-2xl" src="" />
            <div className="flex min-h-[95px] p-2 rounded-t-md">
              <div className="flex items-start gap-[2px]">
                <Star color="yellow" fill="yellow" />
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex w-[230px] flex-col border rounded-ms">
            <img className="w-[230px] h-[340px] rounded-t-2xl" src="" />
            <div className="flex min-h-[95px] p-2 rounded-t-md">
              <div className="flex items-start gap-[2px]">
                <Star color="yellow" fill="yellow" />
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex w-[230px] flex-col border rounded-ms">
            <img className="w-[230px] h-[340px] rounded-t-2xl" src="" />
            <div className="flex min-h-[95px] p-2 rounded-t-md">
              <div className="flex items-start gap-[2px]">
                <Star color="yellow" fill="yellow" />
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
