import React from 'react';

const Information = () => {
    const exerciseInfo = [
        {
            name: 'Push-Up',
            description: 'A great bodyweight exercise for chest and arm strength.',
            videoLink: 'https://www.youtube.com/watch?v=IODxDxX7oi4', // Example video link
        },
        {
            name: 'Squat',
            description: 'A fundamental movement to build leg and glute strength.',
            videoLink: 'https://www.youtube.com/watch?v=QKKZ9eY4QJw', // Example video link
        },
        {
            name: 'Deadlift',
            description: 'A compound exercise for back and core stability.',
            videoLink: 'https://www.youtube.com/watch?v=op9kVnSso6Q', // Example video link
        },
    ];

    return (
        <div className="exercise-info-container">
            <h2 className="exercise-heading">Exercise Information</h2>
            {exerciseInfo.map((exercise, index) => (
                <div className="exercise-card" key={index}>
                    <div className="exercise-card-content">
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                        <a href={exercise.videoLink} target="_blank" rel="noopener noreferrer">
                            <button className="view-video-button">View Video</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Information;
