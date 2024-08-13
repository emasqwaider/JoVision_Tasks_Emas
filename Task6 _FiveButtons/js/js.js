//const btn = document.querySelectorAll('button');
document.querySelectorAll('button').forEach(button => {
    const num = button.id;
    button.addEventListener("click", () => print(num));
});
const p = document.querySelector('#p');

//btn.addEventListener('click', print);
function print(num) {
    p.innerHTML = "";
    const A = new Array(101);
    for (let i = 0; i < A.length; i++) {
                A[i] = i;
            }
    if (num == '1') {
        
            for (let i = 0; i < A.length; i++) {
                if (A[i] % 3 != 0)
                    p.innerHTML += A[i] + " ";
            

        }
    }
    else if (num == '2') {
      
        for (let i = A.length; i < 151; i++) {
            A.push(i);
        }
        for (let i = 0; i < A.length; i++) {
           
                p.innerHTML += A[i] + " ";
        }
    }
    else if (num == '3') {

       
        for (let i = 0; i < A.length; i++) {

            p.innerHTML += (A[i]+3) + " ";
        }
    }
    else if (num == '4') {

     
        for (let i = 20; i < 41; i++) {

            p.innerHTML += A[i] + " ";
        }
    }
    else if (num == '5') {


        for (let i = A.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [A[i], A[j]] = [A[j], A[i]];
        }
        p.innerHTML += "The shuffle array " + '<br>';
        for (let i = 0; i < A.length; i++) {

            p.innerHTML += (A[i]) + " ";
        }
        p.innerHTML += "<br> The Descending Order " + '<br>';
        A.sort(function (a, b) { return a - b });
        for (let i = 0; i < A.length; i++) {

            p.innerHTML += (A[i]) + " ";
        }
    }
}