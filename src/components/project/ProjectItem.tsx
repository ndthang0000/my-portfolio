import Image from 'next/image';
import React from 'react';

const ProjectItem = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h4 className="text-primary">Gamefi NFT</h4>
        <h2 className="text-2xl">Herobook</h2>
        <div className="leading-6 shadow-inner rounded-2xl px-6 py-4 text-sm bg-[linear-gradient(266deg,rgba(105,59,147,0.4)0%,rgba(110,191,244,0.22)77%,rgba(70,144,212,0)100%)]">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </div>
        <div>
          <div className="flex justify-center w-10 h-10 lg:w-16 lg:h-16 rounded-full">
            <Image
              src={'/tech-skill/nextjs.png'}
              width={24}
              height={24}
              alt={'skill'}
              className="self-center w-[24px] lg:w-[36px]"
            />
            <Image
              src={'/tech-skill/mongodb.png'}
              width={24}
              height={24}
              alt={'skill'}
              className="self-center w-[24px] lg:w-[36px]"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={'/images/laptop-herobook.png'}
          width={400}
          height={200}
          alt={'laptop'}
          className=""
        />
      </div>
    </div>
  );
};

export default ProjectItem;
