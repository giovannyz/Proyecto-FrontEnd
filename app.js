const btnConfirmar = document.querySelector("#btn-confirmar")
const btnCancelar = document.querySelector("#btn-cancelar")


btnConfirmar.addEventListener("click",function(){
    
    Swal.fire({
        title:"Confirmo su orden",
        text: "Su pedido estara listo entre 10 a 15mts",
        icon: "success",

  })
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
          }
          )
        }
      })
})