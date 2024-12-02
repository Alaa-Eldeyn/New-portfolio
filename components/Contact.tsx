"use client";
import { GradualSpacing } from "./ui/GradualSpacing";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/data";
import { ShineBorder } from "./ui/ShineBorder";
import Link from "next/link";

function Contact() {
  type ContactType = z.infer<typeof contactSchema>;
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });

  const handleContact = async () => {
    try {
      await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getValues()),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error("Error sending contact request:", error);
    }
  };

  return (
    <div id="contact" className="container">
      <GradualSpacing text="Contact me" className="my-10" />
      <div className="flex gap-5 justify-around flex-col-reverse sm:flex-row">
        <div className="mt-5">
          <h1 className="text-xl sm:text-5xl mb-5 dark:text-white-100 font-bold tracking-tight">
            Send Us a Note and Initiate the Dialogue!
          </h1>
          <p className="text-normal text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to connect, reach out and let’s make it happen.
          </p>

          <div className="flex items-center mt-12 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Egypt, Cairo
            </div>
          </div>

          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              <Link
                href={
                  "https://wa.me/+201010385495?text=السلام عليكم بشمهندس علاء"
                }
                className="hover:underline hover:text-white transition-colors"
              >
                (+20) 01010385495
              </Link>
            </div>
          </div>

          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              <Link
                href={"mailto:alaa.eldeyn@gmail.com"}
                className="hover:underline hover:text-white transition-colors"
              >
                alaa.eldeyn@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <ShineBorder
          className="p-1  w-full max-w-[600px] mx-auto"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <form
            onSubmit={handleSubmit(handleContact)}
            className="space-y-4 w-full p-8 rounded-sm bg-[#0E162B] text-gray-50"
          >
            <div className="flex gap-5 items-center justify-center flex-col sm:flex-row">
              <div className="flex-1 w-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#A07CFE]"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Ex. Alaa"
                  {...register("firstName")}
                  className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
                />
                {errors?.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.firstName?.message}
                  </p>
                )}
              </div>

              <div className="flex-1 w-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#A07CFE]"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Ex. Eldeyn"
                  {...register("lastName")}
                  className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
                />
                {errors?.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.lastName?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center flex-col sm:flex-row">
              <div className="flex-1 w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#A07CFE]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ex. alaa@example.com"
                  {...register("email")}
                  className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
                />
                {errors && errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.email?.message}
                  </p>
                )}
              </div>

              <div className="flex-1 w-full">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-[#A07CFE]"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Ex. +201010385495"
                  {...register("phoneNumber")}
                  className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
                />
                {errors && errors?.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.phoneNumber?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#A07CFE]"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Ex. Message Title"
                {...register("subject")}
                className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
              />
              {errors && errors?.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.subject?.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#A07CFE]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Ex. Hello, I'd like to work with you!"
                {...register("message")}
                className="mt-1 block w-full px-4 py-3 rounded-[10px] bg-black-100 shadow-sm focus:outline-none sm:text-sm"
              />
              {errors && errors?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.message?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#A07CFE] to-[#da4478] text-white py-3 px-4 rounded-[12px] shadow focus:outline-none"
            >
              {isSubmitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 animate-spin dark:text-zinc-700 fill-gray-200 mr-2"
                    viewBox="0 0 101 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Sending ...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </ShineBorder>
      </div>
    </div>
  );
}
export default Contact;
