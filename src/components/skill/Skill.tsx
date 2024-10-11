import Image from 'next/image';
import React from 'react';
import SkillItem from './SkillItem';

const listSkill = [
  {
    image: '/tech-skill/nestjs.png',
    name: 'nestjs',
  },
  {
    image: '/tech-skill/express.png',
    name: 'express',
  },
  {
    image: '/tech-skill/redis.png',
    name: 'redis',
  },
  {
    image: '/tech-skill/docker.png',
    name: 'docker',
  },
  {
    image: '/tech-skill/elk.png',
    name: 'elk',
  },
  {
    image: '/tech-skill/react.png',
    name: 'react',
  },
  {
    image: '/tech-skill/nodejs.png',
    name: 'nodejs',
  },
  {
    image: '/tech-skill/mysql.png',
    name: 'mysql',
  },
  {
    image: '/tech-skill/postgres.png',
    name: 'postgres',
  },
  {
    image: '/tech-skill/mongodb.png',
    name: 'mongodb',
  },
  {
    image: '/tech-skill/grafana.png',
    name: 'grafana',
  },
  {
    image: '/tech-skill/nextjs.png',
    name: 'nextjs',
  },
  {
    image: '/tech-skill/js.png',
    name: 'js',
  },
  {
    image: '/tech-skill/rabbitmq.png',
    name: 'rabbitmq',
  },
];

const Skill = () => {
  return (
    <div className="flex items-center lg:mt-60 mt-32 flex-col">
      <div className="text-center mb-2">
        <h2 className="text-lg lg:text-2xl font-bold leading-8">
          I always explore and learn more powerful tools and new technology.{' '}
        </h2>
        <p className="text-sm md:text-base">
          Those values improve me and my product has a high quality
        </p>
      </div>

      <div className="relative mt-4 w-full md:w-[500px] lg:w-[700px]">
        <div className="flex gap-2 flex-wrap justify-center">
          {listSkill.map((skill, index) => (
            <SkillItem key={index} image={skill.image} name={skill.name} />
          ))}
        </div>
        <Image
          src={'/images/skill.png'}
          alt="gradient color"
          width={625}
          height={'625'}
          className="w-full lg:w-[700px] xl:w-[800px] 2xl:w-[900px]"
        />
      </div>
    </div>
  );
};

export default Skill;
