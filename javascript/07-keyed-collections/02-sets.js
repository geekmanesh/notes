const mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add("Geek");

console.log(mySet.has(1),
    mySet.has("Geek"), mySet.delete(1), mySet.size);

for (const item of mySet) {
    console.log(item);
}