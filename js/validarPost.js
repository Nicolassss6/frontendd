$(document).ready(function () {
  function limpiarErroresPost() {
    $('.error-message').text('');
    $('input, textarea').removeClass('error');
  }
  function validarPost() {
    let valido = true;
    limpiarErroresPost();
    const titulo = $('#titulo').val().trim();
    const cuerpo = $('#cuerpo').val().trim();
    const userId = $('#userId').val().trim();
    if (titulo === '') {
      $('#error-titulo').text('El título es obligatorio.');
      $('#titulo').addClass('error');
      valido = false;
    }
    if (cuerpo === '') {
      $('#error-cuerpo').text('El cuerpo es obligatorio.');
      $('#cuerpo').addClass('error');
      valido = false;
    }
    if (userId === '' || isNaN(userId) || parseInt(userId) <= 0) {
      $('#error-userId').text('Debe ingresar un ID de usuario válido.');
      $('#userId').addClass('error');
      valido = false;
    }
    return valido;
  }
  $('#btnGuardarPost').click(function () {
    if (validarPost()) {
      alert('Publicación guardada correctamente.');
      $('#formPost')[0].reset();
    }
  });
  $('#btnCancelarPost').click(function () {
    $('#formPost')[0].reset();
    limpiarErroresPost();
  });
});