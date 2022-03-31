// INSERT BALISE CANVAS

const mwContentText = document.getElementById('mw-content-text')
const table1 = document.getElementById('table1')
const canvas1 = document.createElement('canvas')
canvas1.setAttribute('id', 'graph1')
canvas1.style.width = '775px'

mwContentText.insertBefore(canvas1, table1)

// RETRIEVE DATA

const tbody0 = document.getElementsByTagName('tbody')[0]
const tr0 = tbody0.getElementsByTagName('tr')
// console.log(tr)

let dataTable1 = []

// Create 1 object/countryTable1
// Ignore first lign of table (data non useful for the object)
for (let i = 1; i < tr0.length; i++) {

    let countryTable1 = {}

    countryTable1['label'] = tr0[i].getElementsByTagName('td')[0].innerText

    countryTable1['borderColor'] = '#' + Math.floor(Math.random() * 16777215).toString(16)

    let numbersTable1 = []

    // Ignore first cell of row (name of the country)
    for (let j = 1; j <= 11; j++) {
        let number1 = tr0[i].getElementsByTagName('td')[j].innerText
        numbersTable1.push(parseFloat(number1))
        // parseFloat parses a value as a string and returns the first number
    }

    countryTable1['data'] = numbersTable1

    dataTable1.push(countryTable1)

}
// console.log(dataTable1)

// GRAPH

let randomIndex1 = Math.floor(Math.random() * 35)
let randomIndex2 = Math.floor(Math.random() * 35)
let randomIndex3 = Math.floor(Math.random() * 35)
// console.log(randomIndex1)
// console.log(randomIndex2)
// console.log(randomIndex3)

var ctx1 = document.getElementById('graph1').getContext('2d')

var data1 = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    datasets:
        [
            dataTable1[randomIndex1],
            dataTable1[randomIndex2],
            dataTable1[randomIndex3]
        ]
}

var config1 = {
    type: 'line',
    data: data1
}

var graph1 = new Chart(ctx1, config1)

// // ANIMATION ?

// var countryTable1Name
// var countryTable1Numbers

// tr[1].addEventListener('mouseover', function () {
//     countryTable1Name = dataTable1[0].name
//     console.log(countryTable1Name)
//     countryTable1Numbers = dataTable1[0].numbersTable1
//     console.log(countryTable1Numbers)

// })