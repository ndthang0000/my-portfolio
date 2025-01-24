import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div id="section-footer">
      <div className="h-[1px] w-full bg-slate-600"></div>
      <div className="text-center py-4 text-gray-400 text-sm">
        <p>© 2023 Thang Nguyen. All rights reserved.</p>
        <p>
          Design used at{' '}
          <Link
            className="text-primary"
            href={
              'https://www.figma.com/design/nV3I7GZ6BO3vpHlRIEYjgG/Portfolio-Design-(Community)?t=kJMLgBRnZlXFYuBS-0'
            }
          >
            Figma
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
