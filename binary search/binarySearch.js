const data=[20,45,50,55,60,70,80,85,90,100,105,110,115,120];
const box=document.getElementById('box');
function setBoxes(box,x){
    const smallBox=document.createElement('div');
    smallBox.className='small-box';
    smallBox.textContent=x;
    box.appendChild(smallBox);
}
for(let i=0;i<14;i++){
    setBoxes(box,data[i]);
}
function hideBoxes(left,right,boxes){
    for(let i=left;i<=right;i++){
        boxes[i].classList.add('hide-box');
    }
}
async function binarySearch(target,array) {
    const boxes=document.querySelectorAll('.small-box');
    let left=0;
    let right=array.length-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(array[mid]==target){
            await new Promise(resolve => setTimeout(resolve, 1000));
            hideBoxes(left,mid-1,boxes);
            hideBoxes(mid+1,right,boxes);
            boxes[mid].style.backgroundColor='#FF5733';
            boxes[mid].style.border='3px solid #002B5C';
            break;
        }
        if (array[mid] < target) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            hideBoxes(left,mid,boxes);
            left = mid + 1;
        } 
        else {
            await new Promise(resolve => setTimeout(resolve, 1000));
            hideBoxes(mid,right,boxes);
            right = mid - 1;
        }
    }
}
const button = document.getElementById('button');
button.addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    binarySearch(input,data);
});