import {numberize, greaterEq} from '../mathFunctions';

const calcPerceptron = data => {
  const {x1, x2, y1, y2, threshold, sigma, iters, time} = numberize(data);
  let w1 = 0,
    w2 = 0,
    p1 = 0,
    p2 = 0,
    count = 0,
    delta;
  const begin = Date.now();

  while (greaterEq(p1, threshold) || greaterEq(threshold, p2)) {
    if (greaterEq(p1, threshold)) {
      delta = threshold - p1;
      w1 += delta * x1 * sigma;
      w2 += delta * y1 * sigma;
    } else if (greaterEq(threshold, p2)) {
      delta = threshold - p2;
      w1 += delta * x2 * sigma;
      w2 += delta * y2 * sigma;
    }
    p1 = x1 * w1 + y1 * w2;
    p2 = x2 * w1 + y2 * w2;
    count++;
    if (greaterEq(count, iters)) {
      return [null, 'Досягнуто максимальної кількості ітерацій'];
    }
    const end = Date.now();
    if (greaterEq(end - begin, time * 1000)) {
      return [null, 'Досягнуто максимального часу'];
    }
  }
  const end = Date.now();

  return [{w1, w2, time: `${end - begin} sec`}, ''];
};

export default calcPerceptron;
