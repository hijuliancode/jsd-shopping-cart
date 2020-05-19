//// Variables
const carrito = document.querySelector('#carrito')
const cursos = document.querySelector('#lista-cursos')
const listaCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

//// Listeners
loadEventListeners()
function loadEventListeners() {
  // Dispara cuando se presiona 'agregar a carrito'
  cursos.addEventListener('click', comprarCurso)
  // Dispara cuando se preciona en remover del carrito
  carrito.addEventListener('click', eliminarCurso)
  // Al vaciar el cartit
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
}

//// Funciones
// Agregar curso al carrito de compras
function comprarCurso(e) {
  e.preventDefault()
  // Delegation para agregar al carrito
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement
    // Enviamos el curso seleccionado para tomar sus datos
    const datosCurso = leerDatosCurso(curso)
    insertarEnCarrito(datosCurso)
    guardarCursoLocalStorage(datosCurso)
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
  return infoCurso
  
}

// Muestra el curso seleccionado en el carrito
function insertarEnCarrito(curso) {
  const row = document.createElement('tr')
  const { imagen, titulo, precio, id } = curso

  row.innerHTML = `
    <td>
      <img src="${imagen}" width="100"/>
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>
  `;
  listaCursos.appendChild(row)
}

function eliminarCurso(e) {
  e.preventDefault()
  if (e.target.classList.contains('borrar-curso')) {
    let curso = e.target.parentElement.parentElement
    curso.remove()
  }
}
// Variar el carrito
function vaciarCarrito() {
  // console.time('listaCursos.innerHTML')
  // listaCursos.innerHTML = ''
  // // listaCursos.innerHTML: 0.599853515625ms // 6 Elementos
  // console.timeEnd('listaCursos.innerHTML')

  console.time('while')
  // 1.349365234375ms // 6 Elements
  while(listaCursos.firstChild) {
    listaCursos.removeChild(listaCursos.firstChild);
  }
  console.timeEnd('while')

  return false
}

// LocalStorage
function guardarCursoLocalStorage(curso) {
  // Toma el valor del arreglo con LS o vacio
  let cursos = obtenerCursosLocalStorage()

  // El curso seleccionado se agrega al carrito
  cursos.unshift(curso)

  // Se agrega el cartito al LS
  localStorage.setItem('cursos', JSON.stringify(cursos))
}

function obtenerCursosLocalStorage() {
  let cursosLS = localStorage.getItem('cursos');
  console.log(cursosLS);

  (cursosLS === null)
    ? cursosLS = []
    : cursosLS = JSON.parse(cursosLS)

  return cursosLS
}