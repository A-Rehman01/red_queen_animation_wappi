import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';


function Queen({move}) {
    const runningQueen = Webanimation({
        keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' },
        ],
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            iterations: Infinity,
            playbackRate: 1,
        }
    })
    move(runningQueen.getAnimation)
    return (
        <div >
            <div className="sky" ></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img
                        ref={runningQueen.ref}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                        alt="Alice and the Red Queen"
                    />
                </div>
                
            </div>


        </div>
    );
}

export default Queen;