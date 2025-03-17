const menu=document.querySelector('#menu');
const bar=document.querySelector('.bar')
const cross=document.querySelector('#cross');
menu.addEventListener('click',function(s){
if(s.target.id==='menu'){
  bar.style.display=("block");
  bar.style.marginLeft=("80px")
  cross.style.display=("block");
  menu.style.display=("none");
}
})
cross.addEventListener('click',function(e){

    if(e.target.id==='cross'){
        menu.style.display=("block");
       bar.style.display=("none");
       cross.style.display=("none");
   }
})