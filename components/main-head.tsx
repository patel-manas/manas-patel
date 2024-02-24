import Image from "next/image";
import React from "react";
import NavMain from "./nav";
import Link from "next/link";
import { SocialMediaIcons } from "@/components/social-icons";
import styles from "@/app/page.module.css";
import { Gradient } from "./gradient";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { full_name, tag_line } from "config/info";

function MainHead() {
  return (
    <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-4 md:ml-12 max-h-screen max-w-screen">
      <NavMain />
      <div className="flex flex-row 2xl:justify-center">
        <div
          className=" w-max flex flex-col items-center justify-center pl-5 absolute top-1/2 left-1/2 inset-0 transform -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 10 }}
        >
          <p
            className="md:text-4xl sm:text-4xl dark:text-white/90 text-black flex flex-col text-4xl lg:text-5xl 2xl:text-5xl  md:mt-20 lg:mt-12 xl:text-6xl font-display max-w-[80%] text-left mb-4"
            aria-label="Hello! I am Manas Patel"
            style={{ zIndex: 10 }}
          >
            Hello! I'm
          </p>
          <h1
            className="md:text-[4.5rem] mt-2 md:flex-row sm:text-6xl dark:bg-clip-text dark:bg-gradient-to-b from-teal-400 to-blue-400 dark:text-transparent text-purple-600 flex flex-col text-6xl lg:text-[5.2rem] 2xl:text-[7rem] xl:text-8xl font-display 2xl:max-w-[100%] xl:max-w-6xl sm:max-w-3xl max-w-md md:max-w-7xl lg:max-w-6xl text-left mb-4"
            aria-label={`Hello! I am ${full_name}`}
            style={{ zIndex: 10 }}
          >
            {full_name}
          </h1>

          <p
            className="home-title max-w-screen poppins mr-5 md:mr-0 font-pops text-lg md:text-lg mt-5 2xl:text-xl xl:text-xl  mb-4  text-left"
            aria-label={tag_line}
          >
            {tag_line}
          </p>
          <SocialMediaIcons />
          <Link href="/resume.pdf" target="_blank" className="mt-8">
            <Button
              className="glow-button hover:border text-md poppins duration-300 hover:bg-white hover:text-black dark:hover:invert"
              size="lg"
            >
              View Resume
              <Eye className="ml-2" />
            </Button>
          </Link>
          <Gradient className={styles.logoGradient2} conic />
        </div>

        <div className="flex justify-center md:block hidden lg:mt-12 md:mt-28 ">
          <div
            className={cn(
              styles.logos,
              "2xl:right-12 2xl:pt-40 xl:pl-44 pl-32 pt-20 "
            )}
            style={{ zIndex: -10 }}
          >
            <div className={cn(styles.circles, "2xl:block hidden xl:block")}>
              <Image
                alt="Circles"
                height={1414}
                src="circles.svg"
                width={1414}
                className="invert 2xl:block hidden xl:block pl-36 pt-52 dark:invert-0 "
                style={{ overflow: "hidden" }}
                priority={true}
              />
            </div>
            <div className={cn(styles.circles2, "2xl:hidden xl:hidden block")}>
              <Image
                alt="Circles"
                height={1214}
                src="circles.svg"
                width={1214}
                className="invert 2xl:hidden xl:hidden sm:hidden hidden lg:block md:block pl-10 pt-10 dark:invert-0 "
                style={{ overflow: "hidden" }}
                priority={true}
              />
            </div>
            <div className="md:block hidden">
              <Gradient className={styles.logoGradient} conic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
