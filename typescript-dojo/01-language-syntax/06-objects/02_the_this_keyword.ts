// NOTE: The this keyword is used when you want to make a method
// that is available to instances of an object

type Fighter = {
    fighterName: string;
    seriesName: string;
    screamAttack: () => void;
    displaySeriesName: () => void;
};


const fighter: Fighter = {
    fighterName: "Sasuke Uchiha",
    seriesName: "Naruto",

    screamAttack() {
        console.log(`Chidori!!!!!!!!!`);
    },

    displaySeriesName() {
        console.log(
            `${this.fighterName} ` 
            + `is from the series ${this.seriesName}`
        );
    }
    
}

fighter.screamAttack();

fighter.displaySeriesName();
