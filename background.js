

const bodyColor= document.body;
const line= document.querySelector(".rand");
const btn= document.querySelector("button");
function randomColor(){
    const red=Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() * 256);
    const blue=Math.floor(Math.random() * 256);
    const newColor = `rgb(${red}, ${green}, ${blue})`
    console.log(newColor);
    return newColor; 
}
btn.addEventListener("click",()=>{
    const newColor=randomColor();
    line.textContent = newColor;
    bodyColor.style.backgroundColor=newColor;
})