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
    let user = prompt(`intento #${contador + 1} \n Digite su usuario: `);
    let password = prompt("Digite su contraseña: ");
    if (user === usuarios[0].usuario && password === usuarios[0].password) {
        console.log("Bienvenido!");
        //El sistema captura el número de productos y el precio de cada producto.
        let precioBruto = 0;
        let descuentoAdicional = 0;
        let total;
        let iva;
        let descuento = 0;
        let totalFinal;
        let productos = [];
        //El sistema captura el número de productos
        let numeroProductos = parseInt(
            prompt("Indique el numero de productos que se van a vender: ")
        );
        //Validación del numero de productos
        while (isNaN(numeroProductos) || numeroProductos <= 0) {
            numeroProductos = parseInt(
                prompt(
                    "Respuesta inválida. Por favor, ingrese un numero de productos válido."
                )
            );
        }
        //El sistema captura el precio de cada producto.
        for (let i = 0; i < numeroProductos; i++) {
            let precioProducto = parseFloat(
                prompt("Ingrese el precio del producto #" + (i + 1))
            );
            // Validación del precio ingresado
            while (isNaN(precioProducto) || precioProducto <= 0) {
                precioProducto = parseFloat(
                    prompt(
                        "Respuesta inválida. Por favor, ingrese un precio válido. \n Ingrese el precio del producto #" +
                        (i + 1)
                    )
                );
            }
            precioBruto = precioBruto + precioProducto;
            //Si el cliente compra más de 5 productos, se aplica un 10% de descuento.
            if (numeroProductos > 5) {
                descuento = precioBruto * (10 / 100);
            } else {
                descuento = 0;
            }
            //Se calcula el IVA (19%) sobre el total.
            iva = (precioBruto - descuento) * 0.19;
            total = precioBruto - descuento + iva;
            //Si el valor final supera $500,000, se aplica un 5% de descuento adicional.
            if (total > 500000) {
                descuentoAdicional = total * 0.05;
            } else {
                descuentoAdicional = 0;
            }
            //Acumula el total final después de cada iteración.
            totalFinal = total - descuentoAdicional;
            productos[i] = { nombre: 'item ' + (i + 1), precio: precioProducto, totalFinal: totalFinal };
        }
        // El sistema captura si se desea añadir otro producto.
        let adicionarProducto = parseInt(
            prompt("¿Desea agregar otro producto? 1.Sí 2.No ")
        );
        // Validación de la respuesta, 1 o 2
        while (adicionarProducto !== 1 && adicionarProducto !== 2) {
            adicionarProducto = parseInt(
                prompt(
                    "Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No "
                )
            );
        }
        //Ciclo while que agrega productos hasta que se indique lo contrario
        while (adicionarProducto === 1) {
            let precioIngresado = parseFloat(
                prompt("Ingrese el precio del producto:")
            );
            // Validación del precio}
            while (isNaN(precioIngresado) || precioIngresado <= 0) {
                precioIngresado = parseFloat(
                    prompt("Respuesta inválida. Por favor, ingrese un precio válido.")
                );
            }
            precioBruto += precioIngresado;
            numeroProductos++;
            //Si el cliente compra más de 5 productos, se aplica un 10% de descuento.
            if (numeroProductos > 5) {
                descuento = precioBruto * (10 / 100);
            } else {
                descuento = 0;
            }
            //Se calcula el IVA (19%) sobre el total.
            iva = (precioBruto - descuento) * 0.19;
            total = precioBruto - descuento + iva;
            //Si el valor final supera $500,000, se aplica un 5% de descuento adicional.
            descuentoAdicional;
            if (total > 500000) {
                descuentoAdicional = total * 0.05;
            } else {
                descuentoAdicional = 0;
            }
            //Acumula el total final después de cada iteración.
            totalFinal = total - descuentoAdicional;
            productos[numeroProductos - 1] = { nombre: 'item ' + (numeroProductos), precio: precioIngresado, totalFinal: totalFinal };
            // Se vuele a preguntar si se desea ingresar un nuevo producto
            adicionarProducto = parseInt(
                prompt("¿Desea agregar otro producto? 1.Sí 2.No ")
            );
            // Validación de la respuesta sea 1 o 2
            while (adicionarProducto !== 1 && adicionarProducto !== 2) {
                adicionarProducto = parseInt(
                    prompt(
                        "Respuesta inválida. Digite nuevamente su respuesta \n ¿Desea agregar otro producto? 1.Sí 2.No "
                    )
                );
            }
        }
        //Para mostrar acumulado de totalFinal por cada iteracion
        console.log(productos);
        iteracion(productos);
        //Para mostrar el recibo final de la venta y otros detalles
        recibo(productos, precioBruto, descuento, iva, total, descuentoAdicional, totalFinal);

        break;
    } else {
        contador++;
    }
    if (contador === 3) {
        console.log("Lo sentimos, ha excedido el número de intentos 😣");
    }
}

function recibo(productos, precioBruto, descuento, iva, total, descuentoAdicional, totalFinal) {
    console.log("\n ===================================");
    console.log("           RECIBO DE VENTA          ");
    console.log("===================================");
    console.log("Productos:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`);
    });
    console.log("-----------------------------------");
    console.log(`Valor bruto: $${precioBruto.toFixed(2)}`);
    console.log(`Descuento (10%): -$${descuento.toFixed(2)}`);
    console.log(`IVA (19%): $${iva.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
    console.log("-----------------------------------");
    console.log(`Descuento adicional (5%): -$${descuentoAdicional.toFixed(2)}`);
    console.log("-----------------------------------");
    console.log(`Total Final a pagar: $${totalFinal.toFixed(2)}`);
    console.log("===================================");
    console.log("       ¡Gracias por su compra!      ");
    console.log("===================================");
}

function iteracion(productos) {
    console.log("===========================================");
    console.log('ACUMULADO DE TOTAL FINAL POR CADA ITERACION')
    console.log("===========================================");
    console.log("Productos:");
    console.log("items - precio - total Final acumulado")
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)} - $${producto.totalFinal.toFixed(2)}`);
    });
    console.log("===========================================");
}