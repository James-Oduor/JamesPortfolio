import React from 'react'
import'./intro.css';
import bg from '../../images/James.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introtext">I`m <span className="introName">James</span></span> 
          <br/>Website Designer<br/>
          <p className="introPara">
          A motivated 15-year-old  passionate about music, sports, coding, 
          and personal <br/> growth, striving to improve,inspire others, and make a meaningful impact</p>
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro;