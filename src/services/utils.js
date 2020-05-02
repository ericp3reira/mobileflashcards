// Courtesy of https://bost.ocks.org/mike/shuffle/
export const shuffleArray = array => {
  let length = array.length;
  let current;
  let temporary;

  while (length) {
    current = Math.floor(Math.random() * length--);

    temporary = array[length];
    array[length] = array[current];
    array[current] = temporary;
  }

  return array;
};
