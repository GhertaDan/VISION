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
        window.location.href = 'home.html';
    }
    e.preventDefault()
})