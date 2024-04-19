let ac = require("./airCondition.js");

describe('airCondition', ()=> {
    let airCondition;
    beforeEach (()=> {
        airCondition = new ac();
    })

    test("Turn Ac on", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
    })

    test("Turn ac off", ()=> {
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        airCondition.toggle();
        expect(airCondition.isPowerOn()).toBe(false);
    })

    test("Temperature increase Test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemperature();
        expect(result1).toBe(16)
        airCondition.increaseTemp();
        expect(airCondition.getAcTemperature()).toBe(17);
    })

    test("Temperature decrease Test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemperature();
        expect(result1).toBe(16)
        airCondition.decreaseTemp();
        expect(airCondition.getAcTemperature()).toBe(16);
    })

    test("Temperature decrese test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemperature();
        expect(result1).toBe(16)
        airCondition.increaseTemp();
        for (let index = 0; index < 16; index++) {
            airCondition.increaseTemp();
        }
        expect(airCondition.getAcTemperature()).toBe(30);
    })

})
