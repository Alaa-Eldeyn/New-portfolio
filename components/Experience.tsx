import React from "react";
import { Timeline } from "./ui/timeline";
import { GradualSpacing } from "./ui/GradualSpacing";
import Image from 'next/image';

export default function TimelineDemo() {
    const data = [
        {
            title: "2025 - Now",
            content: (
                <div>
                    <h3 className="text-lg lg:text-4xl font-bold text-neutral-900 dark:text-white">
                        ITLegend Company
                    </h3>
                    <ul className="list-none ms-2 mt-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-3">
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />
                            Led the design and development of the company’s new platform, delivering a modern, responsive, and high-performance user experience.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Implemented React, Next.js, Redux, and Context API to build dynamic, scalable UI components.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Collaborated closely with the back-end team to ensure seamless API integration and improve overall data flow.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Optimized website performance, achieving faster page load times and measurable SEO improvements.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Introduced best practices in front-end architecture to ensure maintainability and scalability for future features.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Actively contributed to UI/UX enhancements, improving user engagement and client satisfaction.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024 - 2025",
            content: (
                <div>
                    <h3 className="text-lg lg:text-4xl font-bold text-neutral-900 dark:text-white">
                        Progo Company
                    </h3>
                    <ul className="list-none ms-2 mt-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-3">
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Developing, designing, and optimizing websites for performance & responsive design.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Utilized React, Next.js, Redux, Context API for dynamic UI.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Integrated front-end with back-end to improve data flow and user experience.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Improved page load time & SEO results.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2023 - 2024",
            content: (
                <div>
                    <h3 className="text-lg lg:text-4xl font-bold text-neutral-900 dark:text-white">
                        ESH Company
                    </h3>
                    <ul className="list-none ms-2 mt-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 space-y-3">
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Provided technical support in Desktop Apps, Django, AI, Cyber Security, and Graphic Design.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Contributed to increasing course ratings through positive feedback.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Added new content in Frontend development.</li>
                        <li className="flex items-center gap-5 py-1 group">
                            <Image
                                alt="Arrow"
                                src="/arrow.png"
                                width={20}
                                height={20}
                                className=" group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
                            />Created innovative educational tasks for students.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div id="experience" className="relative w-full overflow-clip">
            <GradualSpacing text="My Experience" className="mb-10" />
            <Timeline data={data} />
        </div>
    );
}
