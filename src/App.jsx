import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { Mods } from "./pages/Mods.jsx"
import { Social } from "./pages/Social.jsx"

import {Layout} from "./Layout.jsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/mods" element={<Mods/>} />
                    <Route path="/social" element={<Social/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
