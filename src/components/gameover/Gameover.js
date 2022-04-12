import React from "react";
import style from './style.css';
import Gameover1 from '../images/gameover.gif';


function Gameover () {
    return (
        <div >
        <div className='gameover'>
            <img classNmae='img' src={Gameover1} alt="image"></img>
            
        </div>
        </div>
    )
}

export default Gameover