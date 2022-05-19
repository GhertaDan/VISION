let users = [];
let form = document.getElementById("form");
form.addEventListener('submit', e => {
    if (localStorage.getItem('user')) {
        users.push(JSON.parse(localStorage.getItem('user')))
    }
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        pass: document.getElementById('pass').value,
        confirmPass: document.getElementById('confirmPass').value,
    }
    if (user.pass != user.confirmPass) alert('parola gresita')
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users));
        console.log(user);
    }
    e.preventDefault();
})