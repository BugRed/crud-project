class ProductController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._inputName = $('#name');
        this._inputQuantity = $('#quantity');
        this._inputPrice = $('#price');
        this._inputDate = $('#date');
        this._listProducts = new ListProducts();
        this._productView = new ProductView($('#productView'));

        this._productView.update(this._listProducts);

    }

    addEvent(event){

        event.preventDefault();
        this._listProducts.addProduct(this._createProduct());
        this._productView.update(this._listProducts);
        this._cleanForm();
        
    }

    _createProduct(){
        return new Product(
            this._inputName.value,
            this._inputQuantity.value,
            this._inputPrice.value,
            DateHelper.textForDate(this._inputDate.value),
        )
    }

    _cleanForm(){
        this._inputName.value = '';
        this._inputQuantity.value = 1;
        this._inputPrice.value = 0,0;
        this._inputDate.value = '';

        this._inputName.focus();
    }

}

