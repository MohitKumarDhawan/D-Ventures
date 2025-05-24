  const sections = document.querySelectorAll('.section');
  function revealOnScroll() {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

    
    const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


function validate() {
let name = document.querySelector(".name"); 
let email = document.querySelector(".email"); 
let msg = document.querySelector(".message"); 
let sendBtn = document.querySelector(".send-btn");
sendBtn.addEventListener("click", (e) => {
e.preventDefault();
if (name.value == "" || email.value == "" || msg.value == "") {
emptyerror();
} else {
sendmail(name.value, email.value, msg.value);
success;
}
});
}
validate();


  const fadeEls = document.querySelectorAll('.section');

  function fadeInOnScroll() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);

  

