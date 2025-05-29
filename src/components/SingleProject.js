import React from 'react';

function SingleProject({ project, index, setModal }) {
    const { name, icon, id } = project;

    return (
        <div
            onMouseEnter={() => {
                setModal({ active: true, index, currentElement: id });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index, test: '' });
            }}
            className='project'
        >
            <div className='name-wrapper'>
                <span>{icon}</span>
                <h3>{name}</h3>
            </div>

            <p>Design & Development</p>
        </div>
    );
}

export default SingleProject;
