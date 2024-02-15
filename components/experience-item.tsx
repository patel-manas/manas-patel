import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

type ExperienceItemProps = {
  title: string;
  companyName: string;
  companyUrl?: string;
  companyImg: StaticImageData;
  skills: any[];
  tenure: {
    from: string;
    to: string;
  };
  summary: string[];
  currentExp: string;
  handleExperienceChange: Function;
  styles?: {
    logoWidth: number;
  };
  showCompanyName?: boolean;
};

const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <Card className=" w-11/12 lg:w-2/3 my-4">
      <Collapsible
        className="w-full"
        open={props.companyName === props.currentExp}
        onOpenChange={props.handleExperienceChange(props.companyName)}
      >
        <CollapsibleTrigger className="w-full">
          <CardHeader className="w-full">
            <CardTitle className="w-full">
              <div className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-between">
                <div
                  className={`flex justify-start items-center w-${
                    props?.styles?.logoWidth || 40
                  } h-auto ${
                    props.showCompanyName ? "flex-col gap-4 pl-4" : ""
                  }`}
                >
                  <Image
                    src={props.companyImg}
                    alt={props.companyName}
                    className="w-full h-full relative"
                  />
                  {props.showCompanyName && <span>{props.companyName}</span>}
                </div>
                <div>{props.title}</div>
              </div>
            </CardTitle>
            <CardDescription className="flex justify-center md:justify-end">
              {props.tenure.from} to {props.tenure.to}
            </CardDescription>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <ul className=" list-disc flex gap-4 flex-col mx-4">
              {props.summary.map((sum) => (
                <li key={sum}>
                  <p>{sum}.</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <footer className="flex justify-start gap-8 ml-4 flex-wrap w-full">
              {props.skills.map((Skill, index) => (
                <span key={index}>
                  <Skill className="h-[2.5rem] w-[2.5rem]" />
                </span>
              ))}
              <span className="ml-auto">
                <a
                  href={props.companyUrl ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="h-[2rem] w-[2rem]" />
                </a>
              </span>
            </footer>
          </CardFooter>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ExperienceItem;
