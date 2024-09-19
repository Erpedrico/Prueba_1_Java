const operacion = (mensaje, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mensaje);
      resolve();
    }, tiempo);
  });
};

operacion('Operación 1 completada', 1000)
  .then(() => operacion('Operación 2 completada', 1000))
  .then(() => operacion('Operación 3 completada', 1000))
  .then(() => operacion('Operación 4 completada', 1000))
  .catch(error => console.error('Error:', error));
