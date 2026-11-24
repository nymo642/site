import './Navbar.css'

import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <class className='navbar'>
            <Link to="/">
                <button className='navbutton'>Home</button>
            </Link>
            <Link to="/mods">
                <button className='navbutton'>Mods</button>
            </Link>
            <Link to="/social">
                <button className='navbutton'>Social</button>
            </Link>
        </class>
    )
}