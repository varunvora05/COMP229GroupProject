import React, { useState, useEffect } from 'react';

const WorkoutPlan = () => {
    const workoutPlans = [
        {
            day: 'Monday',
            exercises: ['Push-ups', 'Pull-ups', 'Squats'],
        },
        {
            day: 'Wednesday',
            exercises: ['Deadlifts', 'Lunges', 'Plank'],
        },
        {
            day: 'Friday',
            exercises: ['Bench Press', 'Rows', 'Burpees'],
        },
    ];

    const [checkboxes, setCheckboxes] = useState(
        workoutPlans.flatMap((plan) => plan.exercises.map(() => false))
    );
    const [repCounts, setRepCounts] = useState(
        workoutPlans.flatMap((plan) => plan.exercises.map(() => 0))
    );
    const [timers, setTimers] = useState(
        workoutPlans.flatMap(() => 0)
    );
    const [intervals, setIntervals] = useState(
        workoutPlans.flatMap(() => null)
    );
    const [submittedCards, setSubmittedCards] = useState(new Array(workoutPlans.length).fill(false));

    const handleCheckboxChange = (index) => {
        setCheckboxes((prev) => {
            const newCheckboxes = [...prev];
            newCheckboxes[index] = !newCheckboxes[index];
            return newCheckboxes;
        });
    };

    const handleRepChange = (index, operation) => {
        setRepCounts((prev) => {
            const newRepCounts = [...prev];
            newRepCounts[index] = Math.max(0, newRepCounts[index] + operation);
            return newRepCounts;
        });
    };

    const startTimer = (index) => {
        if (intervals[index]) return;

        const interval = setInterval(() => {
            setTimers((prev) => {
                const newTimers = [...prev];
                newTimers[index] = newTimers[index] + 1;
                return newTimers;
            });
        }, 1000);

        const newIntervals = [...intervals];
        newIntervals[index] = interval;
        setIntervals(newIntervals);
    };

    const resetTimer = (index) => {
        clearInterval(intervals[index]);
        setTimers((prev) => {
            const newTimers = [...prev];
            newTimers[index] = 0;
            return newTimers;
        });

        const newIntervals = [...intervals];
        newIntervals[index] = null;
        setIntervals(newIntervals);
    };

    const markAsSubmitted = (index) => {
        setSubmittedCards((prev) => {
            const newSubmittedCards = [...prev];
            newSubmittedCards[index] = true;
            return newSubmittedCards;
        });
    };

    useEffect(() => {
        return () => {
            intervals.forEach((interval) => {
                if (interval) clearInterval(interval);
            });
        };
    }, [intervals]);

    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontWeight: 'bold' }}>Workout Plan</h2>
            {workoutPlans.map((plan, planIndex) => (
                <div
                    key={planIndex}
                    style={{
                        margin: '20px auto',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        maxWidth: '450px',
                        backgroundColor: '#f4f4f9',
                        opacity: submittedCards[planIndex] ? 0.3 : 1,
                        pointerEvents: submittedCards[planIndex] ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h3 style={{ color: '#27ae60', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                        {plan.day}
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {plan.exercises.map((exercise, exerciseIndex) => {
                            const index = planIndex * 3 + exerciseIndex;
                            return (
                                <li key={index} style={{ margin: '15px 0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <input
                                                type="checkbox"
                                                checked={checkboxes[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                                style={{
                                                    marginRight: '10px',
                                                    transform: 'scale(1.2)',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                            {exercise}
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleRepChange(index, 1)}
                                                style={{
                                                    backgroundColor: '#27ae60', // Green button
                                                    border: 'none',
                                                    color: 'white',
                                                    padding: '5px 10px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.3s ease',
                                                }}
                                            >
                                                +
                                            </button>
                                            {repCounts[index]} reps
                                            <button
                                                onClick={() => handleRepChange(index, -1)}
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid #27ae60', // Green border
                                                    color: '#27ae60', // Green text
                                                    padding: '5px 10px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.3s ease',
                                                    marginLeft: '10px',
                                                }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => startTimer(index)}
                                            disabled={intervals[index] !== null}
                                            style={{
                                                backgroundColor: '#27ae60', // Green button
                                                color: 'white',
                                                padding: '8px 16px',
                                                border: 'none',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                marginTop: '10px',
                                                transition: 'background-color 0.3s ease',
                                                marginRight: '10px',
                                            }}
                                        >
                                            Start Timer
                                        </button>
                                        <button
                                            onClick={() => resetTimer(index)}
                                            style={{
                                                backgroundColor: '#ffffff', // White button
                                                color: '#27ae60', // Green text
                                                padding: '8px 16px',
                                                border: '1px solid #27ae60', // Green border
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                marginTop: '10px',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            Reset Timer
                                        </button>
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        Time: {timers[index]} seconds
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <button
                            onClick={() => markAsSubmitted(planIndex)}
                            style={{
                                backgroundColor: '#27ae60', // Green button
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '15px',
                                transition: 'background-color 0.3s ease',
                                fontWeight: 'bold',
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkoutPlan;
