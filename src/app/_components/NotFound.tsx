import React from "react";
import notFound from "../../../public/urban-no-data-found-3.png";
import Image from "next/image";

export const NotFound = () => {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="flex flex-col items-center gap-7">
        <Image src={notFound} alt="not-found-seaerch" />
        <h4 className="text-3xl text-neutral-500">
          Sorry, no task found that matches the search filters.
        </h4>
      </div>
    </div>
  );
};
