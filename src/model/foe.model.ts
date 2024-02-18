export class FoeModel {
    id: number;
    name: string;
    currentHP: number;
    currentCharge: number;
    maxCharge: number;
    aiPattern: number[];
    private patternPointer: number;

    constructor(id: number, name: string, currentHP: number, currentCharge: number, maxCharge: number, aiPattern: number[]) {
        this.id = id;
        this.name = name;
        this.currentHP = currentHP;
        this.currentCharge = currentCharge;
        this.maxCharge = maxCharge;
        this.aiPattern = aiPattern;

        this.patternPointer = 0;
    }

    getPatternPointer() {
        return this.patternPointer;
    }

    incrementPatternPointer() {
        this.patternPointer++;
    }

    incrementCharge() {
        this.currentCharge++;
    }
}