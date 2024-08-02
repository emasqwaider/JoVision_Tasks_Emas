const btn = document.querySelector('button');
const p = document.querySelector('#p');

btn.addEventListener('click', print);
function print() {


    if (p.innerHTML == "") {

        p.innerHTML = "Hello World";
        
    }
    else {
       
        p.innerHTML = "";
    }
}