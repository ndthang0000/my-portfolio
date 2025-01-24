'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { throttle } from 'lodash';
import styles from './index.module.css';

const Header: React.FC = () => {
  const handleNavigation = (e: any) => {
    function getOffsetTop(element: any) {
      let offsetTop = 0;
      while (element) {
        offsetTop += element.offsetTop; // Add current element's offsetTop
        element = element.offsetParent; // Move up to the offset parent
      }
      return offsetTop;
    }

    const headerHeight = document.querySelector('header')?.clientHeight || 113;
    const id = e.target.id.split('-')[1];
    const section = document.getElementById(`section-${id}`);
    if (section) {
      window.scrollTo({
        top: getOffsetTop(section) - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = throttle(() => {
        let indexActive = 0;
        const headerHeight =
          document.querySelector('header')?.clientHeight || 113;

        const listHeaderBreakpoint = [
          document.getElementById('section-about')?.getBoundingClientRect()
            .top || 736,
          document.getElementById('section-lab')?.getBoundingClientRect().top ||
            2800,
          document.getElementById('section-footer')?.getBoundingClientRect()
            .top || 10000,
        ];
        for (let i = 0; i < listHeaderBreakpoint.length; i++) {
          if (listHeaderBreakpoint[i] - headerHeight - 40 > 0) {
            indexActive = i;
            break;
          }
        }
        const headerItems = document.querySelectorAll(
          `.${styles['custom-header-item']}`
        );
        headerItems.forEach((item, index) => {
          if (index === indexActive) {
            item.classList.add(styles['active']);
          } else {
            item.classList.remove(styles['active']);
          }
        });
      }, 500);

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div
      className="sticky top-0 z-20"
      style={{ backgroundColor: 'var(--header-bg-color)' }}
    >
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
          <ul className="flex sm:space-x-24 flex-1 space-x-8">
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
              id="header-home"
              onClick={handleNavigation}
            >
              #home
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
              id="header-about"
              onClick={handleNavigation}
            >
              #about
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
              id="header-lab"
              onClick={handleNavigation}
            >
              #lab
            </li>
            <li
              className={`${styles['custom-header-item']} text-white hover:text-gray-300 cursor-pointer`}
              onClick={handleNavigation}
              id="header-footer"
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
