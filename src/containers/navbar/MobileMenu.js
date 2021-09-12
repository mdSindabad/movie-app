import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import MenuItems from './MenuItems';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            {isOpen?
            <>
                <FaTimes className='text-4xl rounded p-2 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-lg' onClick={handleClick}/> 
                <MenuItems handleClick={handleClick} />
            </>:
                <FaBars className='text-4xl rounded p-2 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-lg' onClick={handleClick}/>
                
            }
            
        </>
    )
};

export default MobileMenu;
