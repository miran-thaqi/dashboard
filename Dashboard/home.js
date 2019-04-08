// chart setting buttons

var settBtn = document.getElementById('set-btn');
settBtn.addEventListener('click',function(){
    
var settDrop = document.getElementsByClassName('settings-drop')
var settIcon = document.getElementById('sett-icon');
  for(var i=0 ; i<settDrop.length; i++){
       settDrop[i].classList.toggle("show");
        settBtn.classList.toggle("active");
        settIcon.classList.toggle("icon-active");

  }
  
});

//chart 2 settings 
var settBtn2 = document.getElementById('set-btn2');
var settDrop2 = document.getElementsByClassName('settings-drop2')
var settIcon2 = document.getElementById('sett-icon2');

settBtn2.addEventListener('click',function(){
  for(var i=0 ; i<settDrop2.length; i++){
       settDrop2[i].classList.toggle("show");
        settBtn2.classList.toggle("active");
        settIcon2.classList.toggle("icon-active");

  }
  
});




