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

var submit=document.getElementById('submit_bttn');
submit.onclick=function()
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
        var names=request.responseText;
        names=JSON.parse(names);
        var list='';
        for(var i=0;i<names.length;i++)
        list='<li>'+names[i]+'</li>';
        var ul=document.getElementById('namelist');
        ul.innerHTML=list;
        
            }
        }
        
        
    };
   //Make a request
   var nameInput=document.getElementById('name');
var name=nameInput.value;
  request.open('GET','http://vaibhav-17596.imad.hasura-app.io/submit-name?name=',name,true);
  request.send(null);
    
};