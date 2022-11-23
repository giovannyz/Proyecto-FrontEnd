
const contador=document.getElementById("cont")
const increase=document.getElementById("incr")
const decrease=document.getElementById("decr")

const contador2=document.getElementById("cont2")
const increase2=document.getElementById("incr2")
const decrease2=document.getElementById("decr2")

const contador3=document.getElementById("cont3")
const increase3=document.getElementById("incr3")
const decrease3=document.getElementById("decr3")

const contador4=document.getElementById("cont4")
const increase4=document.getElementById("incr4")
const decrease4=document.getElementById("decr4")

const contador5=document.getElementById("cont5")
const increase5=document.getElementById("incr5")
const decrease5=document.getElementById("decr5")

const contador6=document.getElementById("cont6")
const increase6=document.getElementById("incr6")
const decrease6=document.getElementById("decr6")

const contador7=document.getElementById("cont7")
const increase7=document.getElementById("incr7")
const decrease7=document.getElementById("decr7")

const contador8=document.getElementById("cont8")
const increase8=document.getElementById("incr8")
const decrease8=document.getElementById("decr8")

const contador9=document.getElementById("cont9")
const increase9=document.getElementById("incr9")
const decrease9=document.getElementById("decr9")

//FUNCTION 

let numero=0

increase.addEventListener("click", ()=>{
  numero++;
  contador.innerHTML = numero;
    
});

decrease.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

})
//-----------2---------

let numero2=0

increase2.addEventListener("click", ()=>{
    numero2++;
    contador2.innerHTML = numero2;
      
  });
  
decrease2.addEventListener("click", ()=>{
  
      if(numero2==0){}
      else{
          numero2--;
          contador2.innerHTML = numero2;
      }
  
  })


//---------------3------------
let numero3=0;

increase3.addEventListener("click", ()=>{
    numero3++;
    contador3.innerHTML = numero3;
      
  });
  
  decrease3.addEventListener("click", ()=>{
  
      if(numero3==0){}
      else{
          numero3--;
          contador3.innerHTML = numero3;
      }
  
  })

  //-------4-------------
let numero4=0;

increase4.addEventListener("click", ()=>{
    numero4++;
    contador4.innerHTML = numero4;
      
  });
  
decrease4.addEventListener("click", ()=>{
  
      if(numero4==0){}
      else{
          numero4--;
          contador4.innerHTML = numero4;
      }
  
  })

//-----5-----------

let numero5=0
  increase5.addEventListener("click", ()=>{
    numero5++;
    contador5.innerHTML = numero5;
      
  });
  
  decrease5.addEventListener("click", ()=>{
  
      if(numero5==0){}
      else{
          numero5--;
          contador5.innerHTML = numero5;
      }
  
  })

//---------6-------------

let numero6=0;

  increase6.addEventListener("click", ()=>{
    numero6++;
    contador6.innerHTML = numero6;
      
  });
  
  decrease6.addEventListener("click", ()=>{
  
      if(numero6==0){}
      else{
          numero6--;
          contador6.innerHTML = numero6;
      }
  
  })

//---------7-----------------

let numero7=0;

  increase7.addEventListener("click", ()=>{
    numero7++;
    contador7.innerHTML = numero7;
      
  });
  
  decrease7.addEventListener("click", ()=>{
  
      if(numero7==0){}
      else{
          numero7--;
          contador7.innerHTML = numero7;
      }
  
  })

//--------8-----------------

let numero8=0;

  increase8.addEventListener("click", ()=>{
    numero8++;
    contador8.innerHTML = numero8;
      
  });
  
  decrease8.addEventListener("click", ()=>{
  
      if(numero8==0){}
      else{
          numero8--;
          contador8.innerHTML = numero8;
      }
  
  })

//---------9--------------

let numero9=0;
  increase9.addEventListener("click", ()=>{
    numero9++;
    contador9.innerHTML = numero9;
      
  });
  
  decrease9.addEventListener("click", ()=>{
  
      if(numero9==0){}
      else{
          numero9--;
          contador9.innerHTML = numero9;
      }
  
  })

