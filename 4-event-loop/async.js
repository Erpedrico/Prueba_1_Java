// Función que simula una operación asíncrona usando setTimeout y una promesa
const operacion = (mensaje, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mensaje);
      resolve();
    }, tiempo);
  });
};

// Función asíncrona que ejecuta las operaciones en secuencia
async function ejecutarOperaciones() {
  console.log('Inicio del proceso');

  await operacion('Operación 1 completada', 1000);  // Espera que termine la operación 1
  await operacion('Operación 2 completada', 1000);  // Espera que termine la operación 2
  await operacion('Operación 3 completada', 1000);  // Espera que termine la operación 3
  await operacion('Operación 4 completada', 1000);  // Espera que termine la operación 4

  console.log('Fin del proceso');
}

// Llamamos a la función que ejecuta las operaciones
ejecutarOperaciones();