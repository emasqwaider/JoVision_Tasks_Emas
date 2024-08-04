
const p = document.querySelector('#p');

setInterval(CurrDate, 1000);

function CurrDate() {

    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = h.toString().padStart(2, '0');
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');

    p.innerHTML = h + ":" + m + ":" + s;


}