const fields = [
    document.querySelector('#name'),
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody')

console.log(fields)

document.querySelector('.form').addEventListener('submit', (event)=>{
    
    event.preventDefault();
    
    var tr = document.createElement('tr');
    tbody.appendChild(tr)
    
    fields.forEach((element) => {
        var td = document.createElement('td');
        td.textContent = element.value
        tr.appendChild(td)
    })
    
    tr.appendChild(createVolume());
    formaInicial()
    
})

const formaInicial = () =>{
    fields[0].value = '';
    fields[1].value = '';
    fields[2].value = 1;
    fields[3].value = 0;
    
    fields[0].focus()
}

const createVolume = () =>{
    var tdVolume = document.createElement('td');
    tdVolume.textContent = fields[2].value * fields[3].value;
    return tdVolume
}