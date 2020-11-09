export function multiplicarPor10(array) {
  return array.map(n => n * 10);
}

export function soloPares(array) {
  return array.filter(n => n % 2 === 0);
}

export function moverALaDerecha(array) {}

export function soloUnaPalabra(array) {
  return array.filter(e => e.split(" ").length === 1);
}

export function soloArraysPositivos(array) {
  return array.filter(a => a.every(n => n >= 0));
}

export function soloVocales(array) {
  return array.map(w => [...w].filter(l => l.match(/a|e|i|o|u/)).join(""));
}

export function todasVocalesIguales(array) {}

export function duplicarMatriz(array) {
  return array.map(a => a.map(n => n * 2));
}

export function mayoresDeEdadValidados(array) {}

export function transformarObjetoEnArray(objeto) {}
