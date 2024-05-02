import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timer, setTimer] = useState(10)

    useEffect(()=> {
        const countTimer = setTimeout(() => {
            
            if (timer === 0) clearTimeout(countTimer);         
            else setTimer((timer) => timer - 1);
            
        }, 520);

        return () => {
            clearTimeout(countTimer)
        };

    });

    return (
        <>
            <p>Timer: {timer}</p>
        </>
    )
};

export default CountdownTimer;