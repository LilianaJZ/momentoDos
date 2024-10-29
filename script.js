//arreglo con los datos del usuario y contraseña
    let usuarios = [
    {
        usuario: "admin",
        password: "1234",
    },
    ];

//logica de inicio de sesion de maximo 3 intentos
    let contador = 0;
    while (contador < 3) {
    let user = prompt("Digite su usuario: ");
    let password = prompt("Digite su contraseña: ");
    if (user === usuarios[0].usuario && password === usuarios[0].password) {
        console.log("Bienvenido!");
        break;
    }else{
        contador++;
    }
    if (contador === 3) {
        console.log("Lo sentimos, ha excedido el número de intentos 😣"); 
    }
    }
