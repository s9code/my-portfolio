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
                // Ordenar los repositorios por fecha de creación
                data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                // Limitar la cantidad de proyectos mostrados a los últimos 5
                const latestRepos = data.slice(0, 5);
                setRepos(latestRepos);
                //Con este codigo muestra todos los proyectos
                //setRepos(data);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div className='projects' id="projects">
            <div className='projects__title'>
                <p className='projects__title-item'>Proyectos</p>
            </div>
            <div className='projects__container'>
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
            <div className="text-github"><h3>Puedes ver el resto de ptoyectos en mi <a className='github-item' href="https://github.com/s9code">github</a></h3></div>
        </div>
    );
};

export default Projects;