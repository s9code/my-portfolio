import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="skills__container-text">
            <div className="skills__title">
                <p className='skills__title-item'>Skills</p>
            </div> 
        </div>

        <div className="skills__container">
          <Frontend />
          <Backend />
        </div>
    </section>
  )
}

export default Skills