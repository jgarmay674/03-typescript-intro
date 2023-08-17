console.log('==========================');
console.log('08-classes-bConstructor.ts');
console.log('==========================');

export class Person {
    constructor(
        public name: string,
        private address: string = 'No Address'
    ) { }
}

const ironman = new Person('Stark', 'New York');
const superman = new Person('Clark Ken');

console.log(ironman, superman);

console.log('==========================');

// ESTO ES ERRONEO
/* class Article{
    constructor(){
         this.user = new User();
         this.image = new Image();
     }
} */

class Hero {
    constructor(
        private identity: Person,
        private related: string = 'No related') { }
}

const Marvel = new Hero(new Person('Stark', 'New York'));
const DC = new Hero(new Person('Clark Ken'), 'Martha');

console.log(Marvel, DC);