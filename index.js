// Iteration 1: Names and Input
let hacker1 = "Tom";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Yiman";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let lengthName1 = hacker1.length;
let lengthName2 = hacker2.length;
if (lengthName1 > lengthName2) {
    console.log(`The driver has the longest name, it has ${lengthName1} characters.`);
} else if(lengthName1 < lengthName2){
    console.log(`It seems that the navigator has the longest name, it has ${lengthName2} characters!`);
} else if(lengthName1 === lengthName2) {
    console.log(`Wow, you both have equally long names, ${lengthName1} characters!`);
}

// Iteration 3: Loops
let nameUpperSpace = "";
for (let i = 0; i < lengthName1; i += 1) {
    nameUpperSpace += hacker1[i].toUpperCase();
    if (i === lengthName1 - 1) { //addition to stop one space early
        break;
    }
    nameUpperSpace += " ";
}
console.log(nameUpperSpace);

let nameReversed = "";
for (let j = lengthName2 -1; j >= 0; j -= 1) {
    nameReversed += hacker2[j];
}
console.log(nameReversed);

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if(hacker1 < hacker2){
    console.log(`Yo, the navigator goes first, definitely.`);
} else if(hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci mauris, feugiat eget dui sit amet, accumsan aliquet magna. Mauris non ex aliquet, luctus nisl eu, varius ipsum. Vestibulum dapibus nisi vulputate magna semper, vel cursus justo aliquet. Morbi fermentum aliquet nunc, id iaculis massa maximus ut. Praesent risus purus, blandit at libero maximus, fermentum imperdiet mi. Fusce id mauris lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non varius turpis. Ut quis semper enim. Pellentesque sagittis augue dolor, id dignissim tortor mollis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tempor sit amet dolor sed consequat. Nullam quis turpis non sem eleifend porta tempor in dui. Vivamus posuere orci quis tincidunt lobortis. Cras sed ullamcorper augue. Praesent laoreet ipsum et cursus iaculis. Aenean feugiat purus vel arcu posuere vestibulum sed ac magna. Mauris interdum suscipit euismod. Sed laoreet venenatis arcu, ut sollicitudin velit pharetra ut. Integer et elit orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis efficitur ex, sed lacinia tortor. Vivamus tincidunt blandit facilisis. Praesent risus mauris, scelerisque eu ipsum nec, ornare pulvinar arcu. Phasellus lacinia, nibh id convallis pharetra, est lectus auctor odio, sed imperdiet diam augue non ante. Curabitur neque nisi, facilisis nec venenatis non, vulputate a erat. Suspendisse elementum porta augue, nec bibendum felis pretium eu. Nam eu enim quis quam tristique congue. Fusce vel tincidunt turpis. Phasellus dolor orci, egestas et cursus ac, sodales vitae enim. Quisque ut consequat dui. Donec porta sem non lacus egestas imperdiet. Proin at placerat nunc, nec porttitor metus. Phasellus quis ante vel lacus placerat consectetur quis a nibh. Morbi vitae orci nulla. Integer sagittis ante id tellus euismod, ultricies consequat tellus malesuada. Sed urna lacus, mattis nec nisi vel, aliquam pharetra justo. Donec lacinia malesuada ex nec blandit.`
let wordCount = 0;
let etCount = 0;
if (longText !== "") {
    wordCount = 1;
}
for (let h = 0; h < longText.length; h += 1) {
    let checkForEt = (longText[h-1] + longText[h] + longText[h+1] + longText[h+2]).toLowerCase();
    if (longText[h] === " "){
        wordCount += 1;
    }
    switch(checkForEt){
        case " et ":
        case " et.":
        case " et,":
        case "undefinedet ":
        case "undefinedet,":
        case "undefinedet.":
        case " etundefined":
            etCount +=1;
            break;
        default:
            break;
    }
}
console.log(`This string contains ${wordCount} words.`);
console.log(`This string contains the word "et" ${etCount} times.`);

// Bonus 2:

let phraseToCheck = "Was it a car or a cat I saw?";
let noSymbols = "abcdefghijklmopqrstuvwxyz";
let cleanedPhrase = "";
let reversedCleanedPhrase = "";

phraseToCheck = phraseToCheck.toLowerCase();

for (let g = 0; g < phraseToCheck.length; g += 1) { //converted to lowercase and removing any characters that are not part of the standard alphabet
    if (noSymbols.includes(phraseToCheck[g])){
        cleanedPhrase += phraseToCheck[g];
    }
}

for (let f = cleanedPhrase.length -1; f >= 0; f -= 1){
    reversedCleanedPhrase += cleanedPhrase[f];
}

if (cleanedPhrase === reversedCleanedPhrase) {
    console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome!`);
}