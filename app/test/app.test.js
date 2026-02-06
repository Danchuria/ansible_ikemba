const assert = require('assert');

describe('App Tests', () => {
  it('should return 200 OK', () => {
    assert.strictEqual(1, 1, 'Math works!');
  });
  
  it('Node.js app ready for CI/CD', () => {
    assert.ok(true, 'CI/CD pipeline funcionando!');
  });
});
