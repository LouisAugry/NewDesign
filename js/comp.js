document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let burger=document.getElementById("burger");
    burger.addEventListener("click",function(){
        burger.classList.toggle("burgerchecked");
        if (document.getElementsByTagName("nav").item(0).style.top !== "0px")
            document.getElementsByTagName("nav").item(0).style.top="0px";
        else 
            document.getElementsByTagName("nav").item(0).style.top="-350px";
        
    });
    
    let allImg=document.getElementsByTagName("img");
    for(let i=0; i<allImg.length; i++) {
        console.log(allImg.item(i).getAttribute("src"));
    }
    
    
    let videos = document.querySelectorAll("video");
    for(let i=0; i <videos.length; i++){
        videos.item(i).addEventListener("click", function(){
            if(videos.item(i).paused){
            videos.item(i).play();
            }else{
                videos.item(i).pause();
            }
        })
    }

}