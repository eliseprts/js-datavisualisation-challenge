// INSERT BALISE CANVAS

const mwContentText = document.getElementById('mw-content-text')
const table1 = document.getElementById('table1')
const canvas1 = document.createElement('canvas')
canvas1.setAttribute('id', 'graph1')
canvas1.style.width = '775px'

mwContentText.insertBefore(canvas1, table1)

// RETRIEVE DATA

const tbody = document.getElementsByTagName('tbody')[0]
const tr = tbody.getElementsByTagName('tr')
// console.log(tr)

let dataTable1 = []

// Create 1 object/country
// Ignore first lign of table (data non useful for the object)
for (let i = 1; i < tr.length; i++) {

    let country = {}

    country['label'] = tr[i].getElementsByTagName('td')[0].innerText

    country['borderColor'] = '#' + Math.floor(Math.random() * 16777215).toString(16)

    let numbers = []

    // Ignore first cell of row (name of the country)
    for (let j = 1; j <= 11; j++) {
        let number = tr[i].getElementsByTagName('td')[j].innerText
        numbers.push(parseFloat(number))
        // parseFloat parses a value as a string and returns the first number
    }

    country['data'] = numbers

    dataTable1.push(country)

}
// console.log(dataTable1)

// GRAPH

var randomIndex1 = Math.floor(Math.random() * 35)
var randomIndex2 = Math.floor(Math.random() * 35)
var randomIndex3 = Math.floor(Math.random() * 35)
// console.log(randomIndex1)
// console.log(randomIndex2)
// console.log(randomIndex3)

var ctx = document.getElementById('graph1').getContext('2d')

var data = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    datasets: [
        dataTable1[randomIndex1],
        dataTable1[randomIndex2],
        dataTable1[randomIndex3]
    ]
}

var config = {
    type: 'line',
    data: data,
}

var graph1 = new Chart(ctx, config)

// ANIMATION ?

var countryName
var countryNumbers

tr[1].addEventListener('mouseover', function () {
    countryName = dataTable1[0].name
    console.log(countryName)
    countryNumbers = dataTable1[0].numbers
    console.log(countryNumbers)

})