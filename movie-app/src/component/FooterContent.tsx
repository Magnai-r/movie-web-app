import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
export const FooterContent = () => {
  return (
    <div className="flex w-full h-70 py-10 justify-center items-start bg-[#4338CA]">
      <div className="flex w-full px-20 gap-30">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Film color="white" size={20} />
            <p className="text-s text-[#FAFAFA] font-bold italic text-base">
              Movie Z
            </p>
          </div>
          <p className="text-sm text-[#FAFAFA] font-normal">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="flex w-full justify-end items-start gap-24">
          <div className="flex h-50 flex-col gap-3 items-start">
            <p className="text-sm text-[#FAFAFA] font-normal">
              Contact Information
            </p>
            <div className="flex flex-col items-start gap-6">
              <div className="flex gap-3">
                <Mail color="white" size={16} />
                <div className="">
                  <p className="text-sm text-[#FAFAFA] font-normal">Email: </p>
                  <p className="text-sm text-[#FAFAFA] font-normal">
                    support@movieZ.com
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone color="white" size={16} />
                <div className="">
                  <p className="text-sm text-[#FAFAFA] font-normal">Phone: </p>
                  <p className="text-sm text-[#FAFAFA] font-normal">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-[#FAFAFA] font-normal">Follow us </p>
            <div className="flex items-center gap-3">
              <p className="text-sm text-[#FAFAFA] font-normal">Facebook </p>
              <p className="text-sm text-[#FAFAFA] font-normal">Instagram </p>
              <p className="text-sm text-[#FAFAFA] font-normal">Twitter </p>
              <p className="text-sm text-[#FAFAFA] font-normal">Youtube </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
