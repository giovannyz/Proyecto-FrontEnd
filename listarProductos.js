const productos = document.getElementById("productos")
const api_promo='https://proyectobackend-gm2x.onrender.com/productos?page=1&per_page=9&category_id=1'

function agregarProductos() {
    fetch(api_promo)
        .then((response) => response.json())
        .then((json) => {
            const results = json.results
            let data = ''

            results.forEach(element => {
                data = data + `<div class="col-xl-4 col-md-6">
            <div data-aos="fade-up" data-aos-duration="9000" class="card m-3 bg-secondary text-light">
              <img src="./resource/hamburguesa.png" alt="" class="card-img-top" style="height: 180px" />
              <div class="card-body">
                <h5 class="card-title text-dark">${element.name}</h5>
                <div class="card-list">
                  <ul>
                    <li>Queso</li>
                    <li>Tomate</li>
                    <li>Lechuga</li>
                    <li>Cebolla</li>
                  </ul>
                </div>
                <div class="card-description d-flex justify-content-center">${element.description}
                </div>
            
                <div class="card-price text">${element.precio}</div>
            
            
              </div>
            </div>
            </div>`
            });
            productos.innerHTML = data
        })
}

function crearPedido() {
    fetch('http://127.0.0.1:5000/shoppingCart', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3ODQwODkxMywianRpIjoiMGE4ZGJhZTYtY2JmMi00ODdiLWE1MzgtZDhhNTYzOGIxNzE5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjc4NDA4OTEzLCJleHAiOjE2Nzg0MTI1MTN9.hXmm1ZkSR1BbBhNOqixceOSB42vWPZXYsCe8IXIcGWA',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: 0,
            quantity: 1
        })
    })
}

agregarProductos()

