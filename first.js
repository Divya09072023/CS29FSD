console.log ("First Java Script");
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
console.log (value);
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value1 = toCelsius;
console.log (value1);
// In the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

//Accessing a function without () returns the function and not the function result:

