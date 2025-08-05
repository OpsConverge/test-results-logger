// describe('Math tests', () => {
//   it('should pass', () => {
//     expect(1 + 1).toBe(2);
//   });

//   it('should fail', () => {
//     expect(2 + 2).toBe(11); // intentional fail
//   });
// });

test('randomly flaky test', () => {
  const pass = Math.random() > 0.5;
  expect(pass).toBe(true);
});

