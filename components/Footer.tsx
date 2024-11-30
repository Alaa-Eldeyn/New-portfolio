import { FaArrowRight, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { RetroGrid } from "./ui/RetroGrid";
import { socialMedia } from "@/data";
import Link from "next/link";

function Footer() {
  return (
    <div className="z-10 flex mt-20 h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:alaa.eldeyn@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light flex items-center gap-2 group">
            Follow Me On Social Media
            <span className="group-hover:translate-x-3 transition">
              <FaArrowRight />
            </span>
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link
                href={info.link}
                target="_blank"
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                {info.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <RetroGrid />
    </div>
  );
}
export default Footer;