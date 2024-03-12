import React from 'react';
import Button from './Button';

const App = ()=>{
    const handleClickAction = ()=>{
        console.log('Inside parent');
    };
    return <Button clickAction={handleClickAction} data={{a:'Hi'}}>Click Me!</Button>;
};

export default App;