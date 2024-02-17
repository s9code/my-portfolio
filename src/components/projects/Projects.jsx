import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/s9code/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const data = await res.json();
                setRepos(data);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div className='projects' id="projects">
            <div className='projects__title'>
                <p className='projects__title-item'>Proyectos</p>
            </div>
            <div>
                <ul className='projects__item'>
                    {repos.map(item => (
                        <div className="projects__repost">
                            <li key={item.id}>
                                <strong>{item.name.toUpperCase()}</strong>
                                <span>URL: <a href={item.html_url}>{item.html_url}</a></span>
                            </li>
                        </div>  
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;