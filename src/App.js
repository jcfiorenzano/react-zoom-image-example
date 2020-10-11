import React from 'react';
import ReactImageZoom from 'react-image-zoom';

function App() {
  const props = {
    width: 400,
    height: 250,
    //zoomWidth: 500,  esta propiedad no es necesaria si la propiedad scale es definida
    zoomLensStyle:'opacity: 0.4;background-color: gray;',
    zoomPosition:'bottom',
    scale:1, // esto refiere a que tan grande va a hacer el zoom con la imagen original, 1 el mismo tamanno, 2 = el doble de grande
    offset: { // esta propiedad ayuda a posicionar correctamente el zoom
      vertical: 10, 
      horizontal: -370
    },
    img: require('./1.jpg')}
  return (
      <ReactImageZoom {...props} />
  );
}

export default App;
