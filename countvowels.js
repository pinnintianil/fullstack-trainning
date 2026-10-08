let text = "javascript";

let count = 0;

for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i].toLowerCase())) {
        count++;
    }
}

console.log("String:", text);
console.log("Vowels:", count);