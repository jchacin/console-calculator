import { Calculator } from '../calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
