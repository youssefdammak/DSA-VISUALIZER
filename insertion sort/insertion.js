const data=[240,100,200,270,120,150,290,140,160,210];/*set the bars heights in an array*/
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
async function insertionSort() {
    const bars=document.querySelectorAll('.bar');
    for (let i = 1; i < bars.length; i++) {
        let key = bars[i].style.height;
        bars[i].style.backgroundColor='#FF5733';
        bars[i].classList.add('show-arrow');
        await new Promise(resolve => setTimeout(resolve, 1000));
        bars[i].style.backgroundColor='#002B5C';
        bars[i].classList.remove('show-arrow');
        let j = i - 1;
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j].style.backgroundColor='#FF5733';
            bars[j+1].style.backgroundColor='#FF5733';
            bars[j].classList.add('show-arrow');
            bars[j+1].classList.add('show-arrow');
            await new Promise(resolve => setTimeout(resolve, 1000));
            bars[j].style.backgroundColor='#002B5C';
            bars[j+1].style.backgroundColor='#002B5C';
            bars[j].classList.remove('show-arrow');
            bars[j+1].classList.remove('show-arrow');
            bars[j + 1].style.height = bars[j].style.height;
            j = j - 1;
        }
        if(j+1!=i){
            bars[j+1].style.backgroundColor='#FF5733';
            bars[i].style.backgroundColor='#FF5733';
            bars[j+1].classList.add('show-arrow');
            bars[i].classList.add('show-arrow');
            await new Promise(resolve => setTimeout(resolve, 1000));
            bars[j + 1].style.height = key;
            bars[j+1].style.backgroundColor='#002B5C';
            bars[i].style.backgroundColor='#002B5C';
            bars[j+1].classList.remove('show-arrow');
            bars[i].classList.remove('show-arrow');
        }
    }
}
sortButton.addEventListener('click', () => {insertionSort();});