import React, { useState } from 'react';

const App = () => {
    const [ count, updateCount ] = useState(null);

    const onButtonClick = () => {
        return updateCount(count + 1);
    }

    return (
        <div>
            <button onClick={() => onButtonClick()}>Click Me!</button>
            {console.log('count: ', count)}
            <h1>Current Count: {count}</h1>
        </div>
    ); 
};

export default App;