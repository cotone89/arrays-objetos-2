document.write('<p>Estad&iacute;sticas centro medico &Ntilde;u&ntilde;oa</p>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANG&Eacute;LICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZU&Ntilde;IGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZA&Ntilde;ARTU', paciente: 'ANGEL MU&Ntilde;OZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VI&Ntilde;UELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

//Ejercicio 1: agregamos horas a traumatología
traumatologia.push(
    { hora: '09:00', especialista: 'RENE POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
);
console.log(traumatologia);

//Ejercicio 2:  Eliminar el primer y último elemento del arreglo de Radiología.
radiologia.shift(); //se elimina el primer elemento
radiologia.pop(); //se elimina ultimo elemento
console.log(radiologia);

//Ejercicio 3: consultas médicas de Dental separadas por guión y separadas por parrafo.
document.write("<h2>Consultas m&eacute;dicas dentales</h2>");
dental.forEach(function (consulta) {
    
    document.write('<p>' + consulta.hora + ' - ' + consulta.especialista + ' - ' + consulta.paciente + ' - ' + consulta.rut + ' - ' + consulta.prevision + '</p>');
});

//Ejercicio 4: total de pacientes del centro medico.
document.write("<h2>Total de pacientes del centro m&eacute;dico</h2>");
var totalPacientes = radiologia.concat(traumatologia);
totalPacientes = totalPacientes.concat(dental);
totalPacientes.forEach(function (paciente) {
    document.write('<p>' + paciente.paciente + '</p>');
});

//Ejercicio 5: Modificar mediante funciones las previsiones de Dental. ISAPRE por FONASA y viceversa.
document.write("<h2>Previsiones intercambiadas de todos los pacientes</h2>");
totalPacientes.map(function (paciente) {
    if (paciente.prevision == 'FONASA') {
        paciente.prevision = 'ISAPRE';
    } else {
        paciente.prevision = 'FONASA';
    }
});
console.log(totalPacientes);
totalPacientes.forEach(function (paciente) {
    document.write('<p>' + paciente.prevision + ';' + paciente.paciente + ';' + paciente.rut + '</p>');
});
document.write("<h2>Estad&iacute;sticas</h2>");
//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiolog&iacute;a: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatolog&iacute;a: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atenci&oacute;n: ${radiologia[0].paciente} - ${radiologia[0].prevision} | &Uacute;ltima atenci&oacute;n: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atenci&oacute;n: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} |  &Uacute;ltima atenci&oacute;n: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atenci&oacute;n: ${dental[0].paciente} - ${dental[0].prevision} |  &Uacute;ltima atenci&oacute;n: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
