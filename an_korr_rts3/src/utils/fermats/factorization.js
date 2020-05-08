import {isSquare, smallerEq} from '../mathFunctions';

const factorizationFermats = n => {
  if (n === 1) return [{x: 1, y: 1}, ''];
  for (let x = Math.ceil(Math.sqrt(n)); smallerEq(x, n); x += 1) {
    const ySquared = x ** 2 - n;
    if (isSquare(ySquared)) {
      const y = Math.sqrt(ySquared);
      return [{x: Number(x - y), y: Number(x + y)}, ''];
    }
  }
};

export default factorizationFermats;
