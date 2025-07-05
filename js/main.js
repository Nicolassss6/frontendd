$(document).ready(function () {
  let tabla;

  function cargarDatos(tipo) {
    const url = `https://jsonplaceholder.typicode.com/${tipo}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data || data.length === 0) {
          alert("No se encontraron datos.");
          return;
        }

        if ($.fn.DataTable.isDataTable('#tabla')) {
          tabla.destroy();
          $('#tabla').empty();
        }

        const columnas = Object.keys(data[0]).map(key => ({
          title: key,
          data: key
        }));

        tabla = $('#tabla').DataTable({
          data: data,
          columns: columnas
        });
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
        alert("Error al cargar datos desde la API.");
      });
  }

  $('#btnCargar').click(function () {
    const tipo = $('#selector').val();
    cargarDatos(tipo);
  });
});
