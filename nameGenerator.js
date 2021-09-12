export default class NameGenerator {
    constructor() {
        this.frontName = [
            "Brent",
            "Wood",
            "Ridge",
            "Bell",
            "Belle",
            "Stoke",
            "Stokes",
            "Lynn",
            "Linden",
            "Hill",
            "Brook",
            "Brooks",
            "Over",
            "Stone",
            "Stones",
            "Waters",
            "Park",
            "Lake",
            "Bandy",
            "Bel",
            "West",
            "Nash",
            "Curtis",
            "Nor",
            "South",
            "Kirk",
            "Claire",
            "Lin",
            "Hunt",
            "Buck",
            "Mary",
            "Wedge",
        ];
        this.backName = [
            "view",
            "mont",
            "wood",
            "meade",
            "brook",
            "boro",
            "haven",
            "dale",
            "ville",
            "crest",
            "shire",
            "ridge",
            "bend",
            "point",
            "moor",
            "moore",
            "stone",
            "bluff",
        ];
        this.roadName = [
            "Street",
            "Road",
            "Pike",
            "Boulevard",
            "Way",
            "Circle",
            "Court",
            "Lane",
            "Avenue",
            "Drive",
            "Place",
            "Trace",
            "Trail",
        ];
        this.prefix = [
            "Old",
            "New",
            "Olde"
        ];
        this.direction = [
            "North",
            "South",
            "East",
            "West"
        ];
    }

    // TODO: change from logging each part, to adding to a string, then printing at the end.
    createName(pre, suf) {
        let outputString = "";
        let pref = "";
        let front = "";
        let back = "";
        let road = "";
        let direct = "";
        // prefix
        if (Math.random() < pre) {
            pref = (this.prefix[Math.floor((Math.random() * (this.prefix.length)))]);
            pref += (" ");
        }
        // frontname, backname, roadname
        front = (this.frontName[Math.floor((Math.random() * (this.frontName.length)))]);
        back = (this.backName[Math.floor((Math.random() * (this.backName.length)))]);
        back += (" ");
        road = (this.roadName[Math.floor((Math.random() * (this.roadName.length)))]);
        // suffix
        if (Math.random() < suf) {
            direct = (" ");
            direct += (this.direction[Math.floor((Math.random() * (this.direction.length)))]);
        }
        outputString = pref + front + back + road + direct;
        return outputString;
    }

    generate(num) {
        let output = "";
        let numNames = num;
        for (let i = 0; i < numNames; i++) {
            output += this.createName(0.1, 0.2);
            output += '\n';
            //console.log(this.createName(0.1, 0.2));  // pre and suf probability
        }
        //console.log(output);
        return output;
    }
}
