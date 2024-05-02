import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timer, setTimer] = useState(10)

    useEffect(()=> {
        const countTimer = setTimeout(() => {
            if (timer === 0) {
                clearTimeout(countTimer);
            } else {
                setTimer((timer) => timer - 1)
            }
        }, 200);

        return () => {
            clearTimeout(countTimer)
        };

    }, [timer]);

    return (
        <>
            <p>{timer}</p>
        </>
    )
};

export default CountdownTimer;