function createPassword() {
    //verifica que la longitud sea correcta
    let length = parseInt(document.getElementById('length').value);
    if (length < 8) {
        alert("La longitud debe ser mayor o igual a 8.")
        return;
    }
    if (length > 20) {
        alert("La longitud debe ser menor o igual a 20.")
        return;
    }
    //verifica si debe contener mayusculas,numeros o simbolos
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    //constantes que dicen cuales son los caracteres que se pueden utilizar
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    //inicia la contraseña provisional con solo minusculas, ya que es lo unico que no se verifica
    let contraseña = lowercase;
    //si debe de incluir alguno lo suma a la contraseña provisional
    if (includeUppercase) {
        contraseña += uppercase;
    }
    if (includeNumbers) {
        contraseña += numbers;
    }
    if (includeSymbols) {
        contraseña += symbols;
    }

    //inicia la contraseña final y junto con la longitud va multiplicando para agregarle un caracter
    //random de la contraseña provisional 
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * contraseña.length);
        password += contraseña[randomIndex];
    }

    document.getElementById('display-password').textContent = password;
}