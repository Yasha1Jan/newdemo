const Homepage = require('../pages/page1.po.js');

describe('Protractor Demo App', function () {

  it('should add one and two', async function () {
    Homepage.getURL();
   // await Homepage.goButton();
   // expect(Homepage.getCount()).toBe('3');
    
    
  });
});
