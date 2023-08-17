export { }; // en Angular esto no será necesario, la creación de componentes lo tiene en cuenta

console.log('====================');
console.log('04-homework-types.ts');
console.log('====================');

/*
    ===== Código de TypeScript =====
*/

interface Address {
    street: string,
    country: string,
    city: string
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string; 
}

const superHeroe: SuperHero = { // Necesitamos implementar el tipo a través de una interfaz
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log(address);