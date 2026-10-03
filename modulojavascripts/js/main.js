let continuar = true;
let total = 0;

while (continuar) {

    let opcion = prompt(
        "Seleccione una vianda:\n" +
        "1 - Vianda veggie ($7000)\n" +
        "2 - Vianda de pollo ($8000)\n" +
        "3 - Vianda de carne ($9000)\n" +
        "4 - Salir"
    );

    if (opcion === "1") {

        let cantidad = prompt("¿Cuántas viandas veggie quiere?");
        cantidad = parseInt(cantidad);

        total = total + cantidad;

        console.log("Pedido de viandas veggie realizado.");

    } else if (opcion === "2") {

        let cantidad = prompt("¿Cuántas viandas de pollo quiere?");
        cantidad = parseInt(cantidad);

        total = total + cantidad;

        console.log("Pedido de viandas de pollo realizado.");

    } else if (opcion === "3") {

        let cantidad = prompt("¿Cuántas viandas de carne quiere?");
        cantidad = parseInt(cantidad);

        total = total + cantidad;

        console.log("Pedido de viandas de carne realizado.");

    } else if (opcion === "4") {

        continuar = false;

    } else {

        alert("Opción incorrecta");
    }
}

console.log("Cantidad total de viandas: " + total);
alert("Pedido finalizado. Total de viandas: " + total);