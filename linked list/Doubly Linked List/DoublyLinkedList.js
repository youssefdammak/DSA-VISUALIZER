function addNode(x){
    const mainBox=document.getElementById('main-box');
    const box=document.createElement('div');
    const arrow=document.createElement('div');
    box.className='box';
    box.textContent=x;
    arrow.className='arrow';
    arrow.textContent='↔';
    const LastElement=mainBox.lastElementChild;
    mainBox.insertBefore(box,LastElement);
    mainBox.insertBefore(arrow,LastElement);
}
function removeNode(){
    const mainBox=document.getElementById('main-box');
    const box=document.querySelectorAll('.box');
    const arrow=document.querySelectorAll('.arrow');
    mainBox.removeChild(box[box.length-2]);
    mainBox.removeChild(arrow[arrow.length-1]);
}
const add = document.getElementById('Add');
const remove = document.getElementById('Remove');
let addedNodes=0;
add.addEventListener('click', () => {
    if (addedNodes<10){
        addNode(Math.round(Math.random()*100));
        addedNodes+=1;
    }
    else{
        alert("The Linked List reached maximum nodes");
    }
});
remove.addEventListener('click', () => {
    if (addedNodes>0){
        removeNode();
        addedNodes-=1;
    }
    else{
        alert("Linked List has no elements to remove");
    }
});