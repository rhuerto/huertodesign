import React from "react"


const Wave = () => (

    <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage: `url('/images/wave/wave-top.png')`}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{backgroundImage: `url('/images/wave/wave-mid.png')`}}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: `url('/images/wave/wave-bot.png')`}}></div>
        </div>
    </div>

)

export default Wave