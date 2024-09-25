// components/Dropdown.tsx
import React, { useState } from 'react';

interface Option {
    title: string;
    href: string;
    newWindow: boolean;
}

interface DropdownProps {
    title: string;
    options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="bg-blue-500 text-white p-2 rounded">
                {title}
            </button>
            {isOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-2 z-10">
                    {options.map((option, index) => (
                        <a
                            key={index}
                            href={option.href}
                            target={option.newWindow ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            {option.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
