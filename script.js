// Imagen
const img = document.createElement('img');
img.src = 'CruzAzu.png';
img.alt = 'Escudo de Cruz Azul';
img.style.width = '100px';
img.style.marginBottom = '20px';
img.style.borderRadius = '10px';
img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';


// Añadir al DOM
const multimediaSection = document.getElementById('multimedia');
multimediaSection.appendChild(img);
multimediaSection.appendChild(videoContainer);
