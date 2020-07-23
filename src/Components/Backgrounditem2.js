import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';

function Backgrounditem2({move}) {
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
    move(runningItems.getAnimation)
  
    return (
    
            <div ref={runningItems.ref} className="scenery" id="background2">
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" alt=" " />
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" alt=" " />
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" alt=" " />
            </div>
    );
}

export default Backgrounditem2;