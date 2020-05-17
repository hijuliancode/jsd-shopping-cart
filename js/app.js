//// Variables
const carrito = document.querySelector('#carrito')
const cursos = document.querySelector('#lista-cursos')

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
  console.log(curso)
}