console.log('==============SOLVED================');
console.log('06-function-destructuring-bSOLVED.ts');
console.log('====================================');

export interface Product { // exportamos esta interfaz para usarla en 07-import-export.ts
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationCompra {
    products: Product[];
    tax: number;
}

/* function taxCalculation(compra: TaxCalculationCompra): [number, number] {
    let total = 0;

    compra.products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * compra.tax];
} */

// OPCION 1 para desestructurar compra
/* function taxCalculation({products, tax}: TaxCalculationCompra): [number, number] {
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });
4
    return [total, total * tax];
} */

// OPCION 2 apra desestructurar compra
export function taxCalculation(compra: TaxCalculationCompra): [number, number] {
    const { products, tax } = compra;
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
export const tax = 0.21; // exportamos esta constante para usarla en 07-import-export.ts

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', taxTotal);
