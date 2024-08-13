

const name = document.querySelector(".name");

document.querySelectorAll('button').forEach(button => {
    const color = button.className;
    button.addEventListener("click", () => changeTo(color));
});

function changeTo(color) {

    name.style.color =color;

}

