export {}; // con esto indicamos que este archivo pertenece al proyecto

console.log('======================');
console.log('02-object-interface.ts');
console.log('======================');

let skills: string[] = ['Bash','Counter','Healing']; // bash, ataque principal - counter, ataques contra él

interface Character { // esta interfaz definirá los tipos de los objetos que las implementen
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // '?'indica que la clave es opcional 
}

const strider: Character = { // objeto para el cual queremos definir sus tipos
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell' // valor que no fue creado inicialmente en el objeto strider ahora puede ser definido

console.log(skills);
console.table(strider);