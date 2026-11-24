import './RedirectPane.css'

import {SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export function Pane({title, desc, color, padding, align, image, imagePos}) {

    function handleArrow() {
        if (align === 'left') {
            return (
                <div className='paneContent'>
                    <div className='iconRight'>
                        <SlArrowRight size={40} />
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            )
        } else if (align === 'right') {
            return (
                <div className='paneContent'>
                    <div className='iconLeft'>
                        <SlArrowLeft size={40} />
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            )
        } else {
            return (
                <div className='paneContent'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            )

        }
    }

    return (
        <>
            <div
                className='pane'
                style={{
                    '--back-color': color,
                    '--back-image': image,
                    '--back-image-pos': imagePos,
                    '--vert-padding': padding + "px",
                    textAlign: align,
                }}
            >
                {handleArrow()}
            </div>
        </>

    )
}