import React from 'react'
import './skills.css'
import UIDesign from '../../images/design.png'
import Basketball from '../../images/basketball.png'
import flute from '../../images/flute.png'
import graphic from '../../images/graphic.png'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDescription'>
    
I’m James, a 15-year-old passionate about creativity, sports, and problem-solving. 
I express myself through music, graphic design, basketball, and coding, always striving 
for growth and excellence. Whether it’s crafting impactful designs, making music, 
innovating through code, or competing in sports, 
I’m dedicated to inspiring others and becoming the best version of myself
    </span>
    <div className='skillBars'>
      <div className='skillBar'>
        <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Web Design</h2>
          <p>I’m passionate about coding and enjoy exploring how technology shapes the world. 
                    I’m currently learning programming languages and concepts, building small projects, 
                    and solving problems to develop my skills. Coding allows me to think creatively and analytically, 
                    and I’m excited to continue growing in this field and creating solutions that make a difference.</p>
                    <a href="https://drive.google.com/file/d/1wX7DEoXJENebYYAKaUGGtz7gseAP7FG4/view?usp=sharing" className='my-cv'>Learn more</a>
        </div>
      </div>
      <div className='skillBar'>
        <img src={graphic} alt='flute' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Graphic Design</h2>
          <p>I have a deep passion for graphic design, which fuels my creativity and 
            inspires me to craft visually compelling and impactful designs. Over the years, 
            I have refined my skills through practice, experimentation, and a keen eye for 
            detail. Below, I’m excited to showcase a collection of my projects that highlight 
            my dedication to design, storytelling, 
            and bringing ideas to life through artistic expression.</p>
                    <a href="https://drive.google.com/file/d/1wX7DEoXJENebYYAKaUGGtz7gseAP7FG4/view?usp=sharing" className='my-cv'>Learn more</a>
        </div>
      </div>
      <div className='skillBar'>
        <img src={Basketball} alt='Basketball' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Basketball</h2>
          <p>Basketball is one of my biggest passions. I enjoy the teamwork, strategy, 
                    and discipline that come with the game. Playing helps me stay active, build resilience, 
                    and sharpen my focus both on and off the court. Whether it’s practicing drills, 
                    competing in games, or learning from my teammates, 
                    I’m always striving to improve my skills and grow as a player</p>
                    <a href="https://drive.google.com/file/d/1wX7DEoXJENebYYAKaUGGtz7gseAP7FG4/view?usp=sharing" className='my-cv'>Learn more</a>
        </div>
      </div>
      <div className='skillBar'>
        <img src={flute} alt='flute' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Music</h2>
          <p>Music is a key part of my life and a way for me to express creativity and emotion. 
                    I play the flute and enjoy exploring different genres and techniques to improve my skills. 
                    Performing allows me to connect with others and share my passion for music. 
                    Whether practicing solo pieces or collaborating with others, 
                    I’m always working to refine my sound and deepen my understanding of music theory and performance.</p>
                    <a href="https://drive.google.com/file/d/1wX7DEoXJENebYYAKaUGGtz7gseAP7FG4/view?usp=sharing" className='my-cv'>Learn more</a>
        </div>
      </div>
    </div>
   </section>
  );
}

export default Skills