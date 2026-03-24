
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('[data-mobile-toggle]');
  const mobile = document.querySelector('[data-mobile-menu]');
  if(toggle && mobile){
    toggle.addEventListener('click', ()=> mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block');
  }
  document.querySelectorAll('.faq-item').forEach((item)=>{
    const btn = item.querySelector('.faq-question');
    if(btn){
      btn.addEventListener('click', ()=> item.classList.toggle('open'));
    }
  });
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent = new Date().getFullYear());
});
