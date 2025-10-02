
import React from 'react'
import './Card.css'
import img from './componet/id.png'
import linkdin from './componet/linkedin.png'
import github from './componet/github.png'
import { useState } from 'react'
function Card() {
  const [bgColor, setBgColor] = useState('white');
  return (<>
    <div className='card'>
    
        <div className='card-1' style={{ backgroundColor: bgColor }}>
            <img src={img} alt='id' className='card-img'/>
        </div>
        <div className='card-2'>
           <label className='card-label'>Name: </label> <span className='card-span'>Prathmesh Manoj Roundale</span><br/>
           <label className='card-label'>Email:</label>
            <a href='mailto:Prathameshroundale05@gmail.com' className='card-email'> Prathameshroundale05@gmail.com</a><br/>
            <label className='card-label'>Phone:</label>
            <a href="tel:+919834673813"  className='card-phone'> +91 9834673813</a><br/>
            <label className='card-label'>Follow on :</label>
            <a href='https://www.linkedin.com/in/prathmesh-roundale-5b0a98210/' target='_blank' rel='noreferrer' className='card-linkedin'><img src={linkdin} alt='linkedin' className='card-linkedin-img'/></a>
           
            <a href='https://github.com/PrathmeshRoundale' target='_blank' rel='noreferrer' className='card-github'><img src={github} alt='github' className='card-github-img'/></a>

        </div>
    </div>

        <div className='color-card'>
        <div className='color-box' style={{ backgroundColor: 'lightblue' }} onClick={() => setBgColor('lightblue')}></div>
        <div className='color-box' style={{ backgroundColor: 'lightgreen' }} onClick={() => setBgColor('lightgreen')}></div>
        <div className='color-box' style={{ backgroundColor: 'lightcoral' }} onClick={() => setBgColor('lightcoral')}></div>
        <div className='color-box' style={{ backgroundColor: 'lightgoldenrodyellow' }} onClick={() => setBgColor('lightgoldenrodyellow')}></div>
        <div className='color-box' style={{ backgroundColor: 'lightpink' }} onClick={() => setBgColor('lightpink')}></div>
        <div className='color-box' style={{ backgroundColor: 'lightgray' }} onClick={() => setBgColor('lightgray')}></div>

    </div>
    </>
  )
}

export default Card