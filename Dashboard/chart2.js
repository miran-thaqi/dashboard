var ctx = document.getElementById("chart2").getContext('2d');
Chart.defaults.global.defaultFontSize=12;
Chart.defaults.global.defaultFontStyle='normal';
Chart.defaults.global.defaultFontFamily="Arial";
Chart.defaults.global.elements.point.pointStyle ='circle';


Chart.defaults.global.defaultFontColor='#777';
var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(24, 206, 15, 0.6)');
gradient.addColorStop(1, 'rgba(253, 254, 254, 0.0)');


var myChart = new Chart(ctx, {
   
  
    type: 'line',
    data: {
        labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am","6am","9am"],
        datasets: [{
            label: 'Data',
            data: [40, 500,650, 700, 1200, 1250, 1300,1900],
            backgroundColor: gradient,
            borderColor: '#18CE0F',
            borderWidth: 2,
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
                max: 2000,
                min: 0,
                stepSize: 500,
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