import React from 'react';

const backend = () => {
  return (
    <div className="skills__content">
        <p className="skills__title">Backend developer</p>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="code-outline"></ion-icon></i>

                    <div>
                        <p className="skills__name">PHP</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>
            
                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-nodejs"></ion-icon></i>

                    <div>
                        <p className="skills__name">Node Js</p>
                        <span className="skills__level">Basic</span>
                    </div>  
                </div>
            
                <div className="skills__data">
                    <i className='skills__i'><ion-icon name="logo-python"></ion-icon></i>

                    <div>
                        <p className="skills__name">Python</p>
                        <span className="skills__level">Intermediate</span>
                    </div> 
                </div> 
            </div> 
            <div className="skills__group">
                <div className="skills__data">
                    <i><ion-icon name="analytics-outline"></ion-icon></i>

                    <div>
                        <p className="skills__name">MySQL</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>
            
                <div className="skills__data">
                    <i><ion-icon name="logo-firebase"></ion-icon></i>

                    <div>
                        <p className="skills__name">Firebase</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>
            
                <div className="skills__data">
                    <i><ion-icon name="analytics-outline"></ion-icon></i>

                    <div>
                        <p className="skills__name">SQL</p>
                        <span className="skills__level">Intermediate</span>
                    </div>  
                </div>

            </div>
        </div>
    </div>
  )
}

export default backend