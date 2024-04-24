let hanburger = document.getElementById("hanburger")
let navGroup = document.getElementById("nav_link_group")
let firstlink = document.getElementById("firstlink")
let sub1= document.getElementById("sub-1")
let backIcon = document.getElementById("backIcon")

firstlink.addEventListener("click",function(){
    navGroup.style.left = "-100%"
    sub1.style.left = "0"  
})
backIcon.addEventListener("click",function(){
    sub1.style.left = "100%"
    navGroup.style.left = "0"
}
)


hanburger.addEventListener("click", function()
{
    if(navGroup.style.visibility === "visible"){
        navGroup.style.visibility = "hidden";
        navGroup.style.opacity ="0"
    } else{
        navGroup.style.visibility = "visible";
         navGroup.style.opacity = "1";
        }
      
    }
    
);


