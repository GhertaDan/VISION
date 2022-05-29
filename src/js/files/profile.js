if (window.location.href.includes("profile.html")) {
    const btnLogout = document.getElementById("btnLogout");

    btnLogout.addEventListener("click", () => {
        window.onbeforeunload = function () {
            localStorage.removeItem("activeUser");
        }
        window.location.href = "index.html";
    })
}