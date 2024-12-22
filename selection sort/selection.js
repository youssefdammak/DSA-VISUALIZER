const box=document.getElementById('box');
const data=[240,100,200,270,120,150,290,140,160,210];
function setBars(box,x){
    const bar=document.createElement('div');
    bar.className='bar';
    bar.style.height=x+'px';
    box.appendChild(bar);
}
for(let i=0;i<data.length;i++){
    setBars(box,data[i]);
}
async function selectionSort(){
    const bars=document.querySelectorAll('.bar');
    for(let i=0;i<bars.length;i++){
        let min=bars[i];
        bars[i].style.backgroundColor='#FF5733';
        bars[i].classList.add('show-arrow');
        await new Promise(resolve => setTimeout(resolve, 1000));
        for(let j=i+1;j<bars.length;j++){
            if(parseInt(bars[j].style.height)<parseInt(min.style.height)){
                min.style.backgroundColor='#002B5C';
                min=bars[j];
                bars[j].style.backgroundColor='#FF5733';
            }
            bars[j].classList.add('show-arrow');
            bars[i].classList.remove('show-arrow');
            await new Promise(resolve => setTimeout(resolve, 1000));
            bars[j].classList.remove('show-arrow');
        }
        min.style.backgroundColor='#002B5C';
        let temp=bars[i].style.height;
        bars[i].style.height=min.style.height;
        min.style.height=temp;
        bars[i].classList.remove('show-arrow');
    }
}
sortButton.addEventListener('click', () => {selectionSort();});