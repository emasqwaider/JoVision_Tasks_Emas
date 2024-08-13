document.getElementById("getIpButton").addEventListener("click", function() {
    fetch("https://api.ipify.org/")
                .then(response => response.text())
                .then(ip => {
                    document.getElementById("getIpButton").textContent = ip;
                })
                .catch(error => {
                    console.error("Error fetching IP:", error);
                    document.getElementById("getIpButton").textContent = "Error";
                });
        });