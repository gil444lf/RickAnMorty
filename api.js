// Consumo de la API y apilado de personajes
const URL_API = "https://rickandmortyapi.com/api/character";

async function cargarPersonajesEnPila() {
  const pila = new Pila();

  try {
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!datos.results || !Array.isArray(datos.results)) {
      throw new Error("La API devolvió una respuesta inesperada");
    }

    // Se recorre en el mismo orden en que entrega la API (Rick primero)
    for (const p of datos.results) {
      const personaje = new Personaje(p.name, p.gender, p.species, p.status);
    
     
      pila.push(personaje);
      
    }
  } catch (error) {
    console.error("Fallo al consumir la API:", error);
  }

  return pila;
}

// Vacía la pila con pop e imprime en consola (orden inverso al de la API)
function vaciarPila(pila) {
  while (!pila.isEmpty()) {
    const personaje = pila.pop();
    console.table(personaje);
  }
}