const box = document.getElementById("box");
const EnqueueButton = document.getElementById('Enqueue');
const DequeueButton = document.getElementById("Dequeue");
let queue=[];
function Enqueue(){
    if(queue.length<10)
    {
        const bar=document.createElement('div');
        bar.className="bar";
        bar.textContent=parseInt(Math.random()*10);
        box.appendChild(bar);
        queue.push(queue.length+1);
    }
    else{
        alert("queue overflow");
    }
}
function Dequeue(){
    if (queue.length>0){
        box.removeChild(box.firstChild);
        queue.shift();
    }
    else{
        alert("queue underflow");
    }
}
EnqueueButton.addEventListener('click', () => {Enqueue();});
DequeueButton.addEventListener('click', () => {Dequeue();});