import React from "react";
import { Gradient } from "./gradient";
import styles from "@/app/page.module.css";
import me from "@/public/images/abput_image.jpg";
import Image from "next/image";
import { intro2 } from "config/info";

export default function Tools() {
  return <></>;
  return (
    <div className="md:mt-[15rem] -mt-[2rem] mx-auto items-center justify-center max-w-7xl">
      <div className="mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 max-w-6xl relative">
        <Gradient className={styles.logoGradient2} conic />
        {/* <div className="absolute top-0 left-1/2 inset-0 transform -translate-x-1/2 translate-y-4">
          <Image
            src={me}
            height={400}
            width={400}
            className="pl-10 md:block mt-6 mx-auto hidden rounded-full overflow-hidden md:border-r-[14px] hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
            alt="my picture"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 inset-0 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={me}
            height={300}
            width={300}
            className="mx-auto p-6 md:hidden block pt-12 overflow-hidden md:border-r-[14px] hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
            alt="my picture"
          />
        </div> */}
      </div>
    </div>
  );
}
