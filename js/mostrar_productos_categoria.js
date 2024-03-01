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
        
            const categoriaTitulo = document.createElement('div');
            categoriaTitulo.classList.add('titulo__vertodo');
            categoriaTitulo.innerHTML = `
                <h1 class="categoria__titulo">${categoria.nombre_categoria}</h1>
                <a href="./todos-los-productos.html"><span class="categoria__vertodo">Ver todo <img src="./assets/img/arrow_back_black_24dp 1.svg" alt=""></span></a>
            `;
    
            const listaProductos = document.createElement('div');
            listaProductos.classList.add('productos__lista');

            const maxProductosMostrados = 5;
            let productosMostrados = 0;

            categoria.productos.forEach((producto, index) => {
                if (productosMostrados <= maxProductosMostrados) {
                    const itemProducto = document.createElement('ul');
                    itemProducto.classList.add('productos__lista');
                    itemProducto.innerHTML = `
                        <li class="prducto_item">
                            <a href=""><img class="" src="${producto.imagen}" alt=""></a>
                            <span class="nombre__producto">${producto.nombre}</span>
                            <span class="precio_producto">${producto.precio}</span>
                            <a href="#"><span class="ver__producto">Ver producto</span></a>
                        </li>
                    `;
                    listaProductos.appendChild(itemProducto);
                    productosMostrados++;
                }
                
            });
            seccion.appendChild(categoriaTitulo);
            seccion.appendChild(listaProductos);
            
            contenedorProductos.appendChild(seccion);
        });
    }
  
    cargarProductos();
});
  
