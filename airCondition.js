class airCondition {
    constructor() {
        this.acIsOn = false;
        this.temp = 16;
    }
    isPowerOn() {
        return this.acIsOn
    }
    toggle(){
        this.acIsOn = !this.acIsOn;
    }
    increaseTemp(){
        if(this.isPowerOn() && this.temp >= 16 && this.temp < 30){
            this.temp += 1;
        }
    }
    getAcTemperature(){
        return this.temp;
    }

    decreaseTemp(){
        if(this.isPowerOn() && this.temp < 16 && this.temp >= 30){
            this.temp -= 1;
        }
    }


}
module.exports = airCondition;