// basic interactive bits: nav toggle, contact demo, year
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', ()=> {
  if(nav.style.display === 'flex' || nav.style.display === '') {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  } else {
    nav.style.display = 'flex';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Friend';
  alert(`Thanks ${name}! This is a demo form — we'll add real backend later.`);
  e.target.reset();
}
