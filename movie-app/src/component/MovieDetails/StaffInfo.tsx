"use client";

import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AllGenres } from "../AllGenres";

type CastData = {
  name: string;
};
type CrewData = {
  name: string;
  job: string;
  department: string;
};

type StaffInformation = {
  cast: CastData[];
  crew: CrewData[];
};

export const StaffInfo = ({ id }: { id: string }) => {
  const [crewCastInfo, setCrewCastInfo] = useState<StaffInformation>({
    cast: [],
    crew: [],
  });

  const fetchStaffInfo = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${id}/credits?language=en-US`
    );
    setCrewCastInfo(data);
  };

  useEffect(() => {
    fetchStaffInfo();
  }, []);

  return (
    <div className="flex flex-col w-full pt-8 items-start gap-6 pl-[180px] pr-[178px]">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
