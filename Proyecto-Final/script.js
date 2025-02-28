const users = [
    {name: "Yosselin Ríos", username: "yo-oss", password: "1234", image: "https://th.bing.com/th/id/OIP.7nbqumECd0QnwmceT3AHrAHaHj?w=736&h=750&rs=1&pid=ImgDetMain"},
    {name: "Ivan García", username: "ivanfou", password: "abcd", image:"https://images.pexels.com/photos/19651067/pexels-photo-19651067/free-photo-of-plato-postre-dulce-pastel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Mariana López", username: "marilopez", password: "pass123", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"},  
    {name: "Carlos Méndez", username: "cmendez99", password: "qwerty", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"}
]

function LogIn() {
    const usernamePage = document.getElementById('username').value;
    const passwordPage = document.getElementById('password').value;
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind))
        window.location.href = "home.html"
    } else {
        error.textContent = "*Usuario o contraseña incorrecto"        
    }

}
