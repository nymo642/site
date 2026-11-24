import {Pane} from '../components/RedirectPane.jsx'
import {Banner} from '../components/Banner.jsx'

import {Link} from 'react-router-dom'

export function Social() {
    return (
        <>
            <Banner
                title='Social'
                subtitle='Links to my Profiles.'
            />

            <p style={{
                textAlign:'left',
                paddingLeft:'10px'
            }}>
                Below are links to my social profiles. I'm most active on Twitter, but i do occasionally upload to my YouTube. Message me on discord before friending me so I know ur not a bot.
            </p>

            <Link to='https://x.com/nymo642' style={{textDecoration: 'none', color: 'white'}}>
                <Pane
                    title='Twitter'
                    desc='General babble and discorse.'
                    color='deepskyblue'

                    align='left'
                    padding='100'
                    image='url(../../public/twitter.png)'
                    imagePos='top'
                />
            </Link>

            <Link to='https://www.youtube.com/@nymo642' style={{textDecoration: 'none', color: 'white'}}>
                <Pane
                    title='YouTube'
                    desc='Occasional video and music uploads.'
                    color='darkred'
                    align='right'
                    padding='100'
                    image='url(../../public/youtube.png)'
                    imagePos='center'
                />
            </Link>

            <Link to="https://discord.gg/gwfBG5ssYs" style={{textDecoration: 'none', color: 'white'}}>
                <Pane
                    title='Discord'
                    desc='My Server.'
                    color='#6D38FF'
                    align='center'
                    padding='30'
                    image='url(../../public/pukeko.png)'
                    imagePos='center'
                />
            </Link>

        </>
    )
}