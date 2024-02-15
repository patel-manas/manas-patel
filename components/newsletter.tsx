"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "./cardeffect";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Input2 } from "./ui/input2";
import { Gradient4 } from "./gradient";
import styles from "@/app/page.module.css";
import { PersonalBlogLink } from "config/info";

export default function NewsLetter() {
  return (
    <div className="md:mx-auto md:ml-12 ml-0 flex lg:flex-row max-w-8xl flex-col gap-10">
      <div className="md:mt-[7rem] mt-[3rem] max-w-1/2 mx-auto">
        <div className="md:pr-4 md:p-0 p-6 lg:p-6 mx-auto">
          <h2 className="flex mb-4 md:text-6xl text-4xl items-center font-display bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
            Dive into My Chronicles{" "}
          </h2>
          <p className="dmsans mb-6 md:text-lg text-md">
            Embark on a journey of knowledge with my exclusive newsletter. Stay
            ahead with captivating insights, thought-provoking interviews, and
            expert tips. Subscribe now for your regular dose of valuable content
            delivered straight to your inbox.
          </p>
          <Link href={PersonalBlogLink} className="group">
            <Button
              className="text-md poppins duration-100 hover:bg-white hover:text-black dark:hover:invert border border-black "
              size="lg"
            >
              Explore Articles{" "}
              <ArrowRight className="group-hover:opacity-100 delay-100 opacity-0 ml-1 duration-500" />
              <ChevronRight className="group-hover:opacity-0 duration-500 -ml-6" />
            </Button>
          </Link>

          <Link href={"/contact"} className="group ml-4">
            <Button
              className="text-md poppins duration-100 hover:bg-white hover:text-black dark:hover:invert border border-black "
              size="lg"
              variant="outline"
            >
              Contact Me{" "}
              <ArrowRight className="group-hover:opacity-100 delay-100 opacity-0 ml-1 duration-500" />
              <ChevronRight className="group-hover:opacity-0 duration-500 -ml-6" />
            </Button>
          </Link>
        </div>
      </div>
      <div className=" max-w-1/2 md:mr-[6rem] mr-[0rem] md:p-0 p-5 mb-[5rem] md:mt-[7rem] mt-[1rem] md:max-w-2xl rounded-xl">
        <Gradient4 className={styles.logoGradient4} conic />
      </div>
    </div>
  );
}
