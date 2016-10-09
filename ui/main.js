console.log('Loaded!');

//Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='new Value';

//Move the image on clicking
var img=document.getElementById('nodi');
img.onclick=function()
{
  img.style.marginLeft='100px';  
};