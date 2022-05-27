if (window.location.href.includes('register.html')) {

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

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let pass = document.getElementById('pass');
    let confirmPass = document.getElementById('confirmPass');

    name.addEventListener('keyup', () => {
        let regex = /^[a-zA-Z]{2,}$/;
        if (regex.test(name.value)) {
            name.style.border = '1px solid green';
        } else {
            name.style.border = '1px solid red';
        }
    })

    email.addEventListener('keyup', () => {
        let regex = /^[a-zA-Z0-9]{2,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}$/;
        if (regex.test(email.value)) {
            email.style.border = '1px solid green';
        } else {
            email.style.border = '1px solid red';
        }
    })

    phone.addEventListener('keyup', () => {
        let regex = /^[0-9]{9}$/;
        if (regex.test(phone.value)) {
            phone.style.border = '1px solid green';
        } else {
            phone.style.border = '1px solid red';
        }
    })

    pass.addEventListener('keyup', () => {
        let regex = /^[a-zA-Z0-9]{3,}$/;
        if (regex.test(pass.value)) {
            pass.style.border = '1px solid green';
        } else {
            pass.style.border = '1px solid red';
        }
    })

    confirmPass.addEventListener('keyup', () => {
        if (confirmPass.value != pass.value) {
            confirmPass.style.border = '1px solid red';
        }
        else if (confirmPass.value == pass.value) {
            confirmPass.style.border = '1px solid green';
        }
    })

}