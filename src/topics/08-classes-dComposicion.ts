console.log('==========================');
console.log('08-classes-dComposicion.ts');
console.log('==========================');

export class Person {
    constructor(
        public realName: string,
        private address: string = 'No Address'
    ) { }
}

export class Hero {
    public person: Person;
    constructor(
        public alterEgo: string,
        public strength: number,
        public person: Person
    ) { }
}

const tony = new Person('Tony Stark', 'Manhattan');
const ironman = new Hero('Ironman', 75, tony);
const steve = new Person('Steve Rogers', 'Brooklyn');
const captain = new Hero('America\'s Captain', 75, steve);
const odinson = new Person('Odinson');
const thor = new Hero('Thor', 75, odinson);

console.log(ironman, captain, thor);