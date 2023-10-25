let carrito = [];



function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('carrito');
    lista.innerHTML = '';
    let total = 0;
    
    for(let item of carrito) {
        total += item.precio;
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    }
    
    const liTotal = document.createElement('li');
    liTotal.textContent = `Total: $${total}`;
    lista.appendChild(liTotal);
}
