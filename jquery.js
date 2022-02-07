// Feedback from animation

{

$(document).ready(function () {
  
    $('h1').click(function(){
              $('#details').toggle(1000)
           })
  
 
  
    //Animate Function in Jquery
    $('#lorem').animate({
        opacity:0.3,
        height : '150px',
        width :'350px'
    },1000)
    $('#lorem').animate({
        opacity:0.9,
        height : '550px',
        width :'1050px'
    },1000)
  });
}