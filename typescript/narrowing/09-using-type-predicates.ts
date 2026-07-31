function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly()
}