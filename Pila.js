// Estructura de datos: Pila (LIFO) implementada desde cero con nodos enlazados
class Nodo {
  constructor(valor, siguiente = null) {
    this.valor = valor;
    this.siguiente = siguiente;
  }
}

class Pila {
  constructor() {
    this.cima = null;
    this.tamano = 0;
  }

  // Apila un elemento en la cima
  push(valor) {
    this.cima = new Nodo(valor, this.cima);
    this.tamano++;
  }

  // Desapila y devuelve el elemento de la cima
  pop() {
    if (this.isEmpty()) return null;
    const valor = this.cima.valor;
    this.cima = this.cima.siguiente;
    this.tamano--;
    return valor;
  }

  // Devuelve el elemento de la cima sin sacarlo
  peek() {
    return this.isEmpty() ? null : this.cima.valor;
  }

  // Verifica si la pila está vacía
  isEmpty() {
    return this.cima === null;
  }
}





