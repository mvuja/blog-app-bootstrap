import React from "react"
import { NavLink } from "react-router-dom"
import './navbar.modules.css'

const Navbar = () => {

    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home',
        },
        {
            id: 2,
            path:'/about',
            text: 'About',
        },
        {
            id: 3,
            path:'/contact',
            text: 'Contact',
        },
    ]

    return (
        <nav className="navbar">
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.id} className='underline'>
                                <NavLink to={link.path} activeClassName="active-link" exact>
                                    {link.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
        </nav>
    )
}


export default Navbar