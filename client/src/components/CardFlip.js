import React from 'react'
import './compstyles.css'
import img from '../images/magician2.png'
import back from '../images/cardback2.png'


const CardFlip = () => {
  return (

    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={back} alt="Cardback" />
          <div>
          <div className="flip-card-back">
            <img src={img} alt="Avatar" />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default CardFlip