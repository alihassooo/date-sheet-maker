'use client'

import React, { useEffect, useState } from 'react';

const DataComponent = () => {
    const [count, setCount] = useState(0);

    // useEffect to show an alert when the count reaches 5
    useEffect(() => {
        if (count === 5) {
            alert('Count has reached 5!');
        }
    }, [count]); // The effect runs whenever 'count' changes

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    )
}

export default DataComponent;
