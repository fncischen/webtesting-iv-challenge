const request = require('supertest'); // calling it "request" is a common practice

const server = require('./server.js'); // this is our first red, file doesn't exist yet

describe('server.js', () => {
    // http calls made with supertest return promises, we can use async/await if desired
    describe('GET', () => {
      it('should respond with 200 OK', async () => {
    
  
      it('should work', async () => {

      });
  
      it('should return JSON', async () => {

      });
    });
  });
});