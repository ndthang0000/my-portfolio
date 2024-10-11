'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type ExperienceItemProps = {
  image: string;
  name: string;
  position: string;
  website?: string;
  from: string;
  to: string;
  isHighlight?: boolean;
};

const ExperienceItem = ({
  image,
  from,
  to,
  name,
  position,
  website,
  isHighlight,
}: ExperienceItemProps) => {
  // const a = [266, 90, 45, 75, 60, 30, 120, 150, 180, 210, 240, 300, 330, 360];
  // const randomDegree = a[Math.floor(Math.random() * 4)];
  const className = `h-[180px] md:h-[192px] border-t-[6px] border-[#693B93] rounded-2xl bg-[linear-gradient(266deg,rgba(19,4,40,1)0%,rgba(37,16,67,1)34%,rgba(56,18,109,1)57%,rgba(38,16,69,1)85%,rgba(25,6,52,1)100%)]`;

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
          className="mx-4 md:mx-8 w-[80px] md:w-[120px]"
        />
        <div
          className={`flex flex-col gap-1 ${isHighlight ? 'text-stroke text-stroke-primary' : ''}`}
        >
          <h3
            className={`text-white  font-poppins font-semibold md:text-3xl text-2xl`}
          >
            {name}
          </h3>
          <p className="text-white font-poppins text-sm font-semibold">
            {position}
          </p>
          {website && (
            <Link
              href={website}
              target="_blank"
              className="cursor-pointer bg-[#2C1250] rounded-2xl border-[#9252ce] border-2 md:px-4 px-2 py-2 md:py-4 mt-2 w-40 text-center justify-center hover:border-primary"
            >
              <span className="text-sm sm:text-base">Visit website</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
