"use client";
import { NavigationBar } from "@/component";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MovieDetailFrame } from "@/component/MovieDetails/MovieDetailTrailer";
import axios from "axios";
import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { SimilarMovies } from "@/component/MovieDetails/SimilarMovie";
import { StaffInfo } from "@/component/MovieDetails/StaffInfo";
// type MovieDetailData = {
//   name: string;
//   id: number;
//   original_title: string;
//   published_at: string;
// };

export default function Detail({}) {
  const { id } = useParams();

  return (
    <div className="flex w-full h-100vh flex-col">
      {/* <div className="flex w-full h-full flex-col gap-6 "></div> */}
      <MovieDetailFrame id={id} />
      <StaffInfo id={id} />
      <SimilarMovies id={id} />
    </div>
  );
}
