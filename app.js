// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar amigos al array y actualizar la lista
function agregarAmigo() {
    // Capturamos el valor del campo de texto
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de texto
    input.value = '';

    // Actualizamos la lista en pantalla
    actualizarLista();
}

// Función que actualiza el listado en el HTML
function actualizarLista() {
    // Obtenemos el elemento UL donde mostraremos los amigos
    const lista = document.getElementById('listaAmigos');

    // Limpiamos el contenido previo de la lista
    lista.innerHTML = '';

    // Iteramos sobre el array de amigos para crear los elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verificamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Generamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en el elemento resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
