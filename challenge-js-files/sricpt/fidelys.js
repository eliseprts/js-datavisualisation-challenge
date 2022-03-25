// POUR INSERER LA BALISE CANVAS
const mwContentText = document.getElementById('mw-content-text')
const table2 = document.getElementById('table2')
const canvas2 = document.createElement('canvas')
canvas2.setAttribute('id','graph2')
canvas2.style.width='775px'
mwContentText.insertBefore(canvas2, table2)
/////////////////////////////////////////////


var ctx = document.getElementById('graph2').getContext('2d')

  var xValues = ["2007–09","2010–12"];
  var yValues = [247, 307];
  var barColors = ["#2873e6","#ea7424",];
  
  new Chart("graph2", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Latvia"
      }
    }
  });


  