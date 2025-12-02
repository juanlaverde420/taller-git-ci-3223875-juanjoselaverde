const sumar = require('./app.js');

test('la función sumar debe devolver la suma de dos números', () => {
    expect(sumar(2, 3)).toBe(5);
});