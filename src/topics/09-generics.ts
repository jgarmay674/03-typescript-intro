console.log('==============');
console.log('09-generics.ts');
console.log('==============');

export function whatsMyType<T>(argument: T): T { // evitar el uso de 'any'
    return argument;
}
// amIString. - si uso 'any' no tengo ayuda del intellisense
const amIString = whatsMyType<string>('Hola Mundo');
console.log(amIString.split(' '));
const amINumber = whatsMyType<number>(100.7);
console.log(amINumber.toFixed());
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
console.log(amIArray.join('-'));



