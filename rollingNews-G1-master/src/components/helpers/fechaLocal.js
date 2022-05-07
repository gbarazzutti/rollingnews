const obtenerFecha = ()=> {
    let time = new Date();
  
    let diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    // fecha objetivo
    let fecha = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
      meses[time.getMonth()]
    } del ${time.getFullYear()}`;

    return fecha;
  }

  export default obtenerFecha;