console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// default export
export default subtract;

// named exports
// export { square, add, subtract as default };