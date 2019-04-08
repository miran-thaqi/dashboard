var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontSize=18;
Chart.defaults.global.defaultFontStyle='bolder';
Chart.defaults.global.defaultFontFamily="Montserrat";
Chart.defaults.global.elements.point.pointStyle ='circle';
Chart.defaults.global.defaultFontColor='rgba(255, 255, 255, 0.9)';
var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(253, 254, 254, 0.3)');
gradient.addColorStop(1, 'rgba(253, 254, 254, 0.0)');


var myChart = new Chart(ctx, {
   
  
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
        datasets: [{
            label: 'Data',
            data: [50, 150,100, 190, 130, 90, 150,160,120,140,190,95],
            backgroundColor: gradient,
            borderColor: 'white',
            borderWidth: 2,
            pointBackgroundColor:'#0E2949',
            pointBorderWidth:1,
            pointHoverBorderWidth:2,
            
        }],
        
    },
    options: {
        responsive: true,
maintainAspectRatio: false,
       scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: false,
        },
          ticks: {
                    padding:15,
                    fontColor:'rgba(255, 255, 255, 0.4)',
                    fontStyle:'bold'
            },
      }],
          yAxes: [{
        display: true,
              angleLines: {
        display: false,
       
  },
              
                ticks: {
                max: 200,
                min: 0,
                stepSize: 50,
                    padding:15,
                    fontColor:'rgba(255, 255, 255, 0.4)',
                    fontStyle:'bold'
            },
        gridLines: {
          display: true,
            color:'rgba(253, 254, 254, 0.2)',
            
           
        }
    
    }]
},
        tooltips:{
            mode:'point',
            backgroundColor:"white",
            titleFontSize: 12,
            titleFontColor:'black',
            titleFontStyle:'bold',
            bodyFontSize:11,
            bodyFontColor:"gray",
            bodyFontStyle:'normal',
            xPadding:15,
            yPadding:7,
            
            
            
            
        },
        legend: {
            display:false
        },
       
        
    }
});