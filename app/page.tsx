"use client";
import React from "react";
import NewsLetter from "@/components/newsletter";
import styles from "@/app/page.module.css";
import { Gradient } from "@/components/gradient";
import MainHead from "@/components/main-head";
import AboutMe from "@/components/about-me";
import Tools from "@/components/tools";
import Skills from "@/components/skills";
import SiteFooter from "@/components/site-footer";
import Experiences from "@/components/experience";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="2xl:mx-auto overflow-hidden">
        <div className="pl-0 md:pl-6 min-h-screen 2xl:min-h-[50rem]">
          <div className=" max-w-screen overflow-hidden">
            <Gradient className={styles.backgroundGradient} conic />
          </div>
          <MainHead />
        </div>
      </div>

      <section id="about">
        <AboutMe />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <Achievements /> */}
      <section id="experiences">
        <Experiences />
      </section>
      <section id="news_letter">
        <NewsLetter />
      </section>
      <section id="footer">
        <SiteFooter />
      </section>
    </>
  );
}
