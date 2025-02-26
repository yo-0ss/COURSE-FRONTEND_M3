//user
const yossUser = "yoss"
const yossPassword = "1234"

function LogIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === yossUser && password === yossPassword) {
        localStorage.setItem("loggedUser", username)
        window.location.href = "home.html"
    } else {
        error.textContent = "Usuario o contraseña incorrecto"        
    }

}
