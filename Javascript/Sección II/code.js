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

} while (hora <= 5); */




let alumnos = prompt('¿Cuantos alumnos hay inscritos en la materia?')
let asistio;
let listado = {
    nombres: [],
    asistencias: [],
    inasistencias: []
} 

const crearLista = ()=>{
    for (let alumno = 0; alumno < alumnos; alumno++) {
        listado.nombres[alumno] = prompt(`Cual es el Nombre del alumno Nro ${alumno+1}`);
        listado.asistencias[alumno] = 0;
        listado.inasistencias[alumno] = 0;
    }
}

const tomarAsistencia = ()=>{
    for (let i = 0; i < 3; i++) {
        for (const lista in listado.nombres) {

            asistio = prompt(`Dia: ${i+1} Alumno ${listado.nombres[lista]} ¿Vino?`);
       
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

        document.write(`Nro ${parseInt(lista)+1}. ${listado.nombres[lista]}: <br>`);

        if (listado.inasistencias[lista] >= 3) {
            document.write(`Posees ${listado.asistencias[lista]} asistencias <br>
                                   ${listado.inasistencias[lista]} inasistencias has
                                   reprobado la materia por superar el 9% <br><br>`);
        } else {
            document.write(`Posees ${listado.inasistencias[lista]} inasistencias <br>
                                   ${listado.asistencias[lista]} asistencias has aprobado la materia <br><br>`);
        }
    }
}

crearLista();
tomarAsistencia();
imprimirHoja();





const calculadora = (opc, num1, num2)=>{
    if (opc == 1) {
        return num1 + num2;
    } else if (opc == 2) {
        return num1 - num2;
    } else if (opc == 3) {
        return num1 * num2;
    } else if (opc == 4) {
        return num1 / num2;
    } else{
        console.log('Opcion no valido');
    }
}


let opcion= 0;

do {
     opcion = parseInt(prompt(`
                    1.Suma
                     2.Resta
                     3.Multiplicación
                     4.División
                     5.Salir de la app`));

    let num1 = parseInt(prompt('Ingresa el primer numero'));
    let num2 = parseInt(prompt('Ingresa el primer numero'));

console.log(calculadora(opcion, num1, num2));

} while (opcion<5 && opcion>0);