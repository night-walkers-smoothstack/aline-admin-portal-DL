import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

/**
 * Sidebar navigation for application uses standard styling
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = ({children}) => {
    const [transition, setTransition] = useState({transition: '-translate-x-full'})

    const onClick = (e) => {
        e.preventDefault();
        if (transition.transition==='') setTransition({transition:'-translate-x-full'})
        else setTransition({transition:''})
    }

    return (
        <div className='relative min-h-screen md:flex'>
            {/*Mobile Menu*/}
            <div className='bg-blue-700 text-gray-100 flex justify-between md:hidden'>
                {/*Logo*/}
                <a href='/' className='block p-4 text-white font-bold'>Aline</a>
                {/*Hamburger button*/}
                <button className='p-4 focus:outline-none focus:bg-gray-700' onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/*Sidebar*/}
            <div className={`sidebar bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 px-2 absolute inset-y-0 left-0 transform
            duration-200 ease-in-out md:translate-x-0 md:relative ${transition.transition}`}>
                {/*Mobile close button*/}
                <button className='md:hidden p-1 m-2 right-0 top-0 absolute' onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/*logo*/}
                <a href='/' className='text-white flex items-center space-x-2 px-4'>
                    <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className='text-2xl font-bold'>Aline Financial</span>
                </a>

                <Navigation/>
            </div>
            {children}
        </div>

    );
};

Sidebar.propTypes = {
    /** Children are the pages rendered*/
    children: PropTypes.element,
};

export default Sidebar;
