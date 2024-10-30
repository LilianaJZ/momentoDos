/* Sistema de ventas para una tienda de ropa necesita calcular el total a pagar de los 
clientes. El cliente puede comprar varios productos, y se aplican descuentos según la 
cantidad adquirida. Además, se debe agregar el IVA al total.
*/

//arreglo con los datos del usuario y contraseña
let usuarios = [
    {
        usuario: "admin",
        password: "1234",
    }
];

//logica de inicio de sesion de maximo 3 intentos
let contador = 0;
while (contador < 3) {
    let user = prompt("Digite su usuario: ");
    let password = prompt("Digite su contraseña: ");
    if (user === usuarios[0].usuario && password === usuarios[0].password) {
        console.log("Bienvenido!");

        // 1. El sistema debe capturar el número de productos y el precio de cada producto.

        let precioBruto = 0;
        let productos = [];
        let numeroProductos = parseInt(
            prompt("Indique el numero de productos que se van a vender: ")
        );

        // Validar que el numero de productos ingresados sea un número válido
        while (isNaN(numeroProductos) || numeroProductos <= 0) {
            // Volver a pedir el numero de productos
            numeroProductos = parseInt(
                prompt(
                    "Respuesta inválida. Por favor, ingrese un numero de productos válido."
                )
            );
        }
        //console.log(numeroProductos);
        for (let i = 0; i < numeroProductos; i++) {
            let precioProducto = parseFloat(
                prompt("Ingrese el precio del producto #" + (i + 1))
            );
            // Validar que el precio ingresado sea un número válido
            while (isNaN(precioProducto) || precioProducto <= 0) {
                // Volver a pedir el precio
                precioProducto = parseFloat(
                    prompt(
                        "Respuesta inválida. Por favor, ingrese un precio válido. \n Ingrese el precio del producto #" +
                        (i + 1)
                    )
                );
            }
            precioBruto = precioBruto + precioProducto;

            productos[i] = { nombre: 'item ' + (i + 1), precio: precioProducto};
        }
        //console.log(precioBruto);
        //console.log(productos);
            
        // 5. El sistema permitirá al cliente agregar productos hasta que indique que no quiere más, usando un ciclo while.

        let adicionarProducto = parseInt(
            prompt("¿Desea agregar otro producto? 1.Sí 2.No ")
        );
        // Validar que la respuesta sea 1 o 2
        while (adicionarProducto !== 1 && adicionarProducto !== 2) {
            // Volver a pregutar si se desea agregar producto
            adicionarProducto = parseInt(
                prompt(
                    "Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No "
                )
            );
        }
        //Ciclo while para agregar productos hasta que se indique lo contrario
        while (adicionarProducto === 1) {
            let precioIngresado = parseFloat(
                prompt("Ingrese el precio del producto:")
            );
            // Validar que el precio ingresado sea un número válido
            while (isNaN(precioIngresado) || precioIngresado <= 0) {
                // Volver a pedir el precio
                precioIngresado = parseFloat(
                    prompt("Respuesta inválida. Por favor, ingrese un precio válido.")
                );
            }
            numeroProductos++;
            precioBruto += precioIngresado;
            productos[numeroProductos-1] = { nombre: 'item ' + (numeroProductos), precio: precioIngresado};

            // Se vuele a preguntar si se desea ingresar un nuevo producto
            adicionarProducto = parseInt(
                prompt("¿Desea agregar otro producto? 1.Sí 2.No ")
            );
            // Validar que la respuesta sea 1 o 2
            while (adicionarProducto !== 1 && adicionarProducto !== 2) {
                adicionarProducto = parseInt(
                    prompt(
                        "Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No "
                    )
                );
            }
        }
        //console.log(numeroProductos);
        //console.log(precioBruto);
        //console.log(productos);

        // 2. Si el cliente compra más de 5 productos, se aplica un 10% de descuento.

        let descuento = 0;
        if (numeroProductos > 5) {
            descuento = precioBruto * (10 / 100);
        }
        //console.log(descuento);

        // 3. Se debe calcular el IVA (19%) sobre el total.

        let total;
        let iva;
        iva = (precioBruto - descuento) * 0.19;
        total = precioBruto - descuento + iva;
        //console.log(iva);
        //console.log(total);

        // 4. Si el valor final supera $500,000, se aplica un 5% de descuento adicional.

        let descuentoAdicional = 0;
        if (total > 500000) {
            descuentoAdicional = total * 0.05;
        }
        let totalFinal = total - descuentoAdicional;

        //console.log(descuentoAdicional);
        //console.log(total);
        //console.log(totalFinal);
        
        //Calcular el total final después de cada iteración.
            
        //Recibo y resultados por consola

        function recibo(productos, subtotal, descuento, descuentoAdicional, total, iva, totalFinal) {
            console.log("===================================");
            console.log("           RECIBO DE VENTA          ");
            console.log("===================================");
            console.log("Productos:");
            productos.forEach((producto, index) => {
                console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
            });
            console.log("-----------------------------------");
            console.log(`Subtotal: $${subtotal.toFixed(2)}`);
            console.log(`Descuento: -$${descuento.toFixed(2)}`);
            console.log(`IVA (19%): $${iva.toFixed(2)}`);
            console.log(`Total: $${total.toFixed(2)}`);
            console.log("-----------------------------------");
            console.log(`Descuento adicional: -$${descuentoAdicional.toFixed(2)}`);
            console.log("-----------------------------------");
            console.log(`Total Final a pagar: $${totalFinal.toFixed(2)}`);
            console.log("===================================");
            console.log("       ¡Gracias por su compra!      ");
            console.log("===================================");
        }

        recibo(productos, precioBruto, descuento, descuentoAdicional, total, iva, totalFinal);


        break;
    } else {
        contador++;
    }
    if (contador === 3) {
        console.log("Lo sentimos, ha excedido el número de intentos 😣");
    }
}
