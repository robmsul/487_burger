console.log('scripts loaded')

var burger = document.getElementById('burger');

var mobileNav = document.getElementById('offscreen-nav');

var closeBtn = document.getElementById('close-btn');

var content = document.getElementById('content');

var facebookText = document.getElementById('facebook');


burger.addEventListener('click', function(){
    console.log('button clicked');
    mobileNav.style.width = '100%';
    mobileNav.style.transition = '0.5s ease';
    content.style.opacity = '.1';
});

closeBtn.addEventListener('click', function(){
    console.log('close button clicked');
    mobileNav.style.width = '0%';
    mobileNav.style.transition = '0.5s ease';
    content.style.opacity = '1';
});


facebookText.addEventListener('mouseover', function(event){
    tooltip.style.opacity = '1';
    
    
    var x = event.screenX;
    var y = event.screenY;
    
    tooltip.style.left = x - 75 + 'px';
    tooltip.style.bottom = y + 160 + 'px';
});

facebookText.addEventListener('mouseout', function(event){
    tooltip.style.opacity = '0';
});
