// hashmap.test.js
var assert = require('assert')
const Hashmap = require('../hashMap'); 

try {
    var dict = new Hashmap();
    dict.set('james', '123-456-7890');
    dict.set('jess', '213-559-6840');
    assert.equal(dict.get('james'), '123-456-7890');
  
    console.log(
      'PASSED: ' +
        "`var dict = new Hashmap(); dict.set('jess', '213-559-6840'); dict.set('james', '123-456-7890'); dict.get('james')` should return `'123-456-7890'`"
    );
  } catch (err) {
    console.log(err);
  }
  
  try {
    assert.equal(dict.get('jake'), undefined);
  
    console.log(
      'PASSED: ' +
        "`var dict = new Hashmap(); dict.set('jess', '213-559-6840'); dict.set('james', '123-456-7890'); dict.get('jake')` should return `undefined`"
    );
  } catch (err) {
    console.log(err);
  }
  
  try {
    assertIsFunction(dict.set, 'Hashmap class has a `set` method');
  
    console.log('PASSED: ' + 'Hashmap class has a `set` method');
  } catch (err) {
    console.log(err);
  }
  
  try {
    assertIsFunction(dict.get, 'Hashmap class has a `get` method');
  
    console.log('PASSED: ' + 'Hashmap class has a `get` methods');
  } catch (err) {
    console.log(err);
  }
  
  function assertIsFunction(f) {
    return typeof f === 'function';
  }