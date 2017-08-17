console.log('Loaded!');

//CHANGE THE TEXT OF THE MAIN-TEXT DIV
var element = document.getElementById('main-text');
element.innerHTML ='New Value' ;

//move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginleft = '100px';
};