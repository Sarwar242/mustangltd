import React from 'react';
import Image from 'next/image';

interface MenuProps {
  title: string;
  backgroundImage: string;
  onClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ title, backgroundImage, onClick }) => {
  return (
    <div
      className="relative h-1/4 bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Menu;
