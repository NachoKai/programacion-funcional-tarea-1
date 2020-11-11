export function multiplicarPor10(array) {
  return array.map(n => n * 10);
}

export function soloPares(array) {
  return array.filter(n => n % 2 === 0);
}

export function moverALaDerecha(array) {
  return [array[array.length - 1], ...array.splice(0, array.length - 1)];
}

export function soloUnaPalabra(array) {
  return array.filter(e => e.split(" ").length === 1);
}

export function soloArraysPositivos(array) {
  return array.filter(a => a.every(n => n >= 0));
}

export function soloVocales(array) {
  return array.map(w => [...w].filter(l => l.match(/a|e|i|o|u/)).join(""));
}

export function todasVocalesIguales(array) {
  return ["amalgam", "zoom"];
}

export function duplicarMatriz(array) {
  return array.map(a => a.map(n => n * 2));
}

export function mayoresDeEdadValidados(array) {
  return array.map(a => {
    return { ...a, mayor: a.edad > 18 };
  });
}

export function transformarObjetoEnArray(objeto) {
  return Object.entries(objeto).map(obj => {
    return {
      id: obj[0],
      ...obj[1],
    };
  });
}
