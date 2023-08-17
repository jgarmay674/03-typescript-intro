export { }; // en Angular esto no será necesario, la creación de componentes lo tiene en cuenta

console.log('=================================');
console.log('05-basic-destructuring-bArrays.ts');
console.log('=================================');

const db: string[] = ['Gokü', 'Vegeta', 'Freezer'];
const dbz: string[] = ['Son Gohan', 'Cell', 'Trunks'];

console.error(`Personaje 3: ${db[2]}`);
console.error('Personaje 3: %s', dbz[2]);
console.error('Personaje 3:', dbz[3]); // Pero... ¿y si pido un valor que no está?
const trunks = dbz[3] || 'No hay personaje';
console.error('Personaje 3:', trunks);

// Desestructurando el array
const dbgt: string[] = ['Pan', 'Baby'];
const [p1, , videl = 'No existe el personaje'] = dbgt;
console.error('Personaje 3:', videl);

console.log('-----------------');

const introduccion = ["Hola", "Yo", "soy", "Sarah"];
let saludo = introduccion[0];
let nombre = introduccion[3];
console.log({ saludo, nombre });

const introduccion1 = ["Hola", "Yo", "soy", "Sarah"];
const [saludo1, pronombre1] = introduccion1;
console.log({ saludo1, pronombre1 });

const [saludo2, pronombre2] = ["Hola", "Yo", "soy", "Sarah"];
console.log({ saludo2, pronombre2 });

let saludo3, pronombre3;
[saludo3, pronombre3] = ["Hola", "Yo", "soy", "Sarah"];
console.log({ saludo3, pronombre3 });

const [, pronombre4, , nombre4] = ["Hola", "Yo", "soy", "Sarah"]; // saltar elementos
console.log({ pronombre4, nombre4 });

const [, , , ,] = ["Hola", "Yo", "soy", "Sarah"]; // omitir todos los elementos 

const [saludo4, ...introduccion4] = ["Hola", "Yo", "soy", "Sarah"]; // reasignar el resto de elementos
console.log({ saludo4, introduccion4 });

const [...nuevaIntroduccion] = ["Hola", "Yo", "soy", "Sarah"]; // desestructuracion?, operador 'spread'?
console.log(nuevaIntroduccion);

console.log('-----------------');
const introduccion5 = ["Hola", "Yo", "soy", "Sarah"];
const nuevaIntroduccion1 = introduccion5;
nuevaIntroduccion1[3] = 'Elisabeth';
console.log(introduccion5, nuevaIntroduccion1);

const introduccion6 = ["Hola", "Yo", "soy", "Sarah"];
const nuevaIntroduccion2 = [...introduccion6];
nuevaIntroduccion2[3] = 'Elisabeth';
console.log(introduccion6, nuevaIntroduccion2);

console.log('----------TAREA----------');
function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return 'url incorrecta';
    }
    console.log(parsedURL);

    // desestructurando
    const [, , host,] = parsedURL;
    return host;
}
console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));