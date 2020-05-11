import {isSquare, smallerEq} from '../mathFunctions';

const factorizationFermats = n => {
  if (n === 1) return [{x: 1, y: 1}, ''];
  const begin = Date.now();
  for (let x = Math.ceil(Math.sqrt(n)); smallerEq(x, n); x += 1) {
    const ySquared = x ** 2 - n;
    if (isSquare(ySquared)) {
      const y = Math.sqrt(ySquared);
      const end = Date.now();
      return [
        {time: `${end - begin} msec`, x: Number(x - y), y: Number(x + y)},
        '',
      ];
    }
  }
};

export default factorizationFermats;
