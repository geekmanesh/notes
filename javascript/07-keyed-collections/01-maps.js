const sayings = new Map();

sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

console.log(sayings.size);

console.log(sayings.get("dog"), sayings.get("cat"));
console.log(sayings.get("fox"));

console.log(sayings.has("bird"));

sayings.delete("dog");

console.log(sayings.has("dog"));

for (const [key, value] of sayings) {
    console.log(`${key}: ${value}`);
}