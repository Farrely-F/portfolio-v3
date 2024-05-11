"use client";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import Image from "next/image";
import Section from "@/components/layouts/Section";
import certificates from "@/constants/certificate";
import experiences from "@/constants/experience";

export default function Experience() {
  const [activeExp, setActiveExp] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experiences = document.querySelectorAll(".experience");
      let foundActive = false;

      if (experiences) {
        experiences.forEach((exp) => {
          const rect = exp.getBoundingClientRect();

          if (rect.top <= 200) {
            const id = exp.getAttribute("id");
            setActiveExp(id);
            foundActive = true;
          }
        });

        if (!foundActive) {
          setActiveExp(null);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Section id="experience" className="scroll-m-20">
        <div className="grid w-full grid-cols-10 place-content-start gap-y-12 md:min-h-[60dvh]">
          <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/11]">
            <div className="mx-auto w-fit text-center">
              <p className="text-balance text-sm">BEHOLD! LET ME SHOW YOU..</p>
              <h2 className="text-3xl font-bold md:text-5xl">
                My {'"'}Professional{'"'} Journey
              </h2>
            </div>
            <section id="timeline">
              <div className="mx-auto flex w-full max-w-6xl justify-center">
                <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                  <div className="mx-auto w-full max-w-3xl">
                    <div className="-my-6">
                      {experiences.map((exp, index) => (
                        <div
                          key={exp.date}
                          className="experience group relative py-6 pl-8 sm:pl-32"
                          id={exp.company}
                        >
                          <p className="mb-1 text-xs font-medium uppercase sm:mb-0">
                            {exp.role}
                          </p>
                          <div
                            className={`mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem] ${activeExp === exp.company ? "after:bg-purple-800 after:shadow-[0_0_16px_3px_#4f46e5]" : "after:bg-slate-800"}`}
                          >
                            <p className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                              {exp.date}
                            </p>
                            <h3
                              className={`font-bold ${index === experiences.length - 1 ? "animate-text bg-gradient-to-r from-slate-600 via-slate-100 to-slate-600 bg-clip-text text-3xl font-black text-transparent" : "text-xl"}`}
                            >
                              {exp.company}
                            </h3>
                          </div>
                          <p className="font-sans text-slate-500">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="certifications" className="w-full space-y-8">
              <div className="mx-auto w-fit text-center">
                <p className="text-balance text-sm">
                  NOT JUST A REGULAR CODER,
                </p>
                <h2 className="text-3xl font-bold md:text-5xl">
                  I{"'"}m a Certified Front End Wizzard!
                </h2>
              </div>
              <div className="w-full">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "center",
                  }}
                >
                  <CarouselContent className="lg:-space-x-[calc(90vw/3.5)]">
                    {certificates.map((cert, index) => (
                      <CarouselItem key={index}>
                        <div
                          className={`mx-auto aspect-video w-full max-w-xl transition-all duration-500 ease-in-out ${index + 1 === current ? "" : "scale-90"}`}
                        >
                          <figure className="relative h-full w-full">
                            <Image
                              src={cert.url}
                              alt={cert.title}
                              fill
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute right-2 top-2 hidden max-w-md flex-wrap gap-2 md:flex">
                              {cert.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="rounded-full bg-violet-950 px-2 text-xs text-white"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </figure>
                          {index + 1 === current && (
                            <div className="mt-2">
                              <h3 className="text-lg text-white">
                                {cert.title}
                              </h3>
                              <p>{cert.issuer}</p>
                              <div className="mt-2 flex max-w-sm flex-wrap gap-2 md:hidden">
                                {cert.skills.map((skill, index) => (
                                  <span
                                    key={index}
                                    className="rounded-full bg-violet-950 px-2 text-xs text-white"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                    {/* See More */}
                    <CarouselItem>
                      <div
                        className={`mx-auto aspect-video w-full max-w-xl transition-all duration-500 ease-in-out`}
                      >
                        <figure className="mask-image relative h-full w-full">
                          <Image
                            src={`https://ik.imagekit.io/xdxrivbja/Portfolio%20Assets/Certificates/Screenshot%202024-05-06%20223137.png?updatedAt=1715009521343`}
                            alt={"See More"}
                            fill
                            className="h-full w-full"
                          />
                          <div className="absolute inset-0 bg-black/70 grayscale backdrop-blur-sm"></div>
                          <a
                            href="https://drive.google.com/drive/folders/1ybb3l3OEPSw2xPOODkirDbwtJ59uSXOo?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2 rounded-lg bg-white p-2 text-sm font-bold uppercase text-black transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-[0_0_8px_3px_rgba(255,255,255,0.5)] focus:scale-90"
                          >
                            SEE MORE
                          </a>
                        </figure>
                      </div>
                      <div className="mx-auto mt-2 max-w-xl">
                        <h3 className="text-lg text-white">Not enough?</h3>
                        <p>More certificate above</p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
