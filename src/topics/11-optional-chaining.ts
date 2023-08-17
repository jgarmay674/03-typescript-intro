console.log('======================');
console.log('10-classes-chaining.ts');
console.log('======================');

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jose'
}

const passenger2: Passenger = {
    name: 'Paco',
    children: ['Natalia', 'Elizabeth']
}

console.log(passenger1, passenger2);

const printChildrenNumber = (passenger: Passenger): number => {
    if (!passenger.children) return 0; 
    //const howManyChildren = passenger.children?.length || 0; // optional chaning nos permite simplificar el código
    const howManyChildren = passenger.children!.length // es una forma de decirle a TS que siempre habrá un valor
    console.log(`${passenger.name} tiene ${howManyChildren} hijos`);
    return howManyChildren;
}

printChildrenNumber(passenger1);
printChildrenNumber(passenger2);