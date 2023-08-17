console.log('=====================');
console.log('08-classes-aBasics.ts');
console.log('=====================');

export class Person {
  public name: string; // Recordemos: name: string | undefined;
  private address: string; // Recordemos: address?: string;

  constructor() {
    this.name = 'Fernando';
    this.address = 'New York';
  }
}

const ironman = new Person();

console.log(ironman);