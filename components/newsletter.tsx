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
import { Input } from "./ui/input";
import { Textarea2 } from "./ui/Textarea2";

export default function NewsLetter() {
  return (
    <div className="md:mx-auto md:ml-12 ml-0 flex lg:flex-row max-w-8xl flex-col gap-10">
      <div className="md:mt-[7rem] mt-[3rem] max-w-1/2">
        <div className="md:pr-4 md:p-0 p-6 lg:p-6 mx-auto">
          <h2 className="flex mb-4 md:text-6xl text-4xl items-center font-display bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
            Reach Out to Me{" "}
          </h2>
          <p className="dmsans mb-6 md:text-lg text-md">
            Feel free to reach out to me and and we can discuss a lot of things
            😀
          </p>
          <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-start md:gap-8">
            <Input2 placeholder="Name" className="w-[300px]" />
            <Input2 placeholder="Email" className="w-[300px]" />
            <Input2
              placeholder="How can i help you ?"
              className="hidden md:block w-[300px] md:w-[700px]"
            />
            <Textarea2 placeholder="How can i help you ?" />
            <Button variant="outline">Reach Out</Button>
          </div>
        </div>
      </div>
      <div className=" max-w-1/2 md:mr-[6rem] mr-[0rem] md:p-0 p-5 mb-[5rem] md:mt-[7rem] mt-[1rem] md:max-w-2xl rounded-xl">
        <Gradient4 className={styles.logoGradient4} conic />
      </div>
    </div>
  );
}
