const hamburger=document.querySelector(".header__hamburger");
const topnav=document.querySelector(".header__top-links-wrapper");
const bottomnav=document.querySelector(".header__nav-links");

const toplink=document.querySelector(".header__top-links");
const bottomlink=document.querySelector(".header__nav-links-wrapper");


const all_anchor=document.querySelectorAll(".header__nav-links > a");

   hamburger.addEventListener("click",()=> { 

   hamburger.classList.toggle("active");
   topnav.classList.toggle("active");
   bottomnav.classList.toggle("active");

  for(let margin of all_anchor)
  {
     margin.classList.add("remove-margin");

  } 

})


document.querySelectorAll(".header__top-links-right > a,.header__nav-links > a").forEach(anchor_child=>anchor_child.addEventListener("click",
()=>{
   
   hamburger.classList.remove("active");
   topnav.classList.remove("active");
   bottomnav.classList.remove("active");


}));