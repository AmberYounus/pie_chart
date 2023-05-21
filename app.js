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
         ['workout',2],
     
    ]);
     //set the style of chart
     var option =
     {
         'title':'My Daily routine', 
         'width':850 ,
         'height':650        
     }
 
     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
     chart.draw(data,option)
 }
