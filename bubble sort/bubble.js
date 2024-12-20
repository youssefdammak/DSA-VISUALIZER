const data=[240,100,200,270,120,150,270,140,160,210];
const box=document.getElementById('box');
const button=document.getElementById('sortButton')
function setBars(box,x){
    const bar=document.createElement('div');
    bar.className='bar';
    bar.style.height=x+'px';
    box.appendChild(bar);
}
for(let i=0 ;i<data.length;i++){
    setBars(box,data[i]);
}
async function bubbleSort(){
    const bars=document.querySelectorAll('.bar');
    for(let i=0;i<bars.length;i++)
    {
        for(let j=0;j<bars.length-i-1;j++)
        {
            bars[j].style.backgroundColor='#FF5733';
            bars[j+1].style.backgroundColor='#FF5733';
            await new Promise(resolve => setTimeout(resolve, 1000));
            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height))
            {
                const temp=bars[j].style.height;
                bars[j].style.height=bars[j+1].style.height;
                bars[j+1].style.height=temp;
            }
            bars[j].style.backgroundColor ='#002B5C';
            bars[j+1].style.backgroundColor ='#002B5C';
        }
    }
}
sortButton.addEventListener('click', () => {bubbleSort();});