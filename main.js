function tocaSom (SeletorAudio) {
   const elemento = document.querySelector(SeletorAudio);

   if (elemento && elemento.localName === 'audio') {            
        elemento.play();
    } 
    else {
      //alert('Elemento não encontrdo');
      console.log('elemento não encontrado ou seletor inválido');
    } 

  }
 
  const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0;contador < listaDeTeclas.length; contador++) {
    
     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;//templte string
    
    tecla.onclick = function () {
     tocaSom(idAudio);   
    }

    tecla.onkeydown = function (evento) {

         if (evento.code === 'space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
          } 

        }   

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    } 

}



   
