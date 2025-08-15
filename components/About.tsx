import Image from "next/image";
import { GradualSpacing } from "./ui/GradualSpacing";
import { ShineBorder } from "./ui/ShineBorder";
import { aboutData } from "@/data";

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full py-20 container">
        <div className="mb-12">
          <GradualSpacing text="About Me" />
        </div>
        
        <ShineBorder
          className="relative w-full flex-col overflow-hidden border rounded-[2rem] !bg-[#020617] md:shadow-xl p-6 sm:p-12"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center w-full font-cairo">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="relative rounded-full overflow-hidden size-48 sm:size-64 lg:size-96 mx-auto">
                  <Image
                    src="/1728632322492.jpg"
                    alt="Alaa Eldeyn"
                    width={500}
                    height={500}
                    className="rounded-full w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 mx-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left space-y-6 w-full">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                  Frontend Developer
                </h3>
                <p className="leading-relaxed text-base md:text-lg text-gray-300">
                  I&apos;m <span className="text-white font-semibold">Alaa Eldeyn</span>, 
                  an Agile Front-End Developer with expertise in designing and 
                  developing scalable websites and dashboards that support the 
                  digital growth of leading brands in Egypt, Turkey, and currently 
                  Saudi Arabia.
                </p>
                <p className="leading-relaxed text-sm md:text-base text-gray-400">
                  I specialize in creating dynamic, responsive user interfaces 
                  with a strong focus on performance optimization and user-centered 
                  designs. My goal is to craft modern, fast, and secure applications 
                  that enhance user engagement and help businesses achieve their goals.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-5 pt-3 lg:pt-5 border-t border-gray-700/50 z-50 relative soft">
                {aboutData.map((item, i) => (
                  <div
                    key={i}
                    className={`group relative p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${i==0?"col-span-2 lg:col-span-1":""}`}
                  >
                    <div className="relative z-10 text-center space-y-2">
                      <div className="text-3xl md:text-4xl font-bold text-purple-400 group-hover:text-orange-400 transition-colors duration-300">
                        +{item.number}
                      </div>
                      <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
    </section>
  );
}

export default About;
