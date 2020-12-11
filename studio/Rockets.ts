import { Astronaut } from './Astronauts';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    }

    sumMass( items: Payload[] ): number {
        let sumMass: number = 0;
        
        for(let item of items){
            sumMass += item.massKg
        }

        return sumMass;
    }

    currentMassKg(): number {
        let sumOfAstronauts: number= this.sumMass(this.astronauts);
        let sumOfCargoItems: number = this.sumMass(this.cargoItems);
        
        return sumOfAstronauts + sumOfCargoItems;
    }

    canAdd(item: Payload): boolean{

        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false
        }
    }
}