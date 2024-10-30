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
        let precioBruto = 0;

        console.log(numeroProductos)
        for (let i = 0; i < numeroProductos; i++) {
            let precioProducto = parseFloat(prompt('Ingrese el precio del producto #' + (i + 1)))
            
            // Validar que el precio ingresado sea un número válido
            if (isNaN(precioProducto) || precioProducto <= 0) {
                console.log('Por favor, ingrese un precio válido.');
                continue; // Volver a pedir el precio
            }
            precioBruto = precioBruto + precioProducto
        }
        console.log(precioBruto)

         // 5. El sistema permitirá al cliente agregar productos hasta que indique que no quiere más, usando un ciclo while.
        
        let adicionarProducto = parseInt(prompt('¿Desea agregar otro producto? 1.Sí 2.No '))
            // Validar que la respuesta sea 1 o 2
            while (adicionarProducto !== 1 && adicionarProducto !== 2) {
                adicionarProducto = parseInt(prompt('Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No '));
                continue; // Volver a pregutar si se desea agregar producto
            }
            //Ciclo while para agregar productos hasta que se indique lo contrario
                while (adicionarProducto === 1) {
                    let precioIngresado = parseFloat(prompt('Ingrese el precio del producto:'));
                    
                    // Validar que el precio ingresado sea un número válido
                    if (isNaN(precioIngresado) || precioIngresado <= 0) {
                        console.log('Por favor, ingrese un precio válido.');
                        continue; // Volver a pedir el precio
                    }

                    numeroProductos ++;
                    precioBruto += precioIngresado;
                    adicionarProducto = parseInt(prompt('¿Desea agregar otro producto? 1.Sí 2.No '));

                    // Validar que la respuesta sea 1 o 2
                    while (adicionarProducto !== 1 && adicionarProducto !== 2) {
                        adicionarProducto = parseInt(prompt('Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No '));
                    }
                }
                
                console.log(numeroProductos)
                console.log(precioBruto)

                

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

