const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Factorial", function(){
    let items = [3,5,7,8];
    let result_items = [6,120,5040,40320];

    for(let i = 0; i < items.length; i++){
        it('factorial('+items[i]+') to return '+result_items[i], async function(){
            let num = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.factorial(num);
            expect(data).to.equal(result_items[i]);
        });
    }
});
