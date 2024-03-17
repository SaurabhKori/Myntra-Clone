let inp=document.getElementById("inp");
inp.addEventListener('focus',function(){
     document.getElementById("star1").style.cssText="visibility:hidden;"
     inp.removeAttribute("placeholder");
     document.getElementById("code").style.color="black"
})
let flag=1;
function loginvalidation(){
    
    if(!inp.value.match(/^\d{10}$/)){
        document.getElementById("error").innerHTML="please enter valid mobile number(10 digit)";
        flag=0;
    }
    
    if(flag==1){
        return true;
    }
    else{
        return false;
    }
}

function add(){
   let header= document.getElementById("header1");
   
    
}