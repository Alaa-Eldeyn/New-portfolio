import { MagicCard } from "./ui/Card";

function Projects() {
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
        Magic
      </MagicCard>
      <MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
        Card
      </MagicCard>
    </div>
  );
}
export default Projects;
