const box = document.getElementById("box");
const pushButton = document.getElementById('pushBtn');
const popButton = document.getElementById("popBtn");
let stack=[];
function pushToStack(){
    if(stack.length==0){
        const bar=document.createElement('div');
        bar.className="bar";
        bar.textContent=parseInt(Math.random()*10);
        box.appendChild(bar);
        stack.push(stack.length+1);
    }
    else if(stack.length<8)
    {
        const arrow =document.createElement('div')
        arrow.className='arrow';
        arrow.textContent='↓'
        const bar=document.createElement('div');
        bar.className="bar";
        bar.textContent=parseInt(Math.random()*10);
        box.appendChild(arrow);
        box.appendChild(bar);
        stack.push(stack.length+1);
    }
    else{
        alert("stack overflow");
    }
}
function popFromStack(){
    if (stack.length>1){
        box.removeChild(box.lastChild);
        box.removeChild(box.lastChild);
        stack.pop();
    }
    else if (stack.length==1) {
        box.removeChild(box.lastChild);
        stack.pop();
    }
    else{
        alert("stack underflow");
    }
}
pushButton.addEventListener('click', () => {pushToStack();});
popButton.addEventListener('click', () => {popFromStack();});