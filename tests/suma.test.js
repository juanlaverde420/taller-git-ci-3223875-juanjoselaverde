const sumar = require("../src/app");
 
test('la función sumar debe devolver la suma de dos números', () => {
  expect(sumar(2, 3)).toBe(5);
  console.log("El resultado de sumar(2, 3) es:", sumar(2, 3));
});