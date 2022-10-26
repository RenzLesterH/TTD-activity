const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Fibonacci", function(){
    let items = [0,1,2,5,6,7];
    let result_items = [0,1,1,5,8,13];

    for(let i = 0; i < items.length; i++){
        it('fibonacci('+items[i]+') to return '+result_items[i], async function(){
            let num = items[i];
            let challenges_in = new challenge();
            let data = await challenges_in.fibonacci(num);
            expect(data).to.equal(result_items[i]);
        });
    }
});
