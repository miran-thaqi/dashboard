window.onload = function() {
 update();
};
function update(){
    var updateIcon = document.getElementById('updateIcon');
    updateIcon.classList.add('updateLoad');
}


////  DASHBOARD SETTINGS /////
var dashBtn = document.getElementById('dashbBtn');
var dashDrop = document.getElementsByClassName('dashboard-drop');
var count =1;
dashBtn.addEventListener('click',function(){
  for(var k=0 ; k<dashDrop.length; k++){
  dashDrop[k].classList.toggle("show");
  }
  
});

//Language drop


var lbtn = document.getElementById('langBtn');
var langDrop = document.getElementsByClassName('lang-drop');
var downArrow =document.getElementById('down');
lbtn.addEventListener('click',function(){
  for(var j=0 ; j<langDrop.length; j++){
       langDrop[j].classList.toggle("show");
        downArrow.classList.toggle("rotate");
        lbtn.classList.toggle("icon-tools-color");
  }
  
});


//some action drop 



var actionBtn = document.getElementById('actionBtn');
var actionDrop = document.getElementsByClassName('action-drop');
var downAction =document.getElementById('down-action');
    actionBtn.addEventListener('click',function(){
  for(var j=0 ; j<langDrop.length; j++){
       actionDrop[j].classList.toggle("show-nav");
        downAction.classList.toggle("rotate");
        actionBtn.classList.toggle("top-menu-item-active");
  }
  
});

//top menu 

    topMenuBtn.addEventListener('click',function(){
        var topMenuBtn = document.getElementById('topMenuBtn');
        var topMenu = document.getElementsByClassName('top-menu');
        var navTools = document.getElementsByClassName('nav-tools');
        var pageTitle =document.getElementById('pageTitle')
        var bar = document.getElementsByClassName('bar');
        
  for(var j=0 ; j<topMenu.length; j++){
       topMenu[j].classList.toggle("show-menu");
        
      if (pageTitle.style.color ==="black" && topMenuBtn.style.color ==="black"){
             pageTitle.style.color = 'white';
            topMenuBtn.style.color = 'white';
            }else{
             pageTitle.style.color = 'black';
            topMenuBtn.style.color = 'black';
            }
          for(var b=0; b<bar.length; b++){
             if(bar[b].style.borderColor === "black"){
                 bar[b].style.borderColor ='white';
             }else{
                 bar[b].style.borderColor ='black';
             }
          }
        for(var s=0; s < navTools.length; s++){
            navTools[s].classList.toggle('nav-tools-color');
            
        }
  }
  
});

// SHOW SIDEBAR // 


  var barBox = document.getElementById('bars');
    barBox.addEventListener('click',function(){
        var hPage =document.getElementById('homePage');
        var sideBar = document.getElementById('sidebar');
        var bar = document.getElementsByClassName('bar');
        function close(){
                     bar[0].style.transform = "translate(0px,12px) rotate(130deg)";
                 bar[1].style.opacity = "0";
                 bar[2].style.transform="translateY(0px) rotate(47deg)";
                 }
        function bars() {
             bar[0].style.transform = "none";
                 bar[1].style.opacity = "1";
                 bar[2].style.transform="none";
        }
        
             if(sideBar.style.width === "260px" && hPage.style.marginLeft === "260px"){
                 //sideBar.style.width = "0";
                 sidebar.style.marginLeft='-260px';
                 hPage.style.marginLeft ="0";
                   setTimeout(bars, 400);
             } else {
                
                 sideBar.style.width = "260px";
                  sidebar.style.marginLeft='0';
                 hPage.style.marginLeft ="260px";
                 setTimeout(close, 400);
             
                 
             }
    });


//// SIDEBAR COLOR ////

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var sidebar = document.getElementById('sidebar');
var menuText = document.getElementsByClassName('a');
var menuItem = document.getElementsByClassName('active-menu');
var icon = document.querySelectorAll('.active-menu i,.active-menu .a')
color1.addEventListener('click',function(){
    sidebar.style.backgroundColor = "#FFB236";
    for(var i = 0; i<icon.length; i++){
        icon[i].style.color = '#FFB236';
    }
});
color2.addEventListener('click',function(){
    sidebar.style.backgroundColor = "#2CA8FF";
  for(var i = 0; i<icon.length; i++){
        icon[i].style.color = '#2CA8FF';
    }
  
});
color3.addEventListener('click',function(){
    sidebar.style.backgroundColor = "#18CE0F";
     for(var i = 0; i<icon.length; i++){
        icon[i].style.color = '#18CE0F';
    }
});
color4.addEventListener('click',function(){
    sidebar.style.backgroundColor = "#F96332";
     for(var i = 0; i<icon.length; i++){
        icon[i].style.color = '#F96332';
    }
  
});
color5.addEventListener('click',function(){
    sidebar.style.backgroundColor = "#FF3636";
     for(var i = 0; i<icon.length; i++){
        icon[i].style.color = '#FF3636';
    }
 
});

/// Toast Text


function showToast(notify){
    var notify = document.getElementById(notify);
    var toast = document.createElement('div');
    var text = document.createElement('span');
    var bellIcon = document.createElement('i');
    var closeIcon = document.createElement('i');
    
    toast.classList = "toast showFromTop";
    bellIcon.classList = 'far fa-bell';
    closeIcon.classList = 'fas fa-times';
    text.innerHTML = "Welcome to Now <b>Ui Dashboard</b> - a beautiful freebie for every web developer.";
    
    toast.appendChild(bellIcon);
    toast.appendChild(text);
    toast.appendChild(closeIcon);
    notify.appendChild(toast);
    
  
    
    closeIcon.addEventListener('click',function(){
          
          toast.classList.add('hidden');
            setTimeout(function(){
                toast.style.display = 'none';
            },1000/2);
    });
    
     
    setTimeout(function(){
        toast.style.display = 'none';
            },7000); 
    
    
}




