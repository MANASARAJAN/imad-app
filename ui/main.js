//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    // make a request to the counter endpoint
    
    // Capture the response and store it ina variable
    
    // Render the variablr in the correct span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};