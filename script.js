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
function agregarAlCarrito(nombre, precio) {
    const itemIndex = carrito.findIndex(item => item.nombre === nombre);

    if (itemIndex > -1) {
        carrito[itemIndex].cantidad += 1;
    } else {
        carrito.push({nombre, precio, cantidad: 1});
    }

    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

function mostrarCarrito() {
    const storedCart = sessionStorage.getItem("carrito");

    if (storedCart) {
        const carrito = JSON.parse(storedCart);
        let totalGeneral = 0;
        const lista = document.getElementById('carrito');
        lista.innerHTML = '';

        for (let item of carrito) {
            const totalItem = item.precio * item.cantidad;
            totalGeneral += totalItem;

            const li = document.createElement('li');
            li.textContent = `${item.nombre} (x${item.cantidad}) - $${item.precio} c/u = $${totalItem}`;
            lista.appendChild(li);
        }

        const liTotal = document.createElement('li');
        liTotal.textContent = `Total: $${totalGeneral}`;
        lista.appendChild(liTotal);

        console.log(carrito);
    } else {
        console.log("Cart is empty.");
    }
}



