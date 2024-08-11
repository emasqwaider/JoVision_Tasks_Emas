let p = document.querySelector('#p');
let btn = document.querySelector('button');
btn.addEventListener('click', api);
function api() {



   
    fetch("https://api.ipify.org/").then(res => {
        console.log(res);
    });
}


