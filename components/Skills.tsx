"use client";
import { skills } from "@/data";
import { GradualSpacing } from "./ui/GradualSpacing";
import SkillBox from "./skills/SkillBox";

function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <GradualSpacing text="My Skills" className="py-10" />
        <div className="grid grid-cols-4 gap-x-10 gap-y-14 py-5">
          {skills.map((skill, i) => (
            <SkillBox skill={skill} i={i} key={skill.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
