const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Biggie Size", function(){
    it('makeItBig([-1,3,5,-5]) to return [-1,"big","big",-5]', async function(){
        let arr = [-1,3,5,-5];
        let challenges_in = new challenge();
        let data = await challenges_in.makeItBig(arr);
        expect(data).deep.to.equal([-1,"big","big",-5]);
    });
    it('makeItBig([2,4,6]) to return ["big","big","big"]', async function(){
        let arr = [2,4,6];
        let challenges_in = new challenge();
        let data = await challenges_in.makeItBig(arr);
        expect(data).deep.to.equal(["big","big","big"]);
    });
    it('makeItBig([-4,0,4]) to return [-4,0,"big"]', async function(){
        let arr = [-4,0,4];
        let challenges_in = new challenge();
        let data = await challenges_in.makeItBig(arr);
        expect(data).deep.to.equal([-4,0,"big"]);
    });
});
