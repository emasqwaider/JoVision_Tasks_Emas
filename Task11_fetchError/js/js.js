document.getElementById("getIpButton").addEventListener("click", function() {
    fetch("https://api.ipify.orgx/")
                .then(response => response.text())
                .then(ip => {
                    document.getElementById("getIpButton").textContent = ip;
                })
        .catch(error => {
            alert("Error fetching IP:", error);
                    document.getElementById("getIpButton").textContent = "Error";
                });
        });