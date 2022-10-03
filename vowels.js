let str = "hello world";
let vow = ["a", "e", "i", "o", "u"]
function vowels() {
    let count = 0;
   
    for (let char of str) {
        if (vow.includes(char)) {
            count++
          
        }
    }
    return count
}
console.log(vowels(str));