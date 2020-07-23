import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';

function Backgrounditem1({move}) {
    const runningItems = Webanimation({
        keyframes:[
            { transform: 'translate(100%,0)' },
            { transform: 'translate(-100%,0)' },
        ],
        timing:{
            duration: 36000,
            iterations: Infinity
        }
    });
    move(runningItems.getAnimation);
    return (
        <div>
            <div ref={runningItems.ref} className="scenery" id="background1">
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
            </div>
        </div>
    )
}

export default Backgrounditem1;