import React from 'react'
import Webanimation from '@wellyshen/use-web-animations';

function ForeGrounditem1({move}) {
    const runningItems = Webanimation({
        keyframes: [
            { transform: 'translate(100%,0)' },
            { transform: 'translate(-100%,0)' },
        ],
        timing: {
            duration: 13000,
            iterations: Infinity,
            playbackRate: 1,
        }
    })
    move(runningItems.getAnimation)
    return (
        <div>
            <div ref={runningItems.ref} className="scenery" id="foreground1">
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" 
                 alt=" Scenery" />
            </div>
        </div>
    )
}
export default ForeGrounditem1;