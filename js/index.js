let PrecioCombo = 20500
let PrecioOtro = 7890
let interes = 1.1
let cuotas

function login(){
    alert("¡Hola Usuari@! Notamos que estás interesad@ en comprar el Juego Base y/o incorporar un extra más a tu colección de Los Sims 2. ¡Tome su tiempo en revisar todo nuestro catalogo, y luego prosiga!")
    alert("¿Ya sabés que comprar? Te podemos ofrecer un combo vigente de Los Sims 2, que consta el Juego Base + Mascotas + Y las Cuatro Estaciones, en un 50% de 24.490 pesos, y puedes abonarlo en 6 cuotas sin interés.")
    let busqueda = prompt("¿Qué le interesa? (combo/otro)").toUpperCase()
    if (busqueda == "combo"){
        alert("El precio del combo es de 12.245 pesos")
        preciototal = PrecioCombo
        while (preciototal > 12.245){
            preciototal = preciototal * 0.9
            interes = 1
        }
        alert("El precio total de su compra es de " + preciototal.toFixed())

        continuar = prompt("¿Desea proseguir con su compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuántas cuotas desea realizar su compra? (1/2/3/4/5/6)")
            preciototal = preciototal / cuotas * interes
            alert("El precio total por cuota será de " + preciototal.toFixed())
            confirmacion = prompt("¿Desea proseguir con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su compra!")
            }else{
                alert("¡Que tenga un buen día! Puede seguir chequeando nuestro catalogo cuando gustes.")
            }

        }else{
            alert("¡No hay problema! Puede seguir chequeando nuestro catalogo cuando gustes.")
        }
    }else if(busqueda == "otro"){
        alert("El precio del cualquier otra expansión que figure en el catalogo es de 6590 pesos")
        let cantidad = prompt("¿Cuántas roms quieres agregar al carrito?")
        preciototal = PrecioOtro * cantidad
        while (preciototal > 6590){
            preciototal = preciototal * 0.9
            interes = 1
        }
        alert("El precio total de su compra es de " + preciototal.toFixed())

        continuar = prompt("¿Desea proseguir con su compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuántas cuotas desea realizar su compra? (1/2/3/4/5/6)")
            preciototal = preciototal / cuotas * interes
            alert("El precio total por cuota es de " + preciototal.toFixed())
            confirmacion = prompt("¿Desea proseguir con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su compra!")
            }else{
                alert("¡Que tenga un buen día! Puede seguir chequeando nuestro catalogo cuando gustes.")
            }

        }else{
            alert("¡No hay problema! Puede seguir chequeando nuestro catalogo cuando gustes.")
        }
    }else{
        alert("Lo siento, está teniendo problemas con nuestro servidor. Vuelva pronto. :(")
    }
}
login()
