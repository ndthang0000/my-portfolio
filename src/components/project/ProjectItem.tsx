import Image from 'next/image';
import React from 'react';

type ProjectItemProps = {
  domain: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  techStack: string[];
};

const ProjectItem = (data: ProjectItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-12">
      <div className="lg:w-1/2">
        <h4 className="text-primary">{data.domain}</h4>
        <h2 className="text-2xl mb-1">{data.title}</h2>
        <div className="leading-6 shadow-inner rounded-2xl px-6 py-4 text-sm bg-[linear-gradient(266deg,rgba(105,59,147,0.4)0%,rgba(110,191,244,0.22)77%,rgba(70,144,212,0)100%)]">
          {data.description}
        </div>
        <div>
          <div className="flex gap-2 mt-2 justify-center lg:justify-start">
            {data.techStack.map((tech, index) => (
              <Image
                key={index}
                src={`/tech-skill/${tech}.png`}
                width={36}
                height={36}
                alt={tech}
                className="self-center w-[24px] md:w-[36px]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative lg:w-[400px] flex justify-center">
        <Image
          src={data.image}
          width={data.imageWidth || 400}
          height={200}
          quality={100}
          alt={'laptop'}
          className=""
        />
      </div>
    </div>
  );
};

export default ProjectItem;
