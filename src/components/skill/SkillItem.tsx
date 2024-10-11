import Image from 'next/image';
import React from 'react';

type SkillItemProps = {
  image: string;
  name?: string;
};

const SkillItem = ({ image, name }: SkillItemProps) => {
  return (
    <div className="flex justify-center w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#251C31]">
      <Image
        src={image}
        width={36}
        height={36}
        alt={name || 'skill'}
        className="self-center w-[36px] lg:w-[48px]"
      />
    </div>
  );
};

export default SkillItem;