/* let nombre, edad, hora = 0, vip = 0;

const portero = (N, E, H)=>{
    if (E >= 18) {
        document.write(`${N} tienes ${E} años puedes pasar eres mayor de edad <br>`);
    
        if (H >= 2 && vip == 0) {
            document.write(`Son las ${H} AM eres la primera persona que llega despues de las 2 AM puedes pasar gratis <br><br>`);
            vip++;
        } else {
            document.write(`muy bien son las ${H} AM la entrada Cuesta 5$ <br><br>`);
        }
    } else {
        document.write(`${N} tienes ${E} no puedes pasar eres menor de edad <br><br>`); 
    }
}

do {
    nombre = prompt('¿Como es tu nombre?');
    edad = prompt('¿Que edad dice tu cedula?');

    hora++;
    console.log(hora)

    portero(nombre, edad, hora);

} while (hora <= 5);

 */



let dias = 2;
let asistio

let listado = {
    nombres: ['Gabriel Torrealba', 'Elvis Torrealba', 'Wilkerman Torrealba'],
    asistencias: [0,0,0],
    inasistencias: [0,0,0]
} 

const tomarAsistencia = ()=>{
    for (let i = 0; i < 30; i++) {
        for (const lista in listado.nombres) {

            asistio = prompt(`Dia: ${i} Alumno ${listado.nombres[lista]} ¿Vino?`);
       
           if (asistio == 'si') {
               listado.asistencias[lista] = ++listado.asistencias[lista];
           } else {
               listado.inasistencias[lista] = ++listado.inasistencias[lista];
           }
           
       }
        
    }
}

const imprimirHoja = ()=>{
    for (const lista in listado.nombres) {

        document.write(`${lista}. ${listado.nombres[lista]}: <br>`);

        if (listado.inasistencias[lista] >= 3) {
            document.write(`Posees ${listado.inasistencias[lista]} inasistencias has reprobado la materia <br><br>`);
        } else {
            document.write(`Posees ${listado.asistencias[lista]} asistencias has aprobado la materia <br><br>`);
        }
    }
}

tomarAsistencia();
imprimirHoja();