const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
});

test('Should be showing a message: Hello Filipe!', () => {
    const result = generateGreeting('Filipe');
    expect(result).toBe('Hello Filipe!')
});

test('Should be showing a message: Hello Anonymous!', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
});