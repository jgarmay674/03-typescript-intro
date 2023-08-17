console.log('==============================');
console.log('10-classes-decorators-eTask.ts');
console.log('==============================');

const logClass = (target: any) => {
    console.log('logClass -> ', target);
    return target;
}

const logMethod = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`logMethod -> ${target}.${propertyKey}.${descriptor}`);
}

const logProperty = (target: Object, propertyKey: string) => {
    console.log(`logProperty -> ${target}.${propertyKey}`);
}

const logParam = (target: Object, propertyKey: string, parameterIndex: number) => {
    console.log(`logParam -> ${target}.${propertyKey}.${parameterIndex}`);
    console.log(`${propertyKey[parameterIndex]} esperando...}`);
}

@logClass
class User {
    @logProperty
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    @logMethod
    public synchronize(@logParam source: any): void {
        setTimeout(() => { console.log(`${source} synchronized!`); }, 2000);
    }
}