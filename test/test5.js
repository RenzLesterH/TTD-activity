const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Return Array Count Greater than Y", function(){
    let items = [
        [2,3,5],
        [2,3,5],
        [4,10,15],
        [4,10,15]
      ];
    let other_item = [4,1,10,20];
    let result_items = [1,3,1,0];

    for(let i = 0; i < items.length; i++){
        it('returnArrayCountGreaterThanY(['+items[i]+']) to return '+result_items[i], async function(){
            let arr = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.returnArrayCountGreaterThanY(arr,other_item[i]);
            expect(data).deep.to.equal(result_items[i]);
        });
    }
});
