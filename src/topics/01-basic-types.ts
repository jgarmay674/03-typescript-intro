export {}; // con esto indicamos que este archivo pertenece al proyecto

console.log('=================');
console.log('01-basic-types.ts');
console.log('=================');

let variable1 = 'Strider'; // inferencia de tipos
variable1 = 'Rider';

const variable2 = 'Strider';

const name: string = 'Strider'; // definición explicita de tipos
let hpPoints: number | 'FULL' = 95; // definición explicita de multiples tipos
const isAlive: boolean = true;

console.log({ name, hpPoints, isAlive }); // mostramos los valores en consola
hpPoints = 100;
console.log({ name, hpPoints, isAlive }); // mostramos los valores en consola
