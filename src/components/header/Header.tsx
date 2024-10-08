import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--header-bg-color)' }}>

      <header className="container mx-auto flex items-center md:h-[113px] h-[80px] px-4">
        <div className="text-white font-bold text-xl flex-1 w-32">
          Logo
        </div>
        <nav>
          <ul className="flex space-x-24 flex-1 w-64">
            <li className="text-white hover:text-gray-300 cursor-pointer">#home</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">#bout</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">#lab</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;