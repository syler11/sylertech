var today = new Date();

function getYear() {
var year = today.getFullYear();
console.log(year)

document.getElementById("txtYear").innerHTML = year

}

getYear();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  window.scroll({top: 0, behavior: "smooth"})

  document.getElementById("btt").style.display = "none";

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("btt").style.display = "block";
    } else {
        document.getElementById("btt").style.display = "none";
    }
   
}
  
  $('.btt-link').click(function(e) {
    window.scrollTo(0,0)
  })