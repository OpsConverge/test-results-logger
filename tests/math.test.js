// describe('Math tests', () => {
//   it('should pass', () => {
//     expect(1 + 1).toBe(2);
//   });

//   it('should fail', () => {
//     expect(2 + 2).toBe(11); // intentional fail
//   });
// });

// test('randomly flaky test', () => {
//   const pass = Math.random() > 0.5;
//   expect(pass).toBe(true);
// });

test('intentionally flaky test', () => {
  const run = process.env.TEST_RUN || Math.floor(Math.random() * 100);
  const isFlaky = run % 2 === 0;
  expect(isFlaky).toBe(true);
});

