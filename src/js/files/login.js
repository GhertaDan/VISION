if (window.location.href.includes('login.html')) {
    if (JSON.parse(localStorage.getItem("activeUser"))) {
        window.location.href = 'profile.html';
    }
    let login = document.getElementById('formLogin')
    let users = [];
    users.push(JSON.parse(localStorage.getItem('formData')))
    login.addEventListener('submit', e => {
        let formData = {
            email: document.getElementById('emailLogin').value,
            pass: document.getElementById('passLogin').value
        }
        let users = JSON.parse(localStorage.getItem("users"));
        let user = users.find((el) => el.email === formData.email && el.pass === formData.pass);

        if (user) {
            localStorage.setItem("activeUser", JSON.stringify(user));
            window.location.href = 'profile.html';
        }
        e.preventDefault()
    })

}