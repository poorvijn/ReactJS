import React from 'react';

const Button = (props)=>{
    const {children, clickAction, data} = props;
    const handleClick = ()=>{
        // console.log('Inside child');
        clickAction?.();
    };
    // console.log(props);
    return <button onClick={handleClick}>{children} {data?.a}</button>;
};

export default Button;