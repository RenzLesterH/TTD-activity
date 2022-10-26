const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Threes and Fives", function(){
    let items = [10,15];
    let result_items = [22,60];

    for(let i = 0; i < items.length; i++){
        it('threesFives('+items[i]+') to return '+result_items[i], async function(){
            let num = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.threesFives(num);
            expect(data).to.equal(result_items[i]);
        });
    }
});
