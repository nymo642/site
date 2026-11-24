import {Pane} from '../components/RedirectPane.jsx'
import {Banner} from '../components/Banner.jsx'

import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <Banner
                title="Aiden's Website"
                subtitle="nymo642"
            />

            <h2>Welcome to my website.</h2>
            <p style={{
                textAlign:'justify',
                paddingLeft:'10px',
                paddingRight:'10px'
            }}>
                My name is Aiden, and I am an avid enjoyer of technology and video games. I create mods for many games in the Yakuza/Like a Dragon and Sonic series'. This site acts as a hub for all my pages, social or modding related. You can check them out below or in the top navbar.
            </p>

            <Link to='/mods' style={{textDecoration: 'none', color: 'white'}}>
                <Pane title="Mods"
                      desc="Modifications for various games created by myself."
                      color="#FF2724"
                      align='left'
                      padding='100'
                      image='url(/kamuro.png)'
                      imagePos='top'
                />
            </Link>

            <Link to='/social' style={{textDecoration: 'none', color: 'white'}}>
                <Pane title="Social"
                      desc="Links to my social pages."
                      color="#057AFF"
                      align='right'
                      padding='100'
                      image='url(/social.png)'
                      imagePos='bottom'
                />
            </Link>
        </>
    )
}