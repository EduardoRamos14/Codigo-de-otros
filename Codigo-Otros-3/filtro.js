
document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
        { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
        { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
        { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
        { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
    ];

    const listaProductos = document.getElementById("lista-de-productos");
    const inputFiltro = document.querySelector('input');
    const botonDeFiltro = document.querySelector("button");

    // Función para crear y agregar un elemento li a la lista
    const agregarProductoALista = (producto) => {
        const li = document.createElement("li");
        li.classList.add("producto");

        const titulo = document.createElement("p");
        titulo.classList.add("titulo");
        titulo.textContent = producto.nombre;

        const imagen = document.createElement("img");
        imagen.setAttribute('src', producto.img);

        li.appendChild(titulo);
        li.appendChild(imagen);

        listaProductos.appendChild(li);// Agregado al ul en lugar de "li"
    };

    // Función para mostrar todos los productos en la lista
    const mostrarTodosLosProductos = () => {
        listaProductos.innerHTML = ""; // Limpiar la lista

        for (let i = 0; i < productos.length; i++) {
            agregarProductoALista(productos[i]);
        }
    };

    // Función de filtro
    const filtrado = (productos = [], texto) => {
        return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
    };

    // Manejador de eventos para el botón de filtro
    botonDeFiltro.addEventListener("click", function () {
        listaProductos.innerHTML = ""; // Limpiar la lista antes de agregar productos filtrados

        const texto = inputFiltro.value.toLowerCase(); // Convertir el texto a minúsculas
        const productosFiltrados = filtrado(productos, texto);

        for (let i = 0; i < productosFiltrados.length; i++) {
            agregarProductoALista(productosFiltrados[i]);
        }
    });

    // Mostrar todos los productos al cargar la página
    mostrarTodosLosProductos();
});


