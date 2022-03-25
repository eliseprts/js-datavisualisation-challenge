// INSERT BALISE CANVAS
const content = document.getElementById('content')
const bodyContent = document.getElementById('bodyContent')
const canvas0 = document.createElement('canvas')
canvas0.setAttribute('id', 'graph0')
canvas0.style.width = '775px'

content.insertBefore(canvas0, bodyContent)

window.addEventListener('load', drawChart)

// GRAPH

async function drawChart() {

    var ctx = document.getElementById('graph0').getContext('2d')

    var dataNbrs = await getData()

    var graph0 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
                {
                    label: 'Data',
                    // data: dataNbrs,
                    data: [10, 20, 22, -15, -24, 6, -10, 2, 5, 10],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    })
}

// RETRIEVE DATA

let dataGraph = []
// Retrieve data in form of array 
async function getData() {
    let response = await fetch('https://canvasjs.com/services/data/datapoints.php')
    let dataAPI = await response.json()
    // console.log(data)
    for (let elem of dataAPI) {
        dataGraph.push(elem[1])
    }
}
// getData()
// console.log(dataGraph)