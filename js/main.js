$(document).ready(function () {
  let tabla;
  function cargarDatos(tipo) {
    const url = `https://jsonplaceholder.typicode.com/${tipo}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (tabla) tabla.destroy();
        const columnas = Object.keys(data[0]).map(key => ({
          title: key,
          data: key
        }));
        tabla = $('#tabla').DataTable({
          data: data,
          columns: columnas
        });
      })
      .catch(error => console.error('Error:', error));
  }
  $('#btnCargar').click(function () {
    const tipo = $('#selector').val();
    cargarDatos(tipo);
  });
});