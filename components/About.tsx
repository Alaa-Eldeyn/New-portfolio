import Image from "next/image";
import { GradualSpacing } from "./ui/GradualSpacing";
import { ShineBorder } from "./ui/ShineBorder";
import { NumberTicker } from "./ui/NumberTicker";

function About() {
  const date = new Date();
  const yearsOfExperience = date.getFullYear() - 2023;
  return (
    <section id="about" >
      <div className="flex flex-col items-center justify-center w-full py-20 container">
        <GradualSpacing text="About Me" />
        <ShineBorder
          className="relative w-full flex-col overflow-hidden rounded-lg border !bg-[#020617] md:shadow-xl p-10"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-10 flex-col items-center md:items-start text-center md:text-start md:flex-row w-full">
            <div className="rounded-full overflow-hidden !size-60">
              <Image
                src="/1728632322492.jpg"
                alt="Alaa Eldeyn"
                width={400}
                height={400}
                className="rounded-full w-full object-cover"
                priority
              />
            </div>
            <div className="!leading-relaxed text-md md:text-lg flex-1 text-justify">
              <p>
                I’m Alaa Eldeyn, an Agile Front-End Developer with over 2 years
                of experience in designing and developing scalable websites and
                dashboards that support the digital growth of leading brands in
                Egypt, Turkey, and currently Saudi Arabia. I specialize in
                creating dynamic, responsive user interfaces with a strong focus
                on performance optimization and user-centered designs. My goal
                is to craft modern, fast, and secure applications that enhance
                user engagement and help businesses achieve their goals. I stay
                up-to-date with the latest development tools to ensure I deliver
                cutting-edge web applications.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-10 mt-5 w-full justify-between">
                <div className="flex flex-col items-center flex-1 justify-start">
                  <span className="text-3xl font-bold text-black dark:text-white">
                    +<NumberTicker value={yearsOfExperience} />
                  </span>
                  <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                    Years of Experience
                  </span>
                </div>
                <div className="flex flex-col items-center flex-1 justify-start">
                  <span className="text-3xl font-bold text-black dark:text-white">
                    +<NumberTicker value={15} />
                  </span>
                  <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                    Project Completed
                  </span>
                </div>
                <div className="flex flex-col items-center flex-1 justify-start">
                  <span className="text-3xl font-bold text-black dark:text-white">
                    +<NumberTicker value={5} />
                  </span>
                  <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                    Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
export default About;