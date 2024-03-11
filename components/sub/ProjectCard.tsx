import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  server: string;
  github: string;
}

const ProjectCard = ({ src, title, description, server, github }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <hr className="my-2 border-indigo-500"/>
        <Link href="/" className="mt-2 text-gray-300">{server}</Link>
        <Link href="/" className="mt-2 text-gray-300 block">{github}</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
