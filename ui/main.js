//Counter Code
var button = document.getElementById('counter');

button.onclick = function () {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it ina variable
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('counter');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    // make the request
     request.open('GET', 'http://manasarajan17.imad.hasura-app.io/counter', true);
     request.send(null);
     console.log('EXECUTED');
};