//// Variables
const carrito = document.querySelector('#carrito')
const cursos = document.querySelector('#lista-cursos')
const listaCursos = document.querySelector('#lista-carrito tbody')

//// Listeners
loadEventListeners()
function loadEventListeners() {
  // Dispara cuando se presiona 'agregar a carrito'
  cursos.addEventListener('click', comprarCurso)
}

//// Funciones
// Agregar curso al carrito de compras
function comprarCurso(e) {
  e.preventDefault()
  // Delegation para agregar al carrito
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(curso)
  }
}

// lee los datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
  }
  insertarCarrito(infoCurso)
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
  const row = document.createElement('tr')
  const {imagen, titulo, precio, id} = curso;

  row.innerHTML = `
    <td>
      <img src="${imagen}" width="100"/>
    </td>
    <td>${titulo}</td
    <td>${precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>
  `;
  listaCursos.appendChild(row);
}