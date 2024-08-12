
function sub() {


    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;
    const timestamp = new Date().toISOString();
    const userObject = {
        "name": name,
        "age": age,
        "timestamp": timestamp
    };
    alert("Your Name is " + userObject.name + "\r" + "Your age is "  + userObject.age);
    console.log(userObject);

}


