import ExperienceItem from '@/components/experience-item/ExperienceItem';
import Header from '@/components/header/Header';
import Introduce from '@/components/Introduce/Introduce';
import Image from 'next/image';
import Contact from '../components/contact/Contact';

const initExperience = [
  {
    image: '/images/pi-logo.png',
    name: 'Pi solution',
    position: 'Junior Backend Nodejs Developer',
    website: 'https://pisolution.co/',
    from: '02/2022',
    to: '06/2023',
  },
  {
    image: '/images/dayone-logo.png',
    name: 'DayoneTeams',
    position: 'Junior Web Engineer',
    website: 'https://dayoneteams.com/',
    from: '08/2023',
    to: '10/2023',
  },
  {
    image: '/images/gameloft-logo.png',
    name: 'Gameloft',
    position: 'Middle Backend Developer',
    website: 'https://www.gameloft.com/',
    from: '01/2024',
    to: 'Now',
    isHighlight: true,
  },
  {
    image: '/images/freeclance-logo.png',
    name: 'Freelancer',
    position: 'Fullstack Developer',
    from: '06/2023',
    to: 'Now',
    isHighlight: true,
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-20 lg:px-6 px-4 ">
        <Introduce />
        <div className="mt-24 relative">
          <Image
            src={'/images/gradient-avatar.png'}
            alt="gradient color"
            width={625}
            height={700}
            className="absolute -z-10 m-auto left-0 right-0 top-0 bottom-0"
          />
          <Contact />
          <h2 className="sm:text-4xl text-2xl mb-10">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mb-24 gap-6">
            {initExperience.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
