import { cn } from "@/lib/utils";
import { Marquee } from "./ui/Marquee";
import SparklesText from "./ui/SpaklesText";
import { GradualSpacing } from "./ui/GradualSpacing";
import { reviews } from "@/data";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <div
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 font-cairo flex flex-col items-center justify-center text-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <SparklesText text={name} />
      <div className="mt-5">{body}</div>
    </div>
  );
};

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
    >
      <GradualSpacing text="Testimonials" className="mb-5" />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black-100"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black-100"></div>
    </div>
  );
}
