//Counter Code
var button=document.getElementById('counter');

button.onclick=function()
{
    //Create a request object
    var request=new XMLHTTPRequest();
    
    
    //Capture the response & store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {//Take some action
        if(request.status===200)
           {
        var counter=request.responseText;
        var span=document.getElementById('count');
        span.innerHTML=counter.toString();
            }
        }
        
        
    };
   //Make a request
  request.open('GET','http://vaibhav-17596.imad.hasura-app.io/counter',true);
  request.send(null);
    
    
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_bttn');
submit.onclick=function()
{
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {list += '<li>'+names[i]+'</li>'}
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
};