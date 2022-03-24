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

    country['name'] = tr[i].getElementsByTagName('td')[0].innerText

    let numbers = []

    // Ignore first cell of row (name of the country)
    for (let j = 1; j <= 11; j++) {
        let number = tr[i].getElementsByTagName('td')[j].innerText
        numbers.push(number)
        // parseFloat parses a value as a string and returns the first number
    }

    country['numbers'] = numbers

    dataTable1.push(country)

}

console.log(dataTable1)

// GRAPH

var ctx = document.getElementById('graph1').getContext('2d')

var data = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    datasets: [
        {
            label: 'Crimes recorded by the police',
            borderColor: 'rgb(75, 192, 192)',
            data: dataTable1[1].numbers
        }
    ]
}

var config = {
    type: 'line',
    data: data,
}

var graph1 = new Chart(ctx, config)