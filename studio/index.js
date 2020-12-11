"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
var Astronauts_1 = require("./Astronauts");
var Cargo_1 = require("./Cargo");
var Rockets_1 = require("./Rockets");
var falcon9 = new Rockets_1.Rocket('Falcon 9', 7500);
var astronauts = [
    new Astronauts_1.Astronaut(75, 'Mae'),
    new Astronauts_1.Astronaut(81, 'Sally'),
    new Astronauts_1.Astronaut(99, 'Charles')
];
for (var i = 0; i < astronauts.length; i++) {
    var astronaut = astronauts[i];
    var status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log(astronaut.name + ": " + status_1);
}
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster"),
];
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log(c.materials + ": " + loaded);
}
console.log("Final cargo and astronaut mass: " + falcon9.currentMassKg() + " kg.");