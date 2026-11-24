import {Pane} from '../components/RedirectPane.jsx'
import {Banner} from '../components/Banner.jsx'

import {Link} from "react-router-dom";

export function Mods() {
    return (
        <>
            <Banner
                title='Mods'
                subtitle='Modifications for games created by me.'
            />

            <p style={{
                textAlign:'left',
                paddingLeft:'10px'
            }}>
                Below are links to my modding pages. I release mods on several different platforms depending on the game. Mods range for cosmetic or graphical changes to full gameplay overhauls
            </p>

            <Link to="https://www.nexusmods.com/profile/nymo642/mods" style={{textDecoration: 'none', color: 'white'}}>
                <Pane title="Nexus Mods"
                      desc="Mods for Yakuza/Like a Dragon games."
                      color="darkorange"
                      hoverColor="SaddleBrown "
                      activeColor="BurlyWood "
                      align='left'
                      padding='100'
                      image='url(/site/mods.png)'
                      imagePos='top'
                />
            </Link>

            <Link to="https://gamebanana.com/members/2380576" style={{textDecoration: 'none', color: 'white'}}>
                <Pane title="GameBanana"
                      desc="Mods for other games including Sonic the Hedgehog."
                      color="yellow"
                      hoverColor="Olive"
                      activeColor="Khaki"
                      align='right'
                      padding='100'
                      image='url(/site/gamebanana.png)'
                      imagePos='center'
                />
            </Link>

            <Link to="https://github.com/nymo642" style={{textDecoration: 'none', color: 'white'}}>
                <Pane title="GitHub"
                      desc="Code repositories and such."
                      color="lightgray"
                      hoverColor="gray"
                      activeColor="white"
                      align='center'
                      padding='30'
                      image='url(/site/e1m1.png)'
                      imagePos='center'
                />
            </Link>

        </>
    )
}