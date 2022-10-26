const chai = require('chai');
const expect = chai.expect;
const challenge = require("../controller/challenges");
describe("Fahrenheit to Celcius", function(){
    it('celciusToFahrenheit(0) to return 32', async function(){
        let num = 0;
        let challenges_in = new challenge();
        let data = await challenges_in.celciusToFahrenheit(num);
        expect(data).to.equal(32);
    });
    it('celciusToFahrenheit(10) to return 50', async function(){
        let num = 10;
        let challenges_in = new challenge();
        let data = await challenges_in.celciusToFahrenheit(num);
        expect(data).to.equal(50);
    });
    it('celciusToFahrenheit(100) to return 212', async function(){
        let num = 100;
        let challenges_in = new challenge();
        let data = await challenges_in.celciusToFahrenheit(num);
        expect(data).to.equal(212);
    });
});
