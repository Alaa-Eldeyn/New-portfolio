import { skills } from "@/data";
import { GradualSpacing } from "./ui/GradualSpacing";
import { BorderBeam } from "./ui/BorderBeam";

function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container">
        <GradualSpacing text="My Skills" className="mb-10" />

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-x-6 gap-y-12"
          role="list"
          aria-label="Skills"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              role="listitem"
              className="group relative rounded-2xl border border-gray-800/80 bg-[#0B1222]/70 backdrop-blur-sm p-6 text-center font-cairo transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2),0_8px_30px_rgba(0,0,0,0.35)]"
              aria-label={typeof skill.text === "string" ? skill.text : undefined}
            >
              
              <span className="absolute bg-[#0B1222] -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center size-14 rounded-full ring-1 ring-purple-500/30 shadow-lg text-3xl text-purple-300 transition-transform duration-300 group-hover:scale-105">
                {skill.icon}
                <BorderBeam size={40} duration={3} />
              </span>

              <span className="mt-6 block text-sm sm:text-base font-medium text-gray-200 group-hover:text-white">
                {skill.text}
              </span>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
