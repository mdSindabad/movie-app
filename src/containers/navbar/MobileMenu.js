import React, {Fragment, useState} from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import MobileMenuItems from './MobileMenuItems';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='md:hidden'>
            {isOpen?
            <>
                <FaTimes className='text-4xl rounded p-2 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-lg' onClick={handleClick}/> 
                <MobileMenuItems handleClick={handleClick} />
            </>:
                <FaBars className='text-4xl rounded p-2 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-lg' onClick={handleClick}/>
                
            }
            
        </div>
    )
};

export default MobileMenu;
