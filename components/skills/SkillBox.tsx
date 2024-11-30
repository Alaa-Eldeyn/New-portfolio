"use client";
import { motion } from "framer-motion";
import { BorderBeam } from "../ui/BorderBeam";

function SkillBox({
  skill,
  i,
}: {
  skill: {
    id: number;
    text: string;
    icon: any;
  };
  i: number;
}) {
  const welcomeTitle = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={welcomeTitle}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      exit={{ y: "-100%", opacity: 0 }}
      className=" bg-[#0E162B] relative z-10 flex flex-col items-center justify-center p-5 rounded-sm h-28 text-center border border-transparent hover:border-[#1F2937] border-opacity-50 transition !duration-100"
    >
      <BorderBeam size={80} duration={5} delay={9} />
      <span className="absolute -top-8 !size-16 flex justify-center items-center text-[40px] p-2 rounded-full ">
        {skill.icon}
      </span>
      <span className="!text-xl pt-2">{skill.text}</span>
    </motion.div>
  );
}
export default SkillBox;