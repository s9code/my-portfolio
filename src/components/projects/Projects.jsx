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
        <div>
            <div className="projects__title">
                <p className='projects__title-item'>Proyectos</p>
            </div>
            <ul>
                {repos.map(item => (
                    <li key={item.id}>
                        <strong>{item.name.toUpperCase()}</strong>
                        <span>URL: <a href={item.html_url}>{item.html_url}</a></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;