"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div
      className="group bg-dark-blue shadow-lg rounded-lg p-6 my-4 text-white flex items-center space-x-4 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-indigo-900 border-2 border-transparent hover:border-gray-300"
      onClick={() => {
        window.open(link);
      }}
    >
      <div className="w-1/2">
        <Image
          src={imageUrl}
          width={300}
          height={300}
          alt="Picture of project"
          layout="responsive"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="text-white w-4 h-4 transition duration-300 ease-in-out group-hover:-rotate-45 "
          />
        </div>
        <p className="mb-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
