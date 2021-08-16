//menu
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  }
  //Gsap
  // gsap.registerPlugin("ScrollTrigger");
  
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#one",
  //     start: "center bottom"
  //   }
  // });
  // tl.to("#one", {
  //   opacity: 1,
  //   x: "10px",
  //   duration: 2
  // });
  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#two",
  //     start: "center bottom"
  //   }
  // });
  // tl.to("#two", {
  //   opacity: 1,
  //   x: "10px",
  //   duration: 2
  // });
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  btn2.onclick = function () {
    modal.style.display = "block";
  };
  btn3.onclick = function () {
    modal.style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  const btn_close = document.querySelector('#close');
const cont_cookies = document.querySelector('.cookies-box');
const acep = document.querySelector('#acep');

acep.addEventListener('click',() => {
  aceptarCookies();
})


function comprobarCookies(){
  if (localStorage.cookie1 == 'true'){
    cont_cookies.style.opacity = '0';
    cont_cookies.style.display = 'none';
  }
}

comprobarCookies();

function aceptarCookies(){
  localStorage.cookie1 = 'true';
  cont_cookies.style.display = 'none';

  let expire = new Date()
  expire = new Date(expire.getTime() + 77600000);
  document.cookie1 = 'cookie1=aceptada; expire'+expire;
}

btn_close.addEventListener('click',() => {
  cont_cookies.style.display = 'none'; 
});