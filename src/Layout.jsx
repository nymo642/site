import './App.css'

import {Navbar} from './components/Navbar'
import {Outlet} from 'react-router-dom'
import {Footer} from './components/Footer'

export function Layout() {
    return (
        <div className="App">
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}