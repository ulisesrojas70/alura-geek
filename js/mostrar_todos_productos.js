document.addEventListener('DOMContentLoaded', function () {
    const url = './db.json';
  
    // Función para cargar el archivo JSON y mostrar los productos
    function cargarProductos() {
      fetch(url)
        .then(response => response.json())
        .then(data => mostrarCategorias(data.categorias))
        .catch(error => console.error('Error al cargar el JSON:', error));
    }
  
    // Función para mostrar las categorías y sus productos en el HTML
    function mostrarCategorias(categorias) {
        const contenedorProductos = document.getElementById('productos');
  
        categorias.forEach(categoria => {

            const seccion = document.createElement('section');
            seccion.classList.add('productos');
            seccion.classList.add('container');
    
            const listaProductos = document.createElement('div');
            listaProductos.classList.add('productos__lista');

            categoria.productos.forEach(producto => {
                const itemProducto = document.createElement('ul');
                itemProducto.classList.add('productos__lista');
                itemProducto.innerHTML = `
                    <li class="prducto_item">
                        <div class="edit__delete">
                            <img src="assets/img/edit_black_24dp.svg" alt="">
                            <img src="assets/img/delete_black_24dp.svg" alt="">
                        </div>
                        <a href=""><img src="${producto.imagen}" alt=""></a>
                        <span class="nombre__producto">${producto.nombre}</span>
                        <span class="precio_producto">${producto.precio}</span>
                        <a href="#"><span class="ver__producto">Ver producto</span></a>
                    </li>
                `;
                listaProductos.appendChild(itemProducto);
            });
            seccion.appendChild(listaProductos);
            
            contenedorProductos.appendChild(seccion);
        });
    }
  
    cargarProductos();
});
  
