$(document).ready(function(){
  setTimeout(function(){
      $('#overlay').fadeOut();
  }, 5000);
});

const logoOne = document.getElementById('logoOne');
const logoTwo = document.getElementById('logoTwo');
const logoLeftBracket = document.getElementById('logoLeftBracket');
const logoRightBracket = document.getElementById('logoRightBracket');

setTimeout(() => {
  logoLeftBracket.style.display = 'inline-block';
}, 000);

setTimeout(() => {
  logoOne.style.display = 'inline-block';
}, 2500);

setTimeout(() => {
  logoTwo.style.display = 'inline-block';
}, 3000);

setTimeout(() => {
  logoRightBracket.style.display = 'inline-block';
}, 00);

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".animated")[1].classList.add("fadeInRight");
      document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
      document.querySelectorAll(".animated")[3].classList.add("fadeInTop08");
      document.querySelectorAll(".animated")[4].classList.add("fadeInRight");
      document.querySelectorAll(".animated")[5].classList.add("fadeInRight");
    }
  })
})

observer.observe(document.querySelector(".project-one"));

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated1")[0].classList.add("fadeInRight");
      document.querySelectorAll(".animated1")[1].classList.add("fadeInLeft");
      document.querySelectorAll(".animated1")[2].classList.add("fadeInLeft");
      document.querySelectorAll(".animated1")[3].classList.add("fadeInTop08");
      document.querySelectorAll(".animated1")[4].classList.add("fadeInLeft");
      document.querySelectorAll(".animated1")[5].classList.add("fadeInLeft");
    }
  })
})

observer1.observe(document.querySelector(".project-two"));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated2")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".animated2")[1].classList.add("fadeInRight");
      document.querySelectorAll(".animated2")[2].classList.add("fadeInRight");
      document.querySelectorAll(".animated2")[3].classList.add("fadeInTop08");
      document.querySelectorAll(".animated2")[4].classList.add("fadeInRight");
      document.querySelectorAll(".animated2")[5].classList.add("fadeInRight");
    }
  })
})

observer2.observe(document.querySelector(".project-three"));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated3")[0].classList.add("fadeInRight");
      document.querySelectorAll(".animated3")[1].classList.add("fadeInLeft");
      document.querySelectorAll(".animated3")[2].classList.add("fadeInLeft");
      document.querySelectorAll(".animated3")[3].classList.add("fadeInTop08");
      document.querySelectorAll(".animated3")[4].classList.add("fadeInLeft");
      document.querySelectorAll(".animated3")[5].classList.add("fadeInLeft");
    }
  })
})

observer3.observe(document.querySelector(".project-four"));