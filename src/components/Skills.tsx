import React from 'react'
import '../app/styles/skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
            <h2 className='skills-heading'>Technologies I Work With</h2>
            <p className='skills-text'>I have a solid foundation in web development, specializing in HTMl,CSS and Javascript. MY experience extends to using Frameworks like React and Next.js to create Dynamic and user-friendly application. I'm also complemet in Tailwind CSS for efficient styling and design. with a passion for learing, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p></div>
            <div className='skills-right'>
              <div className='skills-icons-grid'>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
