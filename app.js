let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
      pagina += 1;
    cargarPeliculas();
    }
    
})
btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
      pagina -= 1;
    cargarPeliculas();
    }
    
})


const cargarPeliculas = async() => {

    try {
const respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=7a8b7040569492b4cadf7708867ad883&page=${pagina}`);

console.log(respuesta);


if(respuesta.status === 200){
  const datos =   await respuesta.json();
  let peliculas ='';
    datos.results.forEach(pelicula => {
        peliculas += `
        <div class="pelicula">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
              <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
    });

    document.getElementById('contenedor').innerHTML =  peliculas;
  } else if(respuesta.status === 401){
    console.log('ingreso de llave incorrecto')

} else if(respuesta.status === 401){
    console.log('la pelicula que busca no existe')
} else {
    console.log('hubo un error')
}




    } catch(error){
        console.log(error);
    }

}

cargarPeliculas(); 