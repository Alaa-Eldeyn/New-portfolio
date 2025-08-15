import { FaArrowRight, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

function Footer() {
  return (
    <div className="relative flex mt-14 h-[500px] w-full flex-col items-center justify-center !overflow-hidden rounded-lg md:shadow-xl">
      <footer className="w-full pt-20 pb-10 container z-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200  my-3 md:mt-10 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <Link target="_blank" href="https://wa.me/+201010385495?text=السلام عليكم بشمهندس علاء">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
        <div className="flex mt-16 md:flex-row flex-col gap-5 justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light flex items-center gap-2 group">
            Follow Me On Social Media
            <span className="group-hover:translate-x-3 transition group-hover:text-blue-600">
              <FaArrowRight />
            </span>
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link
                href={info.link}
                target="_blank"
                key={info.id}
                className={`w-10 h-10 cursor-pointer hover:scale-125 hover:bg-opacity-100 transition-all duration-200 ease-in-out flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ${info.hoverColor}`}
              >
                {info.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <div className="w-full absolute left-0 -bottom-0 lg:-bottom-32 min-h-60 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
    </div>
  );
}
export default Footer;
