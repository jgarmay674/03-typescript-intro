import { Product, taxCalculation, tax} from './06-function-destructuring-bSOLVED'

console.log('===================');
console.log('07-import-export.ts');
console.log('===================');

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 250
    }
];

// iva = 0.21
const [total, taxTotal] = taxCalculation({    
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', taxTotal);