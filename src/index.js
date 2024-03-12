//  ----------THE VANILLA JAVASCRIPT WAY----------
// const root = document.getElementById('root');
// const header = document.createElement('h1');
// header.innerText = "Hello from Poorvi";
// root.appendChild(header);

// ---------THE REACT WAY, WITH AND WITHOUT JSX--------
import React from 'react';
import ReactDOM from 'react-dom/client';

// const p1 = React.createElement('p',{},"Hi I'm child 1");
// const p2 = React.createElement('p',{},"Hi I'm child 2");
// const div = React.createElement('div',{className: 'colorChange'},[p1,p2]);
// const div = <div>
//     <p>Hi</p>
// </div>
// console.log(div);

// ------- CONDITIONAL RENDERING -------
// const flag=false;
// const p1 = <p>I'm para 1, when true</p>
// const p2 = <p>I'm para 2, when false</p>
// const condiDiv = flag?p1:p2;

// ---------A simple time application--------
// const currentDate = new Date();
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// const GetGreeting = function()
// {
//     let greeting='';
//     if(hours<12)
//         greeting=<p>Good morning!</p>
//     else
//         greeting=<p>Good evening!</p>
//     return <>
//         {greeting}
//         The time is {hours+':'+minutes+':'+seconds}
//     </>;
// }

// -------EVENTS IN JSX------- 
const message = 'inside function';
const handleClick = (message)=>{
    console.log('Printing on click:'+message);
}

const div = <div onClick={()=>handleClick(message)}>Hi I am a div</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);