document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    if (name) {
        fetch('https://api.agify.io?name=${name}')
            .then(response => response.json())
            .then(data => {
                const { age } = data;
                alert("Your name is: ${name}\nYour age is: ${age !== null ? age : 'unknown'}");
            })
            .catch(() => {
                alert('There was an error retrieving the age.');
            });
    } else {
        alert('Please enter a name.');
    }
});