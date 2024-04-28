let hanburger = document.getElementById("hanburger")
let navGroup = document.getElementById("nav_link_group")

let firstlink = document.getElementById("firstlink")
let sub1 = document.getElementById("sub-1")
let backIcon = document.getElementById("backIcon")

let secondLink = document.getElementById("secondlink")
let sub_2 = document.getElementById("sub-2")
let caret_left = document.getElementById("caret-left")

let thirdLink = document.getElementById("thirdlink")
let sub_3 = document.getElementById("sub-3")
let leftCaret = document.getElementById ("left-caret")

let fourthLink = document.getElementById("fourthlink")
let sub_4 = document.getElementById("sub-4")
let leftBar = document.getElementById ("left-bar")

let subBackIcons = document.querySelectorAll("[data-subBackIcon]")


subBackIcons.forEach(function(item){
  item.addEventListener("click",function(){
    if(item.dataset.subBackIcon == "sub-1"){
        sub1.style.left = "100%";  
    }else if(item.dataset.subBackIcon == "sub-2")
    {
        sub_2.style.left = "100%"; 
    }
        navGroup.style.left = "0"
    })
})

firstlink.addEventListener("click",function(){
    navGroup.style.left = "-100%"
    sub1.style.left = "0"  
})
// backIcon.addEventListener("click",function(){
//     sub1.style.left = "100%"
//     navGroup.style.left = "0"
// })

secondLink.addEventListener("click", function(){
    navGroup.style.left = "-100%"
    sub_2.style.left = "0"
})
// caret_left.addEventListener("click",function(){
//     sub_2.style.left = "100%"
//     navGroup.style.left = "0"
// })

thirdLink.addEventListener("click",function(){
    navGroup.style.left = "-100%"
    sub_3.style.left = "0"
})
// leftCaret.addEventListener("click",function(){
//     sub_3.style.left = "100%"
//     navGroup.style.left = "0"
// })
fourthLink.addEventListener("click",function(){
    navGroup.style.left = "-100%"
    sub_4.style.left = "0"
})
    // leftBar.addEventListener('click',function(){
    //     sub_4.style.left = "100%"
    //     navGroup.style.left = "0"
    // })



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


