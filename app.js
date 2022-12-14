const btnConfirmar = document.querySelector("#btn-confirmar");
const btnCancelar = document.querySelector("#btn-cancelar");
const nombre = document.getElementsByName("nombre");
const apellido = document.getElementsByName("apellido");
const direccion = document.getElementsByName("direccion");
const telefono = document.getElementsByName("telefono")

btnConfirmar.addEventListener("click",function(){
    
    Swal.fire({
        title:"Confirmo su orden",
        text: "Su pedido estara listo entre 10 a 15mts",
        icon: "success",

  });
  
})

btnCancelar.addEventListener("click",function(){
    
    Swal.fire({
        title: 'Seguro que desea cancelar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'No, Regresar',
        confirmButtonText: 'Si, Cancelar Orden'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:"Pedido Cancelado",
            icon:"success"
          },
          localStorage.clear()
          )
        }
      })
})


btnConfirmar.onclick = function (event){
 
 
  const inputs = document.querySelectorAll('input')
  // inserta una claor o almacenar al localstorage 
 
  inputs.forEach((input)=>{
      
     console.log(inputs)
     localStorage.setItem(input.name , input.value)
  })
 login() 
 
 }
 function login(){
  const nombre2 =localStorage.getItem('nombre');
  const apellido2 =localStorage.getItem('apellido');
  const direccion2 =localStorage.getItem('direccion');
  const telefono2 =localStorage.getItem('telefono');
  
  
  console.log("Nombre: "+nombre2, "Apellido: "+apellido2,"direccion: "+ direccion2,"telefono: "+telefono2);
 }
