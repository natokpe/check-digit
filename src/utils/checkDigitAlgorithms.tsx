// Luhn Algorithm Implementation
export const luhnCheckDigit = (number: string): number => {
  const digits = number.split('').map(Number).reverse();
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  
  return (10 - (sum % 10)) % 10;
};

export const luhnVerify = (number: string): boolean => {
  const digits = number.toString().slice(0, -1);
  const checkChar = Number(number.toString().slice(-1));
  
  return checkChar === luhnCheckDigit(digits);
};

// Damm Algorithm Implementation
const dammTable = [
  [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
  [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
  [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
  [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
  [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
  [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
  [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
  [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
  [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
  [2, 5, 8, 1, 4, 3, 6, 7, 9, 0]
];

export const dammCheckDigit = (number: string): number => {
  let interim = 0;
  for (const digit of number) {
    interim = dammTable[interim][parseInt(digit)];
  }
  return interim;
};

export const dammVerify = (number: string): boolean => {
  let interim = 0;
  for (const digit of number) {
    interim = dammTable[interim][parseInt(digit)];
  }
  return interim === 0;
};

// Verhoeff Algorithm Implementation
const multiplicationTable = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

const permutationTable = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

const inverseTable = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

export const verhoeffCheckDigit = (number: string): number => {
  let check = 0;
  const digits = number.split('').map(Number).reverse();
  
  for (let i = 0; i < digits.length; i++) {
    check = multiplicationTable[check][permutationTable[(i + 1) % 8][digits[i]]];
  }
  
  return inverseTable[check];
};

export const verhoeffVerify = (number: string): boolean => {
  let check = 0;
  const digits = number.split('').map(Number).reverse();
  
  for (let i = 0; i < digits.length; i++) {
    check = multiplicationTable[check][permutationTable[i % 8][digits[i]]];
  }
  
  return check === 0;
};

// Main interface functions
export const computeCheckDigit = (number: string, algorithm: 'luhn' | 'damm' | 'verhoeff'): number => {
  switch (algorithm) {
    case 'luhn':
      return luhnCheckDigit(number);
    case 'damm':
      return dammCheckDigit(number);
    case 'verhoeff':
      return verhoeffCheckDigit(number);
    default:
      throw new Error('Unknown algorithm');
  }
};

export const verifyCheckDigit = (number: string, algorithm: 'luhn' | 'damm' | 'verhoeff'): boolean => {
  switch (algorithm) {
    case 'luhn':
      return luhnVerify(number);
    case 'damm':
      return dammVerify(number);
    case 'verhoeff':
      return verhoeffVerify(number);
    default:
      throw new Error('Unknown algorithm');
  }
};
