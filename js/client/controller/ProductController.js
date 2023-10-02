class ProductController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._inputName = $('#name');
        this._inputQuantity = $('#quantity');
        this._inputPrice = $('#price');
        this._inputDate = $('#date');
    }

    addEvent(event){

        event.preventDefault();
        

        let date = new Date(this._inputDate
                                .value
                                .split('-'));
                                
        let product = new Product(
            this._inputName,
            this._inputQuantity,
            this._inputPrice,
            date,
        )

        let formatDate = `${product.date.getDate()}/${product.date.getMonth() + 1}/${product.date.getFullYear()}`
        console.log(formatDate)


    }

}

