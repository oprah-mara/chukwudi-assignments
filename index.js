let hanburger = document.getElementById("hanburger")
let navGroup = document.getElementById("nav_link_group")

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


