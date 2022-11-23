const btnConfirmar = document.querySelector("#btn-confirmar")
const btnCancelar = document.querySelector("#btn-cancelar")


/*BOTONES PROMOCION*/

const btnPromocion1=document.querySelector("#comprar1")
const btnPromocion2=document.querySelector("#comprar2")
const btnPromocion3=document.querySelector("#comprar3")
const btnPromocion4=document.querySelector("#comprar4")
const btnPromocion5=document.querySelector("#comprar5")
const btnPromocion6=document.querySelector("#comprar6")

/* boton */

const hamburguesa=[{
  name:"papas",
  precio:15,

},{
  name:"chorizo",
  precio:20
}
]
console.log(hamburguesa[0])

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