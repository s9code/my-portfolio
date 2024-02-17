import React from 'react';

const frontend = () => {
  return (
    <div className="skills__content">
        <p className="skills__title">Frontend developer</p>

        <div className="skills__box">   
            <div className="skills__group">
                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-html5"></ion-icon></i>

                    <div>
                        <p className="skills__name">HTML</p>
                        <span className="skills__level">Basic</span>
                    </div>  
                </div>

                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-css3"></ion-icon></i>

                    <div>
                        <p className="skills__name">CSS</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>

                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-css3"></ion-icon></i>

                    <div>
                        <p className="skills__name">Bootstrap</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-github"></ion-icon></i>

                    <div>
                        <p className="skills__name">Git</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>

                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-react"></ion-icon></i>

                    <div>
                        <p className="skills__name">React</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default frontend