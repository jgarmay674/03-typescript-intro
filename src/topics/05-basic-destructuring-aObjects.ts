export { }; // en Angular esto no será necesario, la creación de componentes lo tiene en cuenta

console.log('==================================');
console.log('05-basic-destructuring-aObjects.ts');
console.log('==================================');

interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

console.log('---SIN DESESTRUCTURACIÓN---');
console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);

console.log('---CON DESESTRUCTURACIÓN---');
const { song, songDuration: duration  } = audioPlayer; // 'desestructuramos' e incluso 'renombramos'
console.log('Song: ', song);
console.log('Duration: ', duration);

console.log('----------TAREA 1----------');
console.log('Year (SIN desestructuración): ', audioPlayer.details.year);
const { year } = audioPlayer.details; // year se encuentra dentro de la propiedad 'details'
console.log('Year (CON desestructuración): ', year); 

console.log('----------TAREA 2----------');
/* const author = 'Varios';
const { details: {author: oneAuthor} } = audioPlayer; 
console.log('Author', author); 
console.log('Author', oneAuthor);  */

const author = 'Varios';
const { details } = audioPlayer; // primero desestructuro details
const { author: oneAuthor } = details; // luego desestructuro author y lo renombro
console.log('Author', author); 
console.log('Author', oneAuthor); 
