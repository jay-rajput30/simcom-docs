const aside = document.querySelector(".doc--name");
const toggleBtn = document.querySelector(".show--hide");
const sidebarItems = document.querySelectorAll(".doc--name--list--item");

sidebarItems.forEach(item=>{
    item.addEventListener("click", function(){
        aside.classList.toggle("");
    })
})
toggleBtn.addEventListener("click", function(){
    toggleBtn.classList.toggle("show--hide--rotate");
});