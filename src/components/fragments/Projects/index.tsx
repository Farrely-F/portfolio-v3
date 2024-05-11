import Image from "next/image";
import Section from "@/components/layouts/Section";
import { projects } from "@/constants/menu";

export default function Projects() {
  return (
    <>
      <Section id="projects" className="scroll-m-20">
        <div className="grid w-full grid-cols-10 place-content-start gap-y-12 md:min-h-[60dvh]">
          <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/11]">
            <div className="w-fit">
              <p className="text-balance text-sm">
                LOREM IPSUM, BEAR THE WITNESS OF MY CODE 🧙‍♂️
              </p>
              <h2 className="text-5xl font-bold">Projects Showcase</h2>
              <p className="mt-6 max-w-sm font-sans">
                Take a look closer to my projects. Here are some of my project
                that I{"'"}ve been done
              </p>
            </div>
          </div>
          <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/11]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={
                    project.href.preview
                      ? project.href.preview
                      : project.href.github || ""
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`${
                    index === 1 || index === 3 || index === 7
                      ? "lg:col-span-2"
                      : index === 5
                        ? "lg:row-span-2"
                        : ""
                  }`}
                >
                  <div className="group relative h-full min-h-[200px] w-full overflow-clip rounded-md border border-white/10 bg-white/10 p-4">
                    <Image
                      src={project.thumbnail}
                      fill
                      alt={project.title}
                      className="mx-auto h-full w-full object-cover object-top opacity-25 transition-all duration-700 ease-in-out group-hover:scale-105"
                      sizes="(min-width: 1540px) 535px, (min-width: 1040px) calc(50vw - 105px), (min-width: 780px) calc(100vw - 193px), calc(100vw - 49px)"
                    />
                    <div className="absolute inset-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-black via-black/70 to-black/20 p-4 transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 lg:invisible lg:opacity-0">
                      <h3 className="font-bold uppercase group-hover:text-white">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
