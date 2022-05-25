import React from 'react';
import { Link, } from 'react-router-dom';


const Header = () => {
    return (
        <div className='align-center'>
            <nav className='flex justify-center p-6 '>
                <Link className='px-2 text-teal-800	' to='/home'>Home</Link>
                <Link className='px-2 text-teal-800	' to='/reviews'>Reviews</Link>
                <Link className='px-2 text-teal-800	' to='/dashboard'>Dashboard</Link>
                <Link className='px-2 text-teal-800	' to='/blogs'>Blogs</Link>
                <Link className='px-2 text-teal-800	' to='/About'>About</Link>
            </nav>
        </div>
    );
};

export default Header;