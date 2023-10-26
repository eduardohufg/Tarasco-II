let carrito = [];



function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    console.log("Si")

    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }

}

/*function mostrarCarrito() {
    document.getElementById("carrito").innerHTML = sessionStorage.carrito;
    const lista = document.getElementById('carrito').innerHTML;
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

    const lista = sessionStorage.carrito;
    console.log(lista[0][0])

}*/
function mostrarCarrito() {
    const storedCart = sessionStorage.getItem("carrito");

    if (storedCart) {
        const carrito = JSON.parse(storedCart);
        let total = 0;
        const lista = document.getElementById('carrito');
        lista.innerHTML = ''; // Clear the existing content

        for (let item of carrito) {
            total += item.precio;
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            lista.appendChild(li);
        }

        // Display the total price
        const liTotal = document.createElement('li');
        liTotal.textContent = `Total: $${total}`;
        lista.appendChild(liTotal);

        console.log(carrito);
    } else {
        console.log("Cart is empty.");
    }
}


