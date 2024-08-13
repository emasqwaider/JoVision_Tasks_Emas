const btn = document.querySelector('button');
const p = document.querySelector('#p');

btn.addEventListener('click', print);
function print() {


    if (p.innerHTML == "") {
        const A = new Array(101);
        let sum = 0;
        for (let i = 0; i < A.length; i++) {
            A[i] = i;
        }
       // p.innerHTML += "[ ";
        for (let i = 0; i < A.length; i++) {
            sum += A[i];
        }  
        p.innerHTML += "The sum is "+ sum;
    }
    else {
       
        p.innerHTML = "";
    }
}