const placeName = document.querySelectorAll('input[name=author]')
const placePrice = document.querySelectorAll('input[name=price]')
const placeQuantity = document.querySelectorAll('input[name=pass]')

const td = document.querySelectorAll('td[name=td]')
const btns = document.querySelectorAll('input[type=button]')

const listProduct = [{}]
// const listEmployee = [{}]

// console.log(td[0].textContent)


const showResult = () => {
    console.log(listProduct)
}

btns.forEach((element) => {
    element.onclick = () => {
        // && listEmployee != null
        if (listProduct != null) {
            if (element.classList[1] === 'product') {
                addItemToList(listProduct, placeName[0], placePrice[0], placeQuantity[0])
                // addRow('table-view');
                addTable()
                // console.log('done')

                // } if (element.classList[1] === 'employee') {
                //     addItemToList(listEmployee, placeName[1], placePrice[1], placeQuantity[0])
                // }
            }
            // showResult()
        }

    }
})

const addItemToList = (buttons, names, prices, quantity) => {
    buttons.push({
        name: names.value,
        price: prices.value,
        quantity: quantity.value
    })
}

//Criar uma nova linha numa tabela
function addRow(tableID) {

    let tableRef = document.getElementById(tableID);

    let newRow = tableRef.insertRow();
    let newRow1 = tableRef.insertRow();
    let newRow2 = tableRef.insertRow();


    let newCell = newRow.insertCell();
    let newCell1 = newRow1.insertCell();
    let newCell2 = newRow2.insertCell();

    alinhando(newCell)
    alinhando(newCell1)
    alinhando(newCell2)

    let newText = document.createTextNode("New bottom row");
    let newText1 = document.createTextNode("New bottom row1");
    let newText2 = document.createTextNode("New bottom row2");
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
}


function changeColor(td) {
    td.style.backgroundColor = "#FF0F0F";
}

function alinhando(td) {
    td.style.padding = '5px 100px 5px 5px'
    td.style.border = 'solid grey 1px'
    // changeColor(td)
}


function addTable() {
  // cria um novo elemento div
  
  var newTable = document.createElement("table");

  // e dá à ele conteúdo
  var newRow = newTable.insertRow();
  var newRow1 = newTable.insertRow();
  var newRow2 = newTable.insertRow();


  let newCell = newRow.insertCell();
  let newCell1 = newRow.insertCell();
  let newCell2 = newRow.insertCell();
  

  alinhando(newCell)
  var newText = document.createTextNode(listProduct[1].name);
  var newText2 = document.createTextNode(listProduct[1].price);
  var newText3 = document.createTextNode(listProduct[1].quantity);

  
  newCell.appendChild(newText);
  newCell1.appendChild(newText2);
  newCell2.appendChild(newText3);

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(newTable, divAtual);

  
  
  console.log(newTable)
}






