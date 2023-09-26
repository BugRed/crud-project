const placeName = document.querySelectorAll('input[name=author]')
const placePrice = document.querySelectorAll('input[name=price]')

const test = document.getElementById('res')

const btns = document.querySelectorAll('input[type=button]')

const listProduct = [{}];

const listEmployee = [{}]


const showResult = () => {
    console.log(list)
}

btns.forEach((element) => {
    element.onclick = () => {

        if (element.classList[1] === 'product') {
            sum(listProduct, placeName[0], placePrice[0])
        } if (element.classList[1] === 'employee') {
            sum(listEmployee, placeName[1], placePrice[1])
        }
        console.log(listProduct)
        console.log(listEmployee)
    }



})

function sum(buttons, names, prices) {
    buttons[0].name = names.value
    buttons[0].price = prices.value
    test.innerText = `A lista de Produtos é ${buttons[0].name} no preço: ${buttons[0].price}`
}




