//Counter Code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function () {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it ina variable
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
                span.innerHTML = count.toString();
            }
        }
        //not done yet
    };
    // make the request
     request.open('GET', 'http://manasarajan17.imad.hasura-app.io/counter', true);
     console.log('EXECUTED');
};