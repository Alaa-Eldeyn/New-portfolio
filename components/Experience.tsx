import React from "react";
import { Timeline } from "./ui/timeline";
import { GradualSpacing } from "./ui/GradualSpacing";

export default function TimelineDemo() {
    const data = [
        {
            title: "07/2024 - Present",
            content: (
                <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        Progo Company – Remote
                    </h3>
                    <ul className="list-disc ml-4 mt-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
                        <li>Developing, designing, and optimizing websites for performance & responsive design.</li>
                        <li>Utilized React, Next.js, Redux, Context API for dynamic UI.</li>
                        <li>Integrated front-end with back-end to improve data flow and user experience.</li>
                        <li>Improved page load time & SEO results.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "01/2024 - Present",
            content: (
                <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        Projects – Freelance
                    </h3>
                    <ul className="list-disc ml-4 mt-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
                        <li>Completed multiple web projects for various clients with improved performance & UX.</li>
                        <li>Collaborated with teams to apply Lazy Loading & Code Splitting.</li>
                        <li>Delivered creative UI design solutions with positive client feedback.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "06/2023 - 07/2024",
            content: (
                <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        ESH Company – Assiut
                    </h3>
                    <ul className="list-disc ml-4 mt-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-1">
                        <li>Provided technical support in Desktop Apps, Django, AI, Cyber Security, and Graphic Design.</li>
                        <li>Contributed to increasing course ratings through positive feedback.</li>
                        <li>Added new content in Frontend development.</li>
                        <li>Created innovative educational tasks for students.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <GradualSpacing text="My Experience" className="mb-10" />
            <Timeline data={data} />
        </div>
    );
}
