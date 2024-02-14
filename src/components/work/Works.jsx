import React from 'react';
import Work1 from '../../asset/work1.jpg';
import Work2 from '../../asset/work2.jpg';
import Work3 from '../../asset/work3.jpg';

const Works = () => {
    

  return (
    <div className="works__container">
        <div className="work__one work">
            <img src={Work1} alt="" />
        </div>

        <div className="work__two work">
            <img src={Work2} alt="" />
        </div>

        <div className="work__three work">
            <img src={Work3} alt="" />
        </div>
    </div>
  )
}

export default Works