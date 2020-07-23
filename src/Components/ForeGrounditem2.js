import React from 'react';
import Webanimation from '@wellyshen/use-web-animations'

function ForeGrounditem2({move}) {
    const runningItems2 = Webanimation({
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
    move(runningItems2.getAnimation)
    return (
        <div>
            <div ref={runningItems2.ref} className="scenery" id="foreground2">
                <img  id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"  alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"  alt=" " />
            </div>
        </div>
    )
}
export default ForeGrounditem2;