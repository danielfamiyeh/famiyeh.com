import Image from "next/image";
import { fonts } from "@/utils/fonts";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row justify-between mb-36">
        <div className="lg:w-4/12">
          <Image
            className="rounded-full mb-16 lg:mb-0"
            alt="Picture of Daniel Famiyeh"
            src="/profile.jpg"
            width={400}
            height={400}
          />
        </div>
        <div className="lg:w-2/12"></div>
        <div className="lg:w-6/12 text-center lg:text-left">
          <h1 className={`${fonts.title.className} text-[#eeeeee] text-6xl`}>
            Welcome!
          </h1>
          <p className="text-white mt-4">
            I'm Daniel Famiyeh, a passionate software developer with a journey
            that began in the intriguing realm of the Sony PSP homebrew scene at
            age 11.
          </p>
          <p className="text-white mt-2">
            Inspired by my new-found passion, I started developing Python
            scripts and tinkered with JavaScript to creating 2D games using the
            Canvas API.
          </p>

          <p className="text-white mt-2">
            My early forays into web development through crafting Tumblr themes
            for myself and friends sowed the seeds for a future reconnection
            with this dynamic domain.
          </p>

          <p className="text-white mt-2">
            Now I've had the pleasure of working with two consultancies, two
            startups and enjoy delving into hobby projects that span different
            fields.
          </p>

          <p className="text-white mt-2">
            When I'm not at my desk, you can find me at the skatepark, at my
            piano, snapping photos/filming or being with friends.
          </p>
        </div>
      </div>
    </>
  );
}
