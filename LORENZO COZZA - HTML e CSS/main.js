$(document).ready(function(){
  $('.menu-follow a').click(function(){
    $('.menu-follow a').removeClass('active');
    $(this).addClass('active');
  })

  $('#back-to-top').click(function(){
    $('.menu-follow a').removeClass('active');
  })
})

mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
