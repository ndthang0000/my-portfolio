import React from 'react';
import ProjectItem from './ProjectItem';

const data = [
  {
    domain: 'Gamefi NFT - Smart Contract',
    title: 'Herobook',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/screen-laptop/laptop-herobook.png',
    techStack: ['mongodb', 'vue-js', 'nft', 'redis', 'typescript'],
    imageWidth: 400,
  },
  {
    domain: 'Game - Token',
    title: 'Crash Game',
    description: `This is a web game. Users can bet on a session game. Each session game will
      have a race line increase follow time and it will stop anytime. If the user can stop before the
      system stops, they will win following the time of the line. Otherwise, the user will lose all
      value of the bet`,
    image: '/screen-laptop/crash-game.png',
    techStack: ['mongodb', 'socket-io', 'vue-js', 'typescript'],
    imageWidth: 400,
  },
  {
    domain: 'Booking Service',
    title: 'Booking Billiards',
    description: `This is a mobile app where users can search for and book table billiards. We
      will link many billiard stores and provide them with web admin to manage information of
      the store and manage list booking\n.
      Centralized management system for all stores`,
    image: '/screen-laptop/booking-billiard.png',
    techStack: [
      'react',
      'nextjs',
      'postgres',
      'firebase',
      'nestjs',
      'redis',
      'typescript',
    ],
    imageWidth: 200,
  },
  {
    domain: 'Discord Bot',
    title: 'Story Telling Bot',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/screen-laptop/discord-bot.png',
    techStack: ['discord', 'express', 'mongodb', 'typescript'],
    imageWidth: 400,
  },
  {
    domain: 'Social Networking',
    title: 'Crawler Post in Social Network',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/screen-laptop/social-network.png',
    techStack: ['typescript', 'mongodb', 'express', 'mysql'],
    imageWidth: 400,
  },
  {
    domain: 'Token - Tap to earn',
    title: 'Telegram App - Game Xin',
    description:
      'A game app on Telegram. Users can earn money by tap on screen. The system will reward users with tokens based on their achievements in the game. Users buy mining package and mining realtime to get token ',
    image: '/screen-laptop/game-for-xin.png',
    techStack: ['typescript', 'mongodb', 'express', 'socket-io'],
    imageWidth: 200,
  },
];

const ProjectList = () => {
  return (
    <div className="mb-20">
      {data.map((item, index) => (
        <ProjectItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
