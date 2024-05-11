"use client";

import { Button } from "@/components/ui/button";
import Dots from "@/components/ui/dots";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layouts/Section";
import { socmedMenus } from "@/constants/menu";

export default function HeroSection() {
  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const href = event.currentTarget.href;
    const hashIndex = href.indexOf("#");

    if (hashIndex !== -1) {
      const id = href.slice(hashIndex + 1);
      const element = document.getElementById(id);

      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Section className="relative">
        <div className="absolute left-0 top-32 z-[-1] w-full">
          <Image
            src={
              "https://repository-images.githubusercontent.com/287075113/503c4480-0cab-11eb-94dc-b3bf98b1ad1b"
            }
            priority
            alt="profile image"
            width={512}
            height={512}
            className="mask-hero-image h-[60vh] w-full object-cover object-top opacity-5"
            draggable={false}
          />
        </div>
        <Dots className="left-0 top-0" />
        <Dots className="-left-14 top-40 -rotate-90" />
        <Dots className="-right-0 top-0 hidden rotate-90 lg:grid" flip />
        <Dots className="bottom-4 right-0" flip />
        <div className="grid w-full grid-cols-10 place-content-center gap-y-8 md:min-h-[60dvh]">
          <div className="col-[1/11] h-full w-full space-y-4 md:col-[1/6]">
            <div>
              <p className="text-xs">HELLO WORLD,</p>
              <h1 className="text-3xl font-bold">It{`'`}s Me Farrel</h1>
            </div>
            <p className="font-sans">
              Front End wizzard that ready to turn your dream into reality.
              <br />
              Together, lets build an App that{`'`}s scale.
            </p>
            <div className="flex gap-4">
              {socmedMenus.map((menu) => (
                <a
                  key={menu.label}
                  href={menu.href}
                  className="border/1 group flex origin-left items-center gap-2 rounded-full py-2 ring-white transition-all duration-500 ease-in-out hover:px-4 hover:ring-1"
                >
                  {<menu.icon size={16} />}
                  <p className="invisible w-0 text-xs transition-transform duration-300 ease-in-out group-hover:visible group-hover:w-fit">
                    {menu.label}
                  </p>
                </a>
              ))}
            </div>
            <Link
              className="inline-flex"
              href="/#contact"
              onClick={handleMenuClick}
              shallow
            >
              <Button className="text-xs transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_12px_hsl(0,0%,100%,0.08)] active:scale-95 active:bg-gray-100">
                GET TO KNOW
              </Button>
            </Link>
          </div>
          <div className="col-[1/11] h-full w-full md:col-[6/11]">
            <pre className="hide-scrollbar w-full overflow-x-scroll rounded-md border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
              <span className="text-xs">{`//profile.json`}</span>
              <code>
                <span className="font-bold">
                  {`

  const farrel = {
  "name": "Farrel",
  "age": 24,
  "country": "Indonesia",
  "hobby": "Coding",
  }
  `}
                </span>
              </code>
            </pre>
          </div>
        </div>
      </Section>
    </>
  );
}
