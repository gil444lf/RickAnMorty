// Punto de entrada
async function main() {
  const pila = await cargarPersonajesEnPila();

  console.log(`Personajes apilados: ${pila.tamano}`);
  console.log("Cima de la pila (peek):", pila.peek());
  console.log("--- Desapilando ---");

  vaciarPila(pila);
}

main();