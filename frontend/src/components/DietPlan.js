import React from 'react';


const DietPlan = () => {
    const dietPlans = [
        {
            day: 'Monday',
            meals: ['Breakfast: Oatmeal', 'Lunch: Grilled Chicken Salad', 'Dinner: Salmon with Veggies'],
        },
        {
            day: 'Wednesday',
            meals: ['Breakfast: Scrambled Eggs', 'Lunch: Turkey Sandwich', 'Dinner: Stir-Fried Tofu'],
        },
        {
            day: 'Friday',
            meals: ['Breakfast: Smoothie', 'Lunch: Quinoa Salad', 'Dinner: Grilled Steak'],
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#2c3e50' }}>Diet Plan</h2>
            {dietPlans.map((plan, index) => (
                <div
                    key={index}
                    style={{
                        margin: '20px auto',
                        padding: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        maxWidth: '400px',
                        backgroundColor: '#f4f4f9',
                    }}
                >
                    <h3>{plan.day}</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {plan.meals.map((meal, idx) => (
                            <li key={idx} style={{ margin: '5px 0' }}>
                                {meal}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default DietPlan;
