const start = document.querySelector('#start');
const stopp = document.querySelector('#stop');
let h1 = document.querySelector('h1');
div = document.querySelector('div');;


const changecolor= () =>{
  let hex="0123456789ABCDEF";
  color="#";
  for(i=0;i<6;i++){
   color+=hex[Math.floor(Math.random()*16)]
   
  }
  console.log(color);
  document.body.style.backgroundColor = color;
  div.innerHTML=color;



  return color;
}


start.addEventListener("click",function(){
    set=setInterval(changecolor,500);
    
})
stopp.addEventListener("click",function(){
    clearInterval(set);
    set=null;
})