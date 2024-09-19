console.log('Inicio del proceso');

// Simulamos una serie de operaciones asíncronas usando callbacks
setTimeout(() => {
  console.log('Operación 1 completada');

  setTimeout(() => {
    console.log('Operación 2 completada');

    setTimeout(() => {
      console.log('Operación 3 completada');

      setTimeout(() => {
        console.log('Operación 4 completada');
        
        // Aquí podría haber otra llamada más anidada y así sucesivamente...
      }, 1000);  // Simulamos que la operación toma 1 segundo

    }, 1000);  // Simulamos que la operación toma 1 segundo

  }, 1000);  // Simulamos que la operación toma 1 segundo

}, 1000);  // Simulamos que la operación toma 1 segundo