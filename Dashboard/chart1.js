var ctx = document.getElementById("chart1").getContext('2d');
Chart.defaults.global.defaultFontSize=12;
Chart.defaults.global.defaultFontStyle='bold';
Chart.defaults.global.defaultFontFamily="Arial";
Chart.defaults.global.elements.point.pointStyle ='circle';


Chart.defaults.global.defaultFontColor='rgba(253, 254, 254, 0.4';
var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(249, 99, 50,0.4)');
gradient.addColorStop(1, 'rgba(220,220,220 ,0.1)');


var chart1 = new Chart(ctx, {
   
  
    type: 'line',
    data: {
        
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
        datasets: [{
            label: 'Email Stats',
            data: [542, 480,430, 550,530, 453, 380, 434,568,610,700,630],
            backgroundColor: gradient,
            borderColor: 'rgb(249, 99, 50)',
            borderWidth: 2,
            pointBackgroundColor:'rgb(249, 99, 50)',
            pointBorderWidth:1.5,
            pointBorderColor:"white",
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
        display: false,
              angleLines: {
    display: false
  },
              
                ticks: {
                max: 800,
                min:350,
                stepSize: 300,
                    padding:15,
                    color:'rgba(253, 254, 254, 0.2)',
            },
        gridLines: {
          display: true,
            color:'rgba(253, 254, 254, 0.2)',
            
           
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