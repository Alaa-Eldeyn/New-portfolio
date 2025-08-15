import { projects } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

function Projects() {
  return (
    <section id="projects">
      <div className="container my-10 ">
        <GradualSpacing text="Recent Projects" className="pt-14" />
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-5 sm:mt-10">
          {projects.map((project) => (
            <MagicCard key={project.id} className="max-w-lg mx-auto">
              <div className="flex flex-col items-center w-full h-full transform hover:shadow-xl transition-shadow duration-500">
                <Link target="_blank" rel="noopener noreferrer" href={project.link} className="relative w-full h-80 rounded-sm overflow-hidden cursor-pointer">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    priority
                    className="rounded w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="pt-5">
                  <Link target="_blank" rel="noopener noreferrer" href={project.link} className="text-2xl font-bold line-clamp-1 h-[32px]">
                    {project.title}
                  </Link>
                  <p className="mt-3 text-sm text-white-100 line-clamp-4 h-[80px]">
                    {project.des}
                  </p>
                  <div className="flex justify-between items-center gap-x-3 mt-5">
                    <div className="flex -space-x-1 overflow-hidden ps-1 py-2">
                      {project.iconsList?.map((icon, index) => (
                        <div
                          key={index}
                          className="border rounded-full bg-gradient-to-r from-[#04071D] to-[#0C0E23] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 text-white-100 text-xs sm:text-lg">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.sourceCode}
                        className="flex items-center justify-center gap-1 hover:text-purple"
                      >
                        GitHub <FaLocationArrow />
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        className="flex items-center justify-center gap-1 hover:text-purple"
                      >
                        Demo <FaLocationArrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
          <div className="flex items-center justify-center mt-5">
            <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/Alaa-Eldeyn"}>
              <MagicButton
                title="View All Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
      </div>
    </section>
  );
}
export default Projects;
