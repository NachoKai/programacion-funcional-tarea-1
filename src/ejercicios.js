export function multiplicarPor10(array) {
  return array.map(num => num * 10);
}

export function soloPares(array) {
  return array.filter(num => num % 2 === 0);
}

export function moverALaDerecha(array) {
  const lastItem = array.length - 1;
  return [array[lastItem], ...array.slice(0, lastItem)];
}

export function soloUnaPalabra(array) {
  return array.filter(word => word.split(" ").length === 1);
}

export function soloArraysPositivos(array) {
  return array.filter(num => num.every(n => n >= 0));
}

export function soloVocales(array) {
  const vocals = /a|e|i|o|u/;
  return array.map(word => [...word].filter(letter => letter.match(vocals)).join(""));
}

export function todasVocalesIguales(array) {
  const vocals = /a|e|i|o|u/;
  return array.filter(
    word =>
      [...word]
        .filter(letter => letter.match(vocals))
        .filter((letter, pos, self) => {
          return self.indexOf(letter) === pos;
        })
        .join("").length === 1
  );
}

export function duplicarMatriz(array) {
  return array.map(arr => arr.map(num => num * 2));
}

export function mayoresDeEdadValidados(array) {
  return array.map(arr => {
    return { ...arr, mayor: arr.edad > 18 };
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
