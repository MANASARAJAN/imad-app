console.log('Loaded!');

//CHANGE THE TEXT OF THE MAIN-TEXT DIV
var element = document.getElementById('main-text');
element.innerHTML ='New Value' ;

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    imd.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};