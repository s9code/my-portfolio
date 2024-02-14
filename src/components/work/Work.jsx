import React from 'react';
import './work.css';
import Works from './Works';

const Work = () => {
  return (
    <section className='work__container'>
      <div className="work__container-text">
            <div className="work__title">
                <p className='work__title-item'>Portfolio</p>
            </div>
        </div>
      <div className="work__container-works">
      <Works />
      </div>
    </section>
  )
}

export default Work;