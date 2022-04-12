const toggleButton = document.getElementsByClassName('fa-bars')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('navactive')
})

modal = document.querySelector('.theme-changer');
document.querySelector('.palette').addEventListener('click', () => {
  modal.showModal();
})
document.querySelector('#modalbtn').addEventListener('click', ()=>{
  modal.close();
})

function p1() {
  document.body.classList.remove('pri2');  
  document.body.classList.remove('pri3');  
  document.body.classList.remove('pri4');  
  document.body.classList.remove('pri5');  
  document.body.classList.add('pri1');
}
function p2() {
  document.body.classList.remove('pri1');  
  document.body.classList.remove('pri3');  
  document.body.classList.remove('pri4');  
  document.body.classList.remove('pri5');  
  document.body.classList.add('pri2');  
}
function p3() {
  document.body.classList.remove('pri1');  
  document.body.classList.remove('pri2');  
  document.body.classList.remove('pri4');  
  document.body.classList.remove('pri5');  
  document.body.classList.add('pri3');
}
function p4() {
  document.body.classList.remove('pri1');  
  document.body.classList.remove('pri2');  
  document.body.classList.remove('pri3');  
  document.body.classList.remove('pri5');  
  document.body.classList.add('pri4');
}
function p5() {
  document.body.classList.remove('pri1');  
  document.body.classList.remove('pri2');  
  document.body.classList.remove('pri3');  
  document.body.classList.remove('pri4');  
  document.body.classList.add('pri5');
}
function s1() {
  document.body.classList.remove('sec2');
  document.body.classList.remove('sec3');
  document.body.classList.remove('sec4');
  document.body.classList.remove('sec5');
  document.body.classList.add('sec1');
}
function s2() {
  document.body.classList.remove('sec1');
  document.body.classList.remove('sec3');
  document.body.classList.remove('sec4');
  document.body.classList.remove('sec5');
  document.body.classList.add('sec2');
}
function s3() {
  document.body.classList.remove('sec1');
  document.body.classList.remove('sec2');
  document.body.classList.remove('sec4');
  document.body.classList.remove('sec5');
  document.body.classList.add('sec3');
}
function s4() {
  document.body.classList.remove('sec1');
  document.body.classList.remove('sec2');
  document.body.classList.remove('sec3');
  document.body.classList.remove('sec5');
  document.body.classList.add('sec4');
}
function s5() {
  document.body.classList.remove('sec1');
  document.body.classList.remove('sec2');
  document.body.classList.remove('sec3');
  document.body.classList.remove('sec4');
  document.body.classList.add('sec5');
}
function a1() {
  document.body.classList.remove('acc2');
  document.body.classList.remove('acc3');
  document.body.classList.remove('acc4');
  document.body.classList.remove('acc5');
  document.body.classList.add('acc1');
}
function a2() {
  document.body.classList.remove('acc1');
  document.body.classList.remove('acc3');
  document.body.classList.remove('acc4');
  document.body.classList.remove('acc5');
  document.body.classList.add('acc2');
}
function a3() {
  document.body.classList.remove('acc1');
  document.body.classList.remove('acc2');
  document.body.classList.remove('acc4');
  document.body.classList.remove('acc5');
  document.body.classList.add('acc3');
}
function a4() {
  document.body.classList.remove('acc1');
  document.body.classList.remove('acc2');
  document.body.classList.remove('acc3');
  document.body.classList.remove('acc5');
  document.body.classList.add('acc4');
}
function a5() {
  document.body.classList.remove('acc1');
  document.body.classList.remove('acc2');
  document.body.classList.remove('acc3');
  document.body.classList.remove('acc4');
  document.body.classList.add('acc5');
}
