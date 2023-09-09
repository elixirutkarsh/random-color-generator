let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let div=document.querySelector("div");
    let randomcolor=generateor();
    div.style.backgroundColor=randomcolor;
    let h3=document.querySelector("h3");
    h3.innerHTML=randomcolor;
})
function generateor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color= `RGB(${red} ,${green} ,${blue})`;
    return color;

}
