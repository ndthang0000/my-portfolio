'use client';
import Image from 'next/image';
import React from 'react';
import { Globe as GlobeIcon } from '@phosphor-icons/react/dist/ssr/Globe';
import Link from 'next/link';

type ExperienceItemProps = {
  image: string;
  name: string;
  position: string;
  website?: string;
  from: string;
  to: string;
};

const ExperienceItem = ({
  image,
  from,
  to,
  name,
  position,
  website,
}: ExperienceItemProps) => {
  // const a = [266, 90, 45, 75, 60, 30, 120, 150, 180, 210, 240, 300, 330, 360];
  // const randomDegree = a[Math.floor(Math.random() * 4)];
  const className = `h-[160px] md:h-[192px] border-t-[6px] border-[#693B93] rounded-2xl bg-[linear-gradient(266deg,rgba(19,4,40,1)0%,rgba(37,16,67,1)34%,rgba(56,18,109,1)57%,rgba(38,16,69,1)85%,rgba(25,6,52,1)100%)]`;

  const handleHover = () => {};

  return (
    <div className={className} onMouseOver={handleHover}>
      <div className="flex items-center h-full relative">
        <p className="absolute top-2 right-4 text-sm italic text-[#dadde3]">
          {from} - {to}
        </p>
        <Image
          src={image}
          width={120}
          height={120}
          alt="name"
          className="mx-4 md:mx-8"
        />
        <div>
          <h3 className="text-white font-bold md:text-2xl text:xl">{name}</h3>
          <p className="text-white text-sm">{position}</p>
          {website && (
            <Link
              href={website}
              target="_blank"
              className="cursor-pointer md:px-4 px-2 py:1 md:py-2 border w-52 text-center mt-2 flex items-center gap-2 justify-center hover:border-primary"
            >
              <GlobeIcon size={28} />
              <span className="text-sm sm:text-base">Visit website</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
