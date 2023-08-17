export { }; // en Angular esto no será necesario, la creación de componentes lo tiene en cuenta

console.log('==============TAREA===============');
console.log('06-function-destructuring-aTASK.ts');
console.log('==================================');

interface Product { // interfaz que han de implementar los productos
    description: string;
    price: number;
}

const phone: Product = { // un producto, producto 1
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = { // otro producto, producto 2
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationCompra { // interfaz que ha de implementar la compra
    products: Product[];
    tax: number;
}

function taxCalculation(compra: TaxCalculationCompra): number[] {
    let total = 0;

    compra.products.forEach(product => {
        total += product.price;
    });

    return [total, total * compra.tax];
}

const shoppingCart = [phone, tablet]; // carrito con nuestros productos
const tax = 0.21; // iva

const result = taxCalculation({ // resultado de aplicar el IVA nuestros productos
    products: shoppingCart,
    tax: tax
});

console.log('Total', result[0]);
console.log('Tax', result[1]);
