console.log('=====================');
console.log('08-classes-cExtend.ts');
console.log('=====================');

export class Person {
    constructor(
        public realName: string,
        private address: string = 'No Address'
    ) { }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public strength: number,
        public realName: string,
        address: string
    ) {
        super(realName, address);
    }
}

const ironman = new Hero('Ironman', 75, 'Tony Stark', 'Manhattan');
const captain = new Hero('America\'s Captain', 75, 'Steve Rogers', 'Brooklyn');
const thor = new Hero('Thor', 75, 'Odinson');

console.log(ironman, captain, thor);
