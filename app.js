//to load google chart
google.charts.load("current" ,{'packages' : ['corechart']});
google.charts.setOnLoadCallback(drawChart);

//Draw the chart and put any values
function drawChart(){
    var data =google.visualization.arrayToDataTable([
        ['Task' ,'Hours per Day'],
        ['Coding',1.5],
        ['Eat',2],
        ['Watching Videos',5],
        ['Sleep',8],
        ['Relaxation',1],
     
    ])
