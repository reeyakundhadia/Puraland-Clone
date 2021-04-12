const hamburger = document.getElementById('hamburger');
const navitems = document.getElementById('navitems');

hamburger.addEventListener('click', () =>{
  navitems.classList.toggle('show');
});
