/**
 * Dom
 * @type {HTMLElement}
 */
const navbar = document.getElementById("navbar");
const menuAdaptive = document.getElementById("menu-adaptive");

/**
 * Boolean
 */
let visibleNav = false;

/**
 * Functions
 */

function toggleVisible () {
  visibleNav = !visibleNav;
  if (visibleNav === true) {
    menuAdaptive.style.animationName = "scaleTop";
    menuAdaptive.style.animationDuration = '0.5s';
    menuAdaptive.style.animationFillMode = 'forwards';
  } else {
    menuAdaptive.style.animationName = "scaleNone";
    menuAdaptive.style.animationDuration = "0.5s";
    menuAdaptive.style.animationFillMode = 'forwards';
  }
}
window.addEventListener('scroll', () => {
  if (pageYOffset > 100) {
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    menuAdaptive.style.color = "black";
  }
  else {
    navbar.style.backgroundColor = "";
    menuAdaptive.style.color = "";
    navbar.style.boxShadow = "";
  }
});

