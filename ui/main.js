//Counter Code
var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it ina variable
    request.onreadystatechange= function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // Take some action
            if(request.state === 200){
               var counter= request.responsetext;
               var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet , juz lev it
    };
    // make the request
     request.open('GET', 'http://manasarajan17.imad.hasura.app.io/counter', true);
     request.send(null);
};