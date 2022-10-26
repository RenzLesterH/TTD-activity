const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Return Sum", function(){
    it('sum(3,2) to return 5', async function(){
        let num1 = 3;
        let num2 = 2;
        let challenges_in = new challenge();
        let data = await challenges_in.returnSum(num1, num2);
        expect(data).to.equal(num1+num2);
    });
    it('sum(3,10) to return 13', async function(){
        let num1 = 3;
        let num2 = 10;
        let challenges_in = new challenge();
        let data = await challenges_in.returnSum(num1, num2);
        expect(data).to.equal(num1+num2);
    });
    it('sum(-3,4) to return 1', async function(){
        let num1 = -3;
        let num2 = 4;
        let challenges_in = new challenge();
        let data = await challenges_in.returnSum(num1, num2);
        expect(data).to.equal(num1+num2);
    });
    it('sum(-5,10) to return 5', async function(){
        let num1 = -5;
        let num2 = 10;
        let challenges_in = new challenge();
        let data = await challenges_in.returnSum(num1, num2);
        expect(data).to.equal(num1+num2);
    });
});
