var ctx = document.getElementById("chart3").getContext('2d');
Chart.defaults.global.defaultFontSize=12;
Chart.defaults.global.defaultFontStyle='normal';
Chart.defaults.global.defaultFontFamily="Arial";
Chart.defaults.global.elements.point.pointStyle ='circle';


Chart.defaults.global.defaultFontColor='#777';
var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(15, 155, 255, 0.9)');
gradient.addColorStop(1, 'rgba(253, 254, 254, 0.0)');


var myChart = new Chart(ctx, {
   
  
    type: 'bar',
    data: {
        labels: ["Janary", "February", "March", "April", "May", "June","July","August","September","October","November","December"],
        datasets: [{
            label: 'Active Countries',
            data: [80, 99,86,96,123,83,75, 100, 88, 90,123,155],
            backgroundColor: gradient,
            borderColor: '#0F9BFF',
            borderWidth: 1,
            pointBackgroundColor:'#18CE0F',
            pointBorderWidth:1,
            pointHoverBorderWidth:2,
            
        }],
        
    },
    options: {
        responsive: true,
maintainAspectRatio: false,
       scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false,
            
          
            
        }
      }],
          yAxes: [{
        display: true,
              angleLines: {
    display: true
  },
              
                ticks: {
                max: 160,
                min: 60,
                stepSize: 20,
                    padding:15,
                    color: 'rgba(229, 229, 229,0.5)',
            },
        gridLines: {
          display: true,
            color:'rgba(229, 229, 229,1)',
            
           
        }
    
    }]
},
        tooltips:{
            mode:'point',
            backgroundColor:"rgba(0, 0, 0,0.7)",
            titleFontSize: 12,
            titleFontColor:'white',
            titleFontStyle:'bold',
            bodyFontSize:11,
            bodyFontColor:"white",
             bodyFontStyle:'normal',
            xPadding:15,
            yPadding:7,
            
            
            
            
        },
        legend: {
            display:false
        },
       
        
    }
});