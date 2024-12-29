import React from 'react'
import './work.css'
import teamcards from '../../images/teamcards.png'
import Shopping from '../../images/Shopping.png'
import Number from '../../images/Number.png'
import dice from '../../images/dice.png'

function Work() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I have a profound passion for coding, which drives me to explore new technologies 
            and create innovative solutions. Over the years, I have honed my skills through dedication, 
            curiosity, and hands-on experience. Below, I proudly present a collection of my projects 
            that reflect my commitment to learning, problem-solving, 
            and pushing the boundaries of what’s possible in the world of programming.</span>
            <div className='worksImgs'>
                <img src={teamcards} alt='teamcards' className='worksImg'/>
                <img src={Shopping} alt='Shopping' className='worksImg'/>
                <img src={Number} alt='Number' className='worksImg'/>
                <img src={dice} alt='dice' className='worksImg'/>
            </div>
            <a href="https://github.com/James-Oduor?tab=repositories" class="btn">See more</a>
    </section>
  );
}

export default Work