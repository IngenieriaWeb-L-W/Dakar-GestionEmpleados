import React, { useState } from 'react';
import { Maestro } from '@/types/global'; 

interface DropdownProps {
  maestros: Maestro[];
  onSelect: (maestro: Maestro) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ maestros, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaestro, setSelectedMaestro] = useState<Maestro>(maestros[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (maestro: Maestro) => {
    setSelectedMaestro(maestro);
    onSelect(maestro);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
      >
        <span className="mx-1">{selectedMaestro.name}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          {maestros.map((maestro) => (
            <button
              key={maestro.id}
              onClick={() => handleSelect(maestro)}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {maestro.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
