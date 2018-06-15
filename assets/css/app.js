

var number = 30;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
      function decrement() {
        number;

        $("#show-number").html("<h2>" + number + "</h2>");
  
        if (number === 0) {
  
  
          stop();
  
          //  Alert user that the time is up.
          alert("Time Up!");
        }
      }