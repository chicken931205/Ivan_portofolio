import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Ivan Fedorov</b> and I am from Khmelnytskyi, Ukraine. <br/>
            I'm a <b>Full Stack Web Developer</b> with over 6 years of experience. <br/><br/>
            You can check out some of my works in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='WordPress'/>
        <Skills skill='React' />
        <Skills skill='Angular' />
        <Skills skill='Vue' />
        <Skills skill='PHP' />
        <Skills skill='Laravel' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Python'/>
        
      </div>
    </>
  )
}

export default About