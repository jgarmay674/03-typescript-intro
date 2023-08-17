console.log('===============================');
console.log('10-classes-decorators-bClase.ts');
console.log('===============================');

class Usuario {
    constructor(
        public nombre: string,
        public alias: string,
        public edad: number,
        public email: string
    ) { }

    saludar() {
        console.log(`Mi nombre es ${this.nombre}`);
        console.log(`me dicen ${this.alias}`);
        console.log(`y tengo ${this.edad} años.`);
        console.log(`Mi email es: ${this.email}`);
    }
}




