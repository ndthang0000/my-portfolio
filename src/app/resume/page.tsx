'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Resume = () => {
  return (
    <div id="section-home">
      <div className="container mx-auto mt-4 lg:px-6 px-4">
        <Link href={'/'} className="flex gap-2 items-center mt-4">
          <Image
            src={'/images/icon-arrow-left.png'}
            alt="arrow left"
            width={32}
            height={32}
          />
          Back to Home
        </Link>
      </div>
      <div className="relative h-[550px] flex justify-center items-center">
        <Image
          src={'/images/gradient-avatar.png'}
          alt="gradient color"
          width={550}
          height={550}
          className="absolute -z-10 m-auto left-0 top-0 right-0"
        />
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src={'/images/resume-icon.png'}
              alt="gradient color"
              width={256}
              height={256}
              className=""
            />
          </div>
          <div className="flex gap-4 mt-3">
            {/* create 2 button: download and review */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded min-w-[150px]">
              <Link
                href={'/cv/Nguyen Duc Thang_Back-End Developer.pdf'}
                target="_blank"
                download={true}
              >
                Download
              </Link>
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded min-w-[150px]">
              <Link
                href={'/cv/Nguyen Duc Thang_Back-End Developer.pdf'}
                target="_blank"
              >
                Review
              </Link>
            </button>
            {/* <h1 className="text-3xl text-white">Download</h1>
            <h1 className="text-3xl text-white">Review</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
