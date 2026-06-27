function allowDrop(e) { e.preventDefault(); }
        
function drag(e) { e.dataTransfer.setData('text', e.target.id); }

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const el = document.getElementById(id);
    e.currentTarget.appendChild(el);
}

function finalizarRegalo() {
    const contenido = document.getElementById('caja').children;
    if (contenido.length > 0) {
        let items = Array.from(contenido).map(item => item.innerText);
        alert("¡Regalo listo! Contenido: " + items.join(", "));
    } else {
        alert("¡La caja está vacía! Añade algo primero.");
    }
}

function reiniciarPedido() {
    const caja = document.getElementById('caja');
    const catalogo = document.getElementById('catalogo');
    while (caja.children.length > 0) {
        catalogo.appendChild(caja.children[0]);
    }
}