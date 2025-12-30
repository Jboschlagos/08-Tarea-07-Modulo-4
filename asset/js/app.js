// --------------------------------
// 1. Promesa con setTimeout
// Simula una consulta a una base de datos
// --------------------------------

console.log("Creando promesa");

let promesaPersona = new Promise((resolve, reject) => {
  console.log("Registrando promesa");
  console.log("Esperando respuesta");

  setTimeout(() => {
    resolve({
      nombre: "El señor",
      apellido: "barriga",
      edad: 55,
      lugar: "En la vecindad del chavo",
    });
  }, 3000);
});

promesaPersona
  .then((persona) => {
    console.log("Respuesta:", persona);
  })
  .catch((error) => {
    console.error(error.message);
  });

  // --------------------------------
  // 2. Promesa que depende de los segundos actuales
  // --------------------------------

let promesaSegundos = new Promise((resolve, reject) => {
  let fecha = new Date();
  let segundos = fecha.getSeconds();

  if (segundos > 30) {
    if (segundos % 2 === 0) {
      resolve(fecha.toLocaleTimeString());
    } else {
      reject(new Error("Segundos mayores a 30 e impar"));
    }
  } else {
    if (segundos % 2 !== 0) {
      resolve(fecha.toLocaleTimeString());
    } else {
      reject(new Error("Segundos menores o iguales a 30 y par"));
    }
  }
});

promesaSegundos
  .then((hora) => {
    console.log("Hora actual:", hora);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// --------------------------------
// 3. Promesa con proceso pesado
// --------------------------------

console.log("Inicio proceso pesado");

let promesaPesada = new Promise((resolve, reject) => {
  console.log("Proceso pesado en ejecución");

  // Proceso intencionalmente pesado para evidenciar
  // el bloqueo del hilo principal de JavaScript
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }

  resolve("Proceso pesado finalizado");
});

promesaPesada.then((mensaje) => {
  console.log(mensaje);
});

console.log("Fin del código principal");
