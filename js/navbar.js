
  // When the user scrolls down from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 400) {
      document.getElementById("navbar").style.padding = ".01rem";
      document.getElementById("navbar").style.padding = ".01rem";
     document.getElementById("navbar").style.background = "#211e61";
    //  document.getElementById("navbar").style.opacity = "80%";
      document.getElementById("navbar-img").style.width = "7rem";
      document.getElementById("navbar-img").style.padding = ".4rem";
      document.getElementById("navbar-img").style.height = "4rem";
      // document.getElementById("navbar-img2").style.width = "80px";
      document.getElementById("navbar").style.borderBottom = "#000";
      
    } else {
      document.getElementById("navbar").style.padding = ".5rem";
      document.getElementById("navbar").style.background = "#211e61";
      document.getElementById("navbar-img").style.width = "10rem";
      document.getElementById("navbar-img").style.height = "5rem";
      // document.getElementById("navbar-img2").style.width = ".01px";
      
    }
  }