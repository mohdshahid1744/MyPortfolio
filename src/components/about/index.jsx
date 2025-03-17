import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My journey in web development is driven by the power of the MERN stack, with JavaScript forming the foundation of my creations. I build dynamic and scalable applications using MongoDB, Express.js, React.js, and Node.js, ensuring seamless interactions between the frontend and backend. With WebRTC, I enable real-time communication, while Socket.io empowers me to create fast and responsive web applications with live updates. Beyond functionality, I focus on crafting intuitive and visually engaging experiences. Join me as I continue exploring new technologies to push the boundaries of the modern web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>




        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,babel,bootstrap,cloudflare,css,typescript,materialui,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,tailwind,vercel,vite,vscode,yarn,expressjs`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>


      </div>
    </section>
  );
};

export default AboutDetails;
