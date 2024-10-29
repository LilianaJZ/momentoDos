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

        /* Un sistema de ventas para una tienda de ropa necesita calcular el total a pagar de los 
        clientes. El cliente puede comprar varios productos, y se aplican descuentos según la 
        cantidad adquirida. Además, se debe agregar el IVA al total.
        Requisitos:*/

        // 1. El sistema debe capturar el número de productos y el precio de cada producto.

        let numeroProductos = parseInt(prompt('Indique el numero de productos diferentes que se van a comprar: '));
        let precioProducto = 0;

        console.log(numeroProductos)
        for (let i = 0; i < numeroProductos; i++) {
            let precioIngresado = prompt('Ingrese el precio del producto #' + (i + 1))
            precioProducto = precioProducto + precioIngresado
        }


        // 2. Si el cliente compra más de 5 productos, se aplica un 10% de descuento.
        // 3. Se debe calcular el IVA (19%) sobre el total.
        // 4. Si el valor final supera $500,000, se aplica un 5% de descuento adicional.
        // 5. El sistema permitirá al cliente agregar productos hasta que indique que no 
        // quiere más, usando un ciclo while.


        break;
    } else {
        contador++;
    }
    if (contador === 3) {
        console.log("Lo sentimos, ha excedido el número de intentos 😣");
    }
}

