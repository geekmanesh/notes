const animalProto = {
    type: "Bears",
    displayType() {
        console.log(this.type);
    },
}

const bear = Object.create(animalProto);
bear.displayType()

const fish = Object.create(animalProto);
fish.type = "Chengoon";
fish.displayType();