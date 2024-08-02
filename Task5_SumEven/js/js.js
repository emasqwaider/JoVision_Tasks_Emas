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
            if(A[i]%2==0){
            sum += A[i];}
        }  
        p.innerHTML += "The summation of even numbers is "+ sum;
    }
    else {
       
        p.innerHTML = "";
    }
}