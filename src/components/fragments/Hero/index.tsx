import Dots from "@/components/ui/dots";
import Image from "next/image";
import Navigate from "@/components/ui/modified-ui/navigate";
import Profile from "@/components/ui/animated/profile";
import Section from "@/components/layouts/Section";
import { socmedMenus } from "@/constants/menu";

export default function HeroSection() {
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
            <Navigate to="/#contact">GET TO KNOW</Navigate>
          </div>
          <div className="col-[1/11] h-full w-full md:col-[6/11]">
            <pre className="hide-scrollbar min-h-[297px] w-full overflow-x-scroll rounded-md border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
              {/* <span className="text-xs">{`//profile.json`}</span> */}
              <code>
                <Profile />
              </code>
            </pre>
          </div>
        </div>
      </Section>
    </>
  );
}
