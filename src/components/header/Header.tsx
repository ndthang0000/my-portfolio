import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';
const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--header-bg-color)' }}>
      <header className="container flex items-center justify-center sm:justify-between lg:h-[113px] h-[80px] px-6 mx-auto">
        <div className="text-white font-bold text-xl hidden sm:block">
          <Image
            alt="logo"
            src={'/images/logo.png'}
            width={35}
            height={35}
            quality={100}
          />
        </div>
        <nav>
          <ul className="flex sm:space-x-24 flex-1 space-x-12">
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
            >
              #home
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
            >
              #about
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
            >
              #lab
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
            >
              #resume
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
