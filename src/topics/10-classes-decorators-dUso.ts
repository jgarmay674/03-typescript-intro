console.log('=============================');
console.log('10-classes-decorators-cUso.ts');
console.log('=============================');

import { cambiarNombre, cambiarAlias, cambiarEdad, cambiarEmail, cambiarSaludo/* , enmascararEmail, cambiarEmoji */ } from "./10-classes-decorators-cDecorador.ts";

// Decoradores de Clase
@cambiarNombre("José")
@cambiarAlias("jota")
@cambiarEdad(47)
@cambiarEmail("jota@cpifp.es")
class Usuario {
    nombre: string;
    alias: string;
    edad: number;
/*     @enmascararEmail */
    email: string = 'Hello World';

    constructor(nombre: string, alias: string, edad: number, email: string = 'Hello World') {
        this.nombre = nombre;
        this.alias = alias;
        this.edad = edad;
        this.email = email;
    }
    // Decorador de Método
    @cambiarSaludo()
    saludar(/* @cambiarEmoji  */emoji: string) {
        console.log(`${emoji}`);
        console.log(`Mi nombre es ${this.nombre}`);
        console.log(`me dicen ${this.alias}`);
        console.log(`y tengo ${this.edad} años.`);
        console.log(`Mi email es: ${this.email}`);
    }
}

const usuario = new Usuario("Roberto", "Robert", 19, "roberto@cpifp.com");
usuario.saludar("\u{1F600}");