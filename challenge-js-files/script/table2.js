// INSERT BALISE CANVAS

const table2 = document.getElementById('table2')
const canvas2 = document.createElement('canvas')
canvas2.setAttribute('id', 'graph2')
canvas2.style.width = '775px'

mwContentText.insertBefore(canvas2, table2)

// RETRIEVE DATA

const tbody1 = document.getElementsByTagName('tbody')[1]
const tr1 = tbody1.getElementsByTagName('tr')

let dataTable2 = []

// Create 1 objetc/country
for (let k = 0; k < tr1.length; k++) {

    let countryTable2 = {}

    countryTable2['label'] = tr1[k].getElementsByTagName('td')[0].innerText

    countryTable2['backgroundColor'] = '#' + Math.floor(Math.random() * 16777215).toString(16)

    let numbersTable2 = []

    // Ignore first cell of row (name of the country)
    for (let l = 1; l <= 2; l++) {
        let number2 = tr1[k].getElementsByTagName('td')[l].innerText
        numbersTable2.push(parseFloat(number2))
    }

    countryTable2['data'] = numbersTable2

    dataTable2.push(countryTable2)

}
// console.log(dataTable2)

// GRAPH

let randomIndex4 = Math.floor(Math.random() * 30)
let randomIndex5 = Math.floor(Math.random() * 30)
let randomIndex6 = Math.floor(Math.random() * 30)

var ctx2 = document.getElementById('graph2').getContext('2d')

var data2 = {
    labels: ['2007-09', '2010-12'],
    datasets:
        [
            dataTable2[randomIndex4],
            dataTable2[randomIndex5],
            dataTable2[randomIndex6]
        ]
}

var config2 = {
    type: 'bar',
    data: data2
}

var graph2 = new Chart(ctx2, config2)