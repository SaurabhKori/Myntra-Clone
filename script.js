
let slide1=document.getElementsByClassName("slide1")
let cir=document.getElementsByClassName("cir");
let k=slide1.length
 let x=0;
 
 function slideshow(num){
   
    for(let y of slide1){
        y.style.display="none"
    }
    slide1[num].style.display="block";
    
    for(let c of cir){
        c.style.backgroundColor="#dedfe1"

    }
    cir[num].style.backgroundColor="grey"   
}

slideshow(x);
//auto slider function for header slider

 function start(){
    this.autoslide=setInterval(function(){

        if(x<=k-1){
         
        //  console.log(x)
         slideshow(x);
        x=x+1;
         }else{
             x=0;
            slideshow(x)
        }
     },2000)
  }
  function stop(){
    clearInterval(this.autoslide)
  }

start();
function controler(y,m){
    
    slideshow(y);
    stop();
       x=y+1;
       start();
    }
//grand global slide------------------
let slide2 =document.getElementsByClassName("slide2");
console.log(slide2)
let cir1=document.getElementsByClassName("cir1");
let l=slide2.length;
 let z=0;
 
 function slideshow1(num){
   
    for(let i of slide2){
        i.style.display="none"
    }
    slide2[num].style.display="block";
    
    for(let j of cir1){
        j.style.backgroundColor="#dedfe1"

    }
    cir1[num].style.backgroundColor="grey"   
}

slideshow1(z);
//auto slider function for header slider
 function starts(){
    this.autos=setInterval(function(){

        if(z<=l-1){
         slideshow1(z);
        z=z+1;
         }else{
             z=0;
            slideshow1(z)
        }
     },2000)
  }
  function stops(){
    clearInterval(this.autos)
  }

starts();
function controler1(y){
    
    slideshow1(y);
    stops();
       z=y+1;
       starts();
    }

// medal worthy slider----------------------------------------
let slide3=document.getElementsByClassName("slide3")
let cir3=document.getElementsByClassName("cir3");
let n=slide3.length;
console.log(n)
 let o=0;
 
 function slideshow2(num){
   
    for(let y of slide3){
        y.style.display="none"
    }
    slide3[num].style.display="block";
    
    for(let c of cir3){
        c.style.backgroundColor="#dedfe1"

    }
    cir3[num].style.backgroundColor="grey"   
}

slideshow2(o);
//auto slider function for header slider

 function start1(){
    this.autoslide=setInterval(function(){

        if(o<=n-1){
         
        //  console.log(x)
         slideshow2(o);
        o=o+1;
         }else{
             o=0;
            slideshow2(o)
        }
     },2000)
  }
  function stop1(){
    clearInterval(this.autoslide)
  }

start1();
function controler3(y){
    
    slideshow2(y);
    stop1();
       o=y+1;
       start1();
    }


  


 




