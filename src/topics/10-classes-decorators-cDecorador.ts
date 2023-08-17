console.log('===================================');
console.log('10-classes-decorators-bDecorador.ts');
console.log('===================================');

export function cambiarNombre(_nombre: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            nombre = _nombre;
        };
    };
}

export function cambiarAlias(_alias: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            alias = _alias;
        };
    };
}

export function cambiarEdad(_edad: number) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            edad = _edad;
        };
    };
}
export function cambiarEmail(_email: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            email = _email;
        };
    };
}

export function cambiarSaludo() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; // Guardar referencia al método original

        // Reemplazar el método original con una nueva función
        descriptor.value = function () {
            console.log(`👋 ¡Hola! Soy ${this.nombre} pero me llaman (${this.alias}) y tengo ${this.edad} años. Mi email es: ${this.email}`);
        };

        return descriptor;
    };
}

export function enmascararEmail(target: Object, propertyKey: string) {
/*     console.log(target[propertyKey]); */
}

export function cambiarEmoji(target: Object, propertyKey: string, parameterIndex: number) {
    console.log('Nombre del metodo', );
}