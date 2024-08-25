
function NabarUnhide(){
    let navbar = document.getElementById('leftbar')
    let property = getComputedStyle(navbar)
    let widthValue = parseInt(property.getPropertyValue('width'))
    //104.067px
    //navbar.style.display = "block";
    if (widthValue > 10){
        navbar.style.display = "none";
    }else{
        navbar.style.display = "block";
    }
    
}

var tabContent = document.querySelectorAll(".tabs");
var tabButton = document.querySelectorAll('.tab-link');

function tabs(index,tab){
    tabContent.forEach(ele => {
        ele.style.display = "none"
    })

    tabButton.forEach(ele => {
        ele.style.backgroundColor = "white"
        ele.style.color ="black"
    })

    tabContent[index].style.display = "block"
    tabButton[index].style.backgroundColor="var(--10)"
    tabButton[index].style.color ="white"


}
tabs(0,"Post")
console.log("Hello")
const sbtn  = document.getElementById('K')
console.log(sbtn.innerText)
sbtn.addEventListener('click',function(){
//    const content = document.getElementById('texteditor').innerHTML
//    document.getElementById('textarea').value = content;
    console.log("Arunkumar");  // 

});


let bioPic = document.getElementById("bio-pic")
let bannerPic = document.getElementById("bnner-pic")

let bioPicFile = document.getElementById("bio-pic-file")
let bannerPicFile = document.getElementById("bnner-pic-file")


bioPicFile.onchange = function(){
    bioPic.src = URL.createObjectURL(bioPic.files[0])
}


const btn = document.querySelectorAll('.tool-btn')


btn.forEach(ele => {
    ele.addEventListener('click',() =>{
        let command = ele.dataset['command'];
        document.execCommand(command,false,null)
    })
})