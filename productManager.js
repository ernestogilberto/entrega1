class ProductManager {
    constructor() {
        this.products = [];
    }

    setId() {
        if (this.products.length === 0) {
            return 1;
        }
        const lastProduct = this.products[this.products.length - 1];
        return lastProduct.id + 1;
    }

    validateProduct(product) {

        const productKeys = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        if (!product) {
            return 'Product is required';
        }
        for (const key of productKeys) {
            if (!product[key]) {
                return `Product ${key} is required`;
            }
        }
        if (this.products.find(p => p.code === product.code)) {
            return 'Product already exists';
        }
        return 'Success';
    }

    addProduct(product) {
        const validationResult = this.validateProduct(product);
        if (validationResult !== 'Success') {
            return validationResult;
        }
        product.id = this.setId();
        this.products.push(product);
        return 'Product added successfully';
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        if (!id) {
            return 'Id is required';
        }
        const product = this.products.find(p => p.id === id);
        if (!product) {
            return 'Product not found';
        }
        return product;
    }
}

module.exports = ProductManager;