//Counter Code
var button=document.getElementById("counter");

button.onclick=function()
{
    //Create a request object
    var request=new XMLHTTPRequest();
    
    
    //Capture the response & store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHTTPRequest.DONE)
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
  request,open('GET','http://vaibhav-17596.imad.hasura-app.io/counter',true);
  request.send(null);
    
    
};