// solved 1 : Create Hello World Function 

const createHelloWorld = function() {
    
    return function(...args) {
      return "hello world"
    }
};

createHelloWorld()