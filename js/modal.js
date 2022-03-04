function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
      console.log(e.target.id);
      if (e.target.id==modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
      }
    });
  } 

  const botaomain = document.querySelector('.botao');
  botaomain.addEventListener('click', ()=> 
    iniciaModal('modal-ingresso'));

  

  