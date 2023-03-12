const api_products='https://proyectobackend-gm2x.onrender.com/productos?page=1&per_page=9'
const carta=document.getElementById('carta-data')
let datos = ''

fetch(api_products)
    .then(response=>response.json())
    .then(data=>{
        let results = data.results

        results.forEach(element=>{
            datos = datos+`<div class="col-xl-4 col-md-6 mb-4 mt-4">
            <div class="card">
              <img src="./resource/burger6.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">precio: $/ ${element.precio}</li>
                <li class="list-group-item">stock: ${element.stock}</li>
              </ul>
              
            </div>    
          </div>`
        });
        carta.innerHTML = datos
    })


