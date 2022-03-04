const hamburger=document.querySelector(".header__hamburger");
const topnav=document.querySelector(".header__top-links-wrapper");
const bottomnav=document.querySelector(".header__nav-wrapper");

const toplink=document.querySelector(".header__top-links");
const bottomlink=document.querySelector(".header__nav-links-wrapper");


const all_li=document.querySelectorAll("ul li");
const all_anchor=document.querySelectorAll("ul>li a");

   hamburger.addEventListener("click",()=> { 

   hamburger.classList.toggle("active");
   topnav.classList.toggle("active");
   bottomnav.classList.toggle("active");

  for(let ele of toplink.children)
  {
    ele.classList.add("nav-item");
  }


  for(let ele of bottomlink.children)
  {
    ele.classList.add("nav-item");
  }


  for(let border of all_li)
  {
     border.classList.add("remove-border");

  }
  for(let border of all_anchor)
  {
     border.classList.add("remove-border");
     
  }
  

})




document.querySelectorAll("ul>li a").forEach(anchor_child=>anchor_child.addEventListener("click",
()=>{
   
   hamburger.classList.remove("active");
   topnav.classList.remove("active");
   bottomnav.classList.remove("active");


}));