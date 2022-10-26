const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Swap Toward the Center", function(){
    let items = [
        [true,42,"Ada",2,"pizza"],
        [1,2,3,4,5,6],
        ["hi", "coding", "dojo", "fans"]
      ];
    let result_items = [
        ["pizza",2,"Ada",42,true],
        [6,5,4,3,2,1],
        ["fans","dojo","coding","hi"]
      ];

    for(let i = 0; i < items.length; i++){
        it('swapTowardCenter(['+items[i]+']) to return ['+result_items[i]+']', async function(){
            let arr = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.swapTowardCenter(arr);
            expect(data).deep.to.equal(result_items[i]);
        });
    }
});
