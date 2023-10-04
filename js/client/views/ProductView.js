class ProductView{

    constructor(element){
        this._element = element;
    }

    _template(model){

        return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Value</th>
        </tr>
      </thead>

      <tbody>
        ${model.products.map(e =>`
        <tr>
            <td>${e.name}</td>
            <td>${DateHelper.dateForText(e.date)}</td>
            <td>${e.price}</td>
            <td>${e.quantity}</td>
            <td>${e.totalValue}</td>
        </tr>`
        ).join('')}
      </tbody>
      <td colspan="3"> </td>
      <td>${model.products.reduce((sum,n) => sum + Number(n.quantity), 0)}</td>
      <td>${model.products.reduce((sum,n) => sum + n.totalValue, 0.0)}</td>

      <tfoot>

      </tfoot>


    </table>
        `
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}