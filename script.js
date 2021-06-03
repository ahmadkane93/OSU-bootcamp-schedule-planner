var date = moment();
var format= 'LLLL';
var result = moment(date).format(format);
var currentHour = result;
var pastHours = pastHours < result;
var futureHours = futureHours < currentHour;


currentDay.innerText = date;




// Changing Colors of Hours

function changeColor (){
    if(currentHour == result){
        document.getElementsByClassName(".present");
    } else if (currentHour < result) {
        document.getElementsByClassName(".future");
    } else {
        document.getElementsByClassName(".past");
    }
};

// Saving Tasks


document.getElementById("saveBtn").onclick = function() {  
    task()  
    };  

    
    function task() {  
        document.getElementsByClassName(".description col-10").innerHTML = "Welcome to the javaTpoint.com";  
        
        document.getElementById("9AM").style.backgroundColor = "red";   
        }  
        