!function(){"use strict";function n(){var n=document.querySelector(".header"),t="header--scrolled";window.scrollY>=30&&!n.classList.contains(t)&&n.classList.add(t),window.scrollY<30&&n.classList.contains(t)&&n.classList.remove(t)}document.addEventListener("DOMContentLoaded",(function(){var t,e,s;t=document.querySelector(".burger"),e=document.querySelector(".menu"),s=function(){t.classList.toggle("burger--close"),e.classList.toggle("is-open"),document.body.classList.toggle("lock")},t.addEventListener("click",(function(n){n.stopPropagation(),s()})),e.addEventListener("click",(function(n){e.classList.contains("is-open")&&n.target.classList.contains("menu__link")&&s()})),document.addEventListener("click",(function(n){var c=n.target,o=c===e||e.contains(c),i=c===t||t.contains(c),a=e.classList.contains("is-open");o||i||!a||s()})),n()})),window.addEventListener("scroll",n)}();