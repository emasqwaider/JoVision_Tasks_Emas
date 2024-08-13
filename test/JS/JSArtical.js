

const p = document.querySelector("#printHe");
const btn = document.querySelector("button");

btn.addEventListener("click", print);


function print() {

    p.innerHTML = "Hello World";
}



/*const article = document.querySelector("#content");
const button = document.querySelector("button");
 function showMore() {
     if (article.className == "open") {
         article.className = "";
        button.innerHTML = "Show more";
    }
    else {
         article.className = "open";
        button.innerHTML = "Show less";

    }
}*/