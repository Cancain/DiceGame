export class Dice {
    constructor(maxValue = 6){
        this.maxValue = maxValue;
        this.value = 0;
    }
    roll(){
        this.value = Math.ceil(Math.random() * this.maxValue);
    }    
}