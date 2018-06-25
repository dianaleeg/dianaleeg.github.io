// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 $ curl \
      -H 'Authorization: Bearer WUIXYS5FOY4ESPSGLGSVR2I4FPIPZKDW' \
      'https://api.wit.ai/message?v=20170307&q=hello'

$.ajax({
  url: 'https://api.wit.ai/message',
  data: {
    'q': 'set an alarm in 10min',
    'access_token' :'WUIXYS5FOY4ESPSGLGSVR2I4FPIPZKDW'

  },
  dataType: 'jsonp',
  method: 'GET',
  success: function(response) {
      console.log("success!", response);
  }
});
