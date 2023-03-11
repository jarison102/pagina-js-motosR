const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelectorAll('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    aparecerImagen(imagen.getAttribute('src'));
  });
});

contenedorLight.addEventListener('click', (e) => {
  if (!e.target.classList.contains('agregar-imagen')) {
    contenedorLight.classList.remove('show');
    imagenesLight.forEach(imagen => {
      imagen.classList.remove('showImage');
    });
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.forEach((imagenLight, index) => {
    imagenLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenLight.classList.add('showImage');
  });
};


  
