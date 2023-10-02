class Product{

    constructor(name, quantity, price, date){
        this._name = name;
        this._quantity = quantity;
        this._price = price;
        this._date = new Date(date.getTime());

        Object.freeze(this);

    }

    get totalValue(){
        return this._price * this._quantity;
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get quantity(){
        return this._quantity;
    }

    get name(){
        return this._name;
    }
    
    get price(){
        return this._price;
    }


}