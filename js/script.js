
// header-menu
const menuToggle = document.getElementById("menu-toggle");
const burgerIcon = document.querySelector(".burger-icon i");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-xmark");
  } else {
    burgerIcon.classList.remove("fa-xmark");
    burgerIcon.classList.add("fa-bars");
  }
});



//menu
const foodBtn = document.getElementById("foodBtn");
const drinksBtn = document.getElementById("drinksBtn");

const foodSubMenu = document.getElementById("foodSubMenu");
const drinksSubMenu = document.getElementById("drinksSubMenu");

const subButtons = document.querySelectorAll(".sub-item-m");
const allLists = document.querySelectorAll(".menu-list");

function closeAllLists() {
  allLists.forEach((list) => list.classList.remove("show"));
}

function closeAllSubMenus() {
  foodSubMenu.classList.remove("show");
  drinksSubMenu.classList.remove("show");
  foodBtn.classList.remove("active");
  drinksBtn.classList.remove("active");
  closeAllLists();
}

foodBtn.addEventListener("click", () => {
  const isOpen = foodSubMenu.classList.contains("show");
  closeAllSubMenus();

  if (!isOpen) {
    foodSubMenu.classList.add("show");
    foodBtn.classList.add("active");
  }
});

drinksBtn.addEventListener("click", () => {
  const isOpen = drinksSubMenu.classList.contains("show");
  closeAllSubMenus();

  if (!isOpen) {
    drinksSubMenu.classList.add("show");
    drinksBtn.classList.add("active");
  }
});

subButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const targetList = document.getElementById(targetId);

    const wasOpen = targetList.classList.contains("show");
    closeAllLists();

    if (!wasOpen) {
      targetList.classList.add("show");
      targetList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// /=============== INTRO LOADER ===============/
window.addEventListener('load', () => {
    const intro = document.querySelector('.intro-loader');
    
   
    setTimeout(() => {
        if(intro) {
            intro.classList.add('fade-up');
        }
    }, 2500);

   
    setTimeout(() => {
        if(intro) {
            intro.style.display = 'none';
        }
    }, 3700);
})
// transitin scroll

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

