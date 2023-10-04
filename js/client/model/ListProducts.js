class ListProducts{

    constructor(){
        this._products = [];
    }

    addProduct(product){
        this._products.push(product);
    }

    get products(){
        return [].concat(this._products);
    }

}