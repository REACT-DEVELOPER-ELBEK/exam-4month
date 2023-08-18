window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '20px';
    } else {
      backtop.style.bottom = '-50px';
    }
  }

  document.querySelector('#menu').addEventListener('click', () => {
  getSelection('nav__menu').classList.toggle('showmenu');
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
