import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ExperienceCardProps {
  title: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, skills }) => {
  return (
    <div className="group shadow-md hover:shadow-lg rounded-lg p-6 my-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-indigo-900 border-2 border-transparent hover:border-gray-300">
      <div className="mb-4 flex justify-between items-center">
        <span className="text-xl text-gray-300 font-bold">{title}</span>
      </div>
      <div className="mb-4 text-gray-200">{description}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
