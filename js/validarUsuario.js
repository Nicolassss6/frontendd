$(document).ready(function () {
  function limpiarErrores() {
    $('.error-message').text('');
    $('input, select').removeClass('error');
  }
  function validarFormulario() {
    let valido = true;
    limpiarErrores();
    const nombre = $('#nombre').val().trim();
    const usuario = $('#usuario').val().trim();
    const fecha = $('#fecha').val().trim();
    const email = $('#email').val().trim();
    if (nombre === '') {
      $('#error-nombre').text('El nombre es obligatorio.');
      $('#nombre').addClass('error');
      valido = false;
    }
    if (usuario === '') {
      $('#error-usuario').text('El nombre de usuario es obligatorio.');
      $('#usuario').addClass('error');
      valido = false;
    }
    const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!fechaRegex.test(fecha)) {
      $('#error-fecha').text('La fecha debe tener el formato dd/MM/yyyy.');
      $('#fecha').addClass('error');
      valido = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#error-email').text('Ingrese un email válido.');
      $('#email').addClass('error');
      valido = false;
    }
    return valido;
  }
  $('#btnGuardar').click(function () {
    if (validarFormulario()) {
      alert('Usuario guardado correctamente.');
      $('#formUsuario')[0].reset();
    }
  });
  $('#btnCancelar').click(function () {
    $('#formUsuario')[0].reset();
    limpiarErrores();
  });
});