const fs = require('fs');


try {
  const origen = './build';
  const destino = './docs';
  
  const archivos = fs.readdirSync(origen);
  
  archivos.forEach(archivo => {
    fs.copyFileSync(`${origen}/${archivo}`, `${destino}/${archivo}`);
  });
  // ... (your copying logic, similar to the previous examples)
} catch (error) {
  console.error("Error al copiar la carpeta:", error);
}
