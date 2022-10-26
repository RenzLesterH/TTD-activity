const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Biggie Size", function(){
    let items = [
        [1,2,3],
        [-2, 0, 2],
        [2,10,100]
      ];
    let result_items = [
        [2,4,6],
        [-4,0,4],
        [4,20,200]
      ];

    for(let i = 0; i < items.length; i++){
        it('double(['+items[i]+']) to return ['+result_items[i]+']', async function(){
            let arr = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.double(arr);
            expect(data).deep.to.equal(result_items[i]);
        });
    }
});
