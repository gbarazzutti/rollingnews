const campoRequerido = (valor) => {
  if (valor.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

const validarFecha = (valor) => {
  // validar con expresion regular
  let patron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (patron.test(valor)) {
    return true;
  } else {
    return false;
  }
};

const validarURL = (valor) => {
  // validar URL con una expresión regular

  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (valor.trim().length != "" && patron.test(valor)) {
    return true;
  } else {
    return false;
  }
};

const validarRichText = (value) => {
  if (value != "") {
    return true;
  } else {
    return false;
  }
};

const validarEmail = (value) => {
    
  let patron =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (value.trim() != "" && patron.test(value.trim())) {
    return true;
  } else {
    return false;
  }
}

export { campoRequerido, validarFecha, validarRichText, validarURL, validarEmail };
