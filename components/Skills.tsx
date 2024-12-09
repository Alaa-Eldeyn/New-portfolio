import { skills } from "@/data";
import { GradualSpacing } from "./ui/GradualSpacing";
import { BorderBeam } from "./ui/BorderBeam";

function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <GradualSpacing text="My Skills" className="py-10" />
        <div className="flex gap-x-5 gap-y-10 flex-wrap sm:gap-x-10 sm:gap-y-14 py-5">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="font-cairo bg-[#0E162B] min-w-[35vw] sm:min-w-52 flex-1 relative z-10 flex flex-col items-center justify-center p-5 rounded-sm h-28 text-center border border-transparent hover:border-[#1F2937] border-opacity-50 transition !duration-100"
            >
              <BorderBeam size={80} duration={7} delay={9} />
              <span className="absolute -top-8 !size-16 flex justify-center items-center text-[40px] p-2 rounded-full ">
                {skill.icon}
              </span>
              <span className="text-md sm:!text-xl pt-2">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
