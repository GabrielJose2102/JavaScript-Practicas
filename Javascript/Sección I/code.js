document.write(`Bienvenidos a, 'Restaurante Continental <br><br>

        Carta de precios platos continetales: <br><br>
        
        - Arepa criolla de carne mechada $4 <br>
        - Bandeja paisa ---------------- $7 <br>
        - Hamburguesa Americana -------- $8 <br>
        - Tacos al pastor con salsa ---- $10 <br>
        - Pasta Napolitana ------------- $10 <br>
        - Pabellon Criollo ------------- $15 <br><br><br>`);
        
alert('Consutar recomendacion de platos por favor ');

let persona1 = prompt('Ingrese nombre: ');
let dineroP1 = prompt(`${persona1} ¿Cuanto dinero tienes?`);
let vueltoP1;

let persona2 = prompt('Ingrese nombre: ');
let dineroP2 = prompt(`${persona2} ¿Cuanto dinero tienes?`);
let vueltoP2;

let persona3 = prompt('Ingrese nombre: ');
let dineroP3 = prompt(`${persona3} ¿Cuanto dinero tienes?`);
let vueltoP3;


if (dineroP1 >= 15) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP1 = dineroP1 - 15;
} else if (dineroP1 > 9 && dineroP1 < 15) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP1 = dineroP1 - 10;
} else if (dineroP1 > 7 && dineroP1 < 10) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP1 = dineroP1 - 18;
} else if (dineroP1 > 6 && dineroP1 < 8) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP1 = dineroP1 - 7;
} else if (dineroP1 > 3 && dineroP1 < 7) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP1 = dineroP1 - 4;
} else {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que No posees dinero suficiente <br>`)
}
document.write(`Vuelto: ${vueltoP1}$ <br><br>`);



if (dineroP2 >= 15) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP2 = dineroP2 - 15;                
} else if (dineroP2 > 9 && dineroP2 < 15) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP2 = dineroP2 - 10;                
} else if (dineroP2 > 7 && dineroP2 < 10) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP2 = dineroP2 - 8;                
} else if (dineroP2 > 6 && dineroP2 < 8) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP2 = dineroP2 - 7;                
} else if (dineroP2 > 3 && dineroP2 < 7) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP2 = dineroP2 - 4;               
} else {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que No posees dinero suficiente <br><br>`)
}
document.write(`Vuelto: ${vueltoP2}$ <br>`);


if (dineroP3 >= 15) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP3 = dineroP3 - 15;
} else if (dineroP3 > 9 && dineroP3 < 15) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP3 = dineroP3 - 10;
} else if (dineroP3 > 7 && dineroP3 < 10) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP3 = dineroP3 - 8;
} else if (dineroP3 > 6 && dineroP3 < 8) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP3 = dineroP3 - 7;
} else if (dineroP3 > 3 && dineroP3 < 7) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP3 = dineroP3 - 4;
} else {
    document.write(`${persona3} ${dineroP3}$ No posees dinero suficiente <br>`)
}
document.write(`Vuelto: ${vueltoP3}$ <br><br><br><br>`);





let boletos;
document.write(`Triple Gordo Venta de Loteria <br><br>

        Precio del Boleto 1.5$ <br><br>`);

if (vueltoP1 >= 7.5) {
    boletos = 5;
} else if (vueltoP1 >= 6) {
    boletos = 4;
} else if (vueltoP1 >= 4.5) {
    boletos = 3;
} else if (vueltoP1 > 3) {
    boletos = 2;
} else if (vueltoP1 > 1.5) {
    boletos = 1;
} else {
    boletos = 0;
}


document.write(`Con los ${vueltoP1}$ de vuelto ${persona1} puedes comprar ${boletos} Boletos`)




let resultado = 2;

if (resultado == 1) {
    console.log('Verdadero, no se da descarga electrica')
} else if (resultado == 2) {
    console.log('Falso, si se da descarga electrica')
} else if (resultado == 3) {
    console.log('Inconcluso, vuelve a preguntar')
} else{
    console.log('No dio ninguna respuesta')
}