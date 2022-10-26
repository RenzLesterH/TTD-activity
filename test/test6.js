const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Sigma", function(){
    let items = [3,5,6,8];
    let result_items = [6,15,21,36];

    for(let i = 0; i < items.length; i++){
        it('sigma('+items[i]+') to return '+result_items[i], async function(){
            let num = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.sigma(num);
            expect(data).to.equal(result_items[i]);
        });
    }
});
