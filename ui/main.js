console.log('Loaded!');

//Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='new Value';

//Move the image on clicking
var img=document.getElementById('nodi');
var marginLeft=0;
function moveRight()
{
marginLeft+=10;
img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
   
    
};