'use client';
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Introduce: React.FC = () => {
  return (
    <div>
      {/* <div className="h-48 w-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-customGradientStart to-customGradientEnd via-customGradientEnd"
      ></div> */}
      <div className="flex mb-24 mt-24 items-center gap-10 lg:flex-row flex-col">
        <div className="px-4 w-full relative lg:w-[385px] lg:h-[431px] flex justify-center ">
          <div className="absolute z-10 right-16 -top-12 md:right-56 md:-top-12 lg:right-16 lg:top-8">
            <Image
              alt="avatar"
              width={91}
              height={81}
              src={'/images/arrow.png'}
              quality={100}
            />
            <div className="absolute md:w-40 w-32 -top-5 left-10 md:text-xl lg:text-3xl lg:w-60 lg:-top-12 lg:left-14">
              <Typewriter
                options={{
                  strings: [
                    'Hello, I am <span class="text-primary">Thang Nguyen</span>',
                    'Welcome to my <span class="text-primary"> portfolio!</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <Image
            alt="avatar"
            width={385}
            height={431}
            src={'/images/gradient-avatar.png'}
            quality={100}
            className="absolute m-auto left-0 right-0 top-0 bottom-0 -z-10"
          ></Image>
          <Image
            alt="avatar"
            width={260}
            height={260}
            src={'/images/gradient-avatar2.png'}
            quality={100}
            className="absolute -z-10 m-auto left-0 right-0 top-0 bottom-0"
          />
          <Image
            alt="avatar"
            width={165}
            height={223}
            src={'/images/avatar.png'}
            quality={100}
            className="my-auto lg:w-[165px] lg:h-[223px] w-[130px] h-[180px]"
          />
        </div>
        <div className="lg:w-[400px] w-full">
          <div className="text-base py-2">A Designer who</div>
          <p className="lg:text-5xl py-4 text-4xl">
            Judges a book by its{' '}
            <span className="text-primary relative mx-4 my-4">
              cover
              <svg
                className="absolute m-auto -left-5 right-20 top-0 bottom-0 -z-10"
                width="180"
                height="55"
                viewBox="0 0 189 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M187.834 22.8917C188.145 26.6387 185.974 30.5091 181.553 34.3141C177.143 38.1101 170.577 41.7649 162.317 45.0706C145.803 51.6797 122.63 56.8506 96.7164 59.0013C70.803 61.152 47.0947 59.872 29.7171 56.0757C21.0252 54.1769 13.946 51.6547 8.97024 48.6377C3.98279 45.6135 1.20372 42.154 0.892726 38.4069C0.581735 34.6598 2.75246 30.7895 7.17313 26.9845C11.5834 23.1885 18.15 19.5337 26.4099 16.228C42.9239 9.61891 66.0968 4.44802 92.0102 2.29732C117.924 0.14663 141.632 1.42659 159.009 5.22285C167.701 7.12166 174.781 9.64389 179.756 12.6609C184.744 15.6851 187.523 19.1446 187.834 22.8917Z"
                  stroke="white"
                />
              </svg>
            </span>
            ...
          </p>
          <p className="text-xs">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div>
        <p className="lg:text-5xl text-3xl">I&apos;m a Software Engineer.</p>
        <p className="text-base mb-16">
          Currently, I&apos;m a Software Engineer at Gameloft
        </p>
        <p className="text-base lg:text-lg font-light lg:w-[900px]">
          - Experienced Node.js Backend Developer with 3 years of hands-on
          experience in designing, developing, and maintaining server-side
          applications. Proficient in building scalable RESTful APIs, managing
          databases, and deploying applications in cloud environments. Strong
          knowledge of JavaScript, Express.js, and databases like MongoDB and
          PostgreSQL. Adept at working in agile teams, collaborating with
          front-end developers, and delivering reliable, maintainable code.
          Passionate about optimizing performance, improving code quality, and
          learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default Introduce;
