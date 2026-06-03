// step 4
class InvalidInputError extends Error {
  constructor(input) {
    super(`"${input}" is not a valid number`);
    this.name = 'InvalidInputError';
    this.input = input;
  }
}

// step 3
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');

  try {
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operatorEl = document.querySelector('#operator');

    if (!operatorEl) {
      throw new Error('No element with id "operator" exists in the DOM');
    }
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new InvalidInputError(isNaN(firstNum) ? firstNum : secondNum);
    }

    output.innerHTML = eval(`${firstNum} ${operatorEl.value} ${secondNum}`);
  } catch (e) {
    if (e instanceof InvalidInputError) {
      output.innerHTML = `Invalid input: "${e.input}" is not a number`;
      console.error('Custom error caught:', e);
    } else {
      output.innerHTML = `Error: ${e.message}`;
      console.error('Standard error caught:', e);
    }
  } finally {
    console.log('Form submission attempted');
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));


errorBtns[0].addEventListener('click', () => {
  console.log('console log button');
});

errorBtns[1].addEventListener('click', () => {
  console.error('console error button');
});

errorBtns[2].addEventListener('click', () => {
  console.count('console Button count');
});

errorBtns[3].addEventListener('click', () => {
  console.warn('console warning button');
});
errorBtns[4].addEventListener('click', () => {
  const x = 2;
  const reason = 'x does not equal 3';
  console.assert(x === 3, { x, reason });
});
errorBtns[5].addEventListener('click', () => {
  console.clear();
});
errorBtns[6].addEventListener('click', () => {
  console.dir(errorBtns[6]);
});
errorBtns[7].addEventListener('click', () => {
  console.dirxml(errorBtns[7]);
});
errorBtns[8].addEventListener('click', () => {
  console.group('group started');
});
errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});
errorBtns[10].addEventListener('click', () => {
  const consoleTable = [
    { 1: 'this', 2: 'is' },
    { 1: 'a', 2: 'console', 3: 'table' },
  ];
  console.table(consoleTable);
});
errorBtns[11].addEventListener('click', () => {
  console.time('timer button');
});
errorBtns[12].addEventListener('click', () => {
  console.timeEnd('timer button');
});
errorBtns[13].addEventListener('click', () => {
  const button = () => trace();
  const trace = () => consolee();
  const consolee = () => console.trace();
  button();
});


// step 5
errorBtns[14].addEventListener('click', () => {
  setTimeout(() => {
    throw new Error('global error occurred');
  }, 0);
});
