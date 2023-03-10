const ProductManager = require('./productManager');

const manager = new ProductManager();

console.log(manager.addProduct())
console.log(manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    thumbnail: 'imagen1.jpg',
    code: '123456',
    stock: 10
}))
console.log(manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    thumbnail: 'imagen1.jpg',
    code: '123456',
    stock: 10
}))
console.log(manager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 100,
    thumbnail: 'imagen2.jpg',
    code: '123452',
    stock: 12
}))
console.log(manager.addProduct({
    title: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 100,
    thumbnail: 'imagen3.jpg',
    code: '123453',
    stock: 13
}))
console.log(manager.addProduct({
    title: 'Producto 4',
    price: 100,
    thumbnail: 'imagen4.jpg',
    code: '123454',
    stock: 14
}))
console.log(manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    thumbnail: 'imagen1.jpg',
    code: '23456'
}))
console.log(manager.getProducts());
console.log(manager.getProductById(8))
console.log(manager.getProductById())
console.log(manager.getProductById(2))