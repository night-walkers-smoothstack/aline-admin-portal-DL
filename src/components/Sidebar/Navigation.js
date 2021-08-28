import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Navigation menu options for Sidebar
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = () => {

    const menu = [
        {
            link: '/user',
            display: 'Users'
        },
        {
            link: '/member',
            display: 'Members'
        },
        {
            link: '/transaction',
            display: 'Transactions'
        },
        {
            link: '/account',
            display: 'Accounts'
        }
    ]

    return (
        <nav>
            <NavLink exact to='/' activeClassName='font-bold' className='block py-2.5 px-4 hover:bg-blue-600
            rounded transition duration-200 hover:text-white'>Home</NavLink>
            {menu.map(nav => {
                return (
                    <NavLink key={nav.link} to={nav.link} activeClassName='font-bold'
                             className='block py-2.5 px-4 hover:bg-blue-600 rounded transition duration-200 hover:text-white'>
                        {nav.display}
                    </NavLink>
                )
            })}
        </nav>
    );
};

export default Navigation;
