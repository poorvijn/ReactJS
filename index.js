//  THE VANILLA JAVASCRIPT WAY
// const root = document.getElementById('root');
// const header = document.createElement('h1');
// header.innerText = "Hello from Poorvi";
// root.appendChild(header);

// THE REACT WAY, WITHOUT JSX
const p1 = React.createElement('p',{},"Hi I'm child 1");
const p2 = React.createElement('p',{},"Hi I'm child 2");
const div = React.createElement('div',{className: 'colorChange'},[p1,p2]);
console.log(div);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);