import Image from "next/image";
import Section from "@/components/layouts/Section";
import Dots from "@/components/ui/dots";
import { techStacks } from "@/constants/menu";

export default function TechStacks() {
  return (
    <>
      <Section
        id="tech-stacks"
        className="relative scroll-m-10 bg-gradient-to-br from-white/5 from-[0.005%] via-black to-white/10 to-[120%] py-12"
      >
        <Dots className="left-0 top-8" />
        <Dots className="bottom-8 right-0" flip />
        <div className="grid w-full grid-cols-10 place-content-start gap-y-12 md:min-h-[60dvh]">
          <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/11]">
            <p className="text-balance text-end text-sm">
              LET ME INTRODUCE YOU MY ARSENAL 🪄
            </p>
            <div>
              <h2 className="text-end text-5xl font-bold">Tech Stacks</h2>
              <p className="text-end font-sans">
                There are some tech stacks I have used. I love creating{" "}
                <span className="line-through">bugs</span> apps with those
                tools.
              </p>
            </div>
          </div>
          <div className="col-[1/11] h-full w-full place-content-end space-y-4 text-xs lg:col-[1/11]">
            {techStacks.map((stack) => (
              <div key={stack.category}>
                <p className="mb-2">{stack.category.toUpperCase()}</p>
                <div className="flex flex-wrap gap-4">
                  {stack.items.map((item) => (
                    <div
                      key={item.name}
                      className="group grid size-24 place-content-center space-y-2 rounded-xl border border-white/5 p-4 transition-all duration-500 ease-in-out hover:border-0 hover:bg-white/5"
                    >
                      <Image
                        src={item.icon}
                        width={40}
                        height={40}
                        alt="image of sublimetext"
                        className="mx-auto size-10 object-contain"
                      />
                      <p className="text-center group-hover:text-white">
                        {item.name.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
