//Question 1

const challenge = "30 Days of Javascript";

//Question 2
console.log(challenge);

//Question 3
console.log(challenge.length);

//Question 4
console.log(challenge.toUpperCase());

//Question 5
console.log(challenge.toLowerCase());

//Question 6
console.log(challenge.slice(0, 2));

//Question 7
const sliceOut = "30 Days of JavaScript";
console.log(sliceOut.substring(3, 21));

//Question 8
const includeWord = "30 Days of JavaScript";
console.log(includeWord.includes("Script"));

//Question 9
const jsChallenge = "30 Days of JavaScript";
console.log(jsChallenge.split());

//Question 10
console.log(jsChallenge.split(""));

//Question 11
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

//Question 12
const replaceWord = "30 Days of JavaScript";
console.log(replaceWord.replace("JavaScript", "Python"));

//Question 13
const characterCode = "30 Days of JavaScript";
console.log(characterCode.charAt(15));

//Question 14
const characterIndex = "30 Days of JavaScript";
console.log(characterIndex.charCodeAt("J"));

//Question 15
const determineIndex = "30 Days of JavaScript";
console.log(determineIndex.indexOf("a"));

//Question 16
const determineLastIndex = "30 Days of JavaScript";
console.log(determineLastIndex.lastIndexOf("a"));

//Question 17
const newIndex =
  "You cannot end a sentence with because because because is a conjunction";
console.log(newIndex.indexOf("because"));

//Question 18
console.log(newIndex.lastIndexOf("because"));

//Question 19
console.log(newIndex.search("because"));

//Question 20
const removeSpaces = " 30 Days of JavaScript";
console.log(removeSpaces.trim(""));

//Question 21
const startMethod = "30 Days of JavaScript";
console.log(startMethod.startsWith("30"));

//Question 22
console.log(startMethod.endsWith("JavaScript"));

//Question 23
console.log(startMethod.match("a"));

//Question 24
const mergeWord = "30 Days of ";
console.log(mergeWord.concat("JavaScript"));

//Question 25
const repeatWord = "30 Days of JavaScript";
console.log(repeatWord.repeat(2));

//Exercise: Level 2

// //Question 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//Question 2
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//Question 3
const num = "10";
const numToInt = +num;
console.log(numToInt);

//Question 4
const checkNum = "9.8";
const numInt = +checkNum;
console.log(Math.ceil(numInt));

//Question 5
const checkString = "python";
const checkAnotherString = "jargon";
console.log(checkString.includes("on"));
console.log(checkAnotherString.includes("on"));

//Question 6
const checkJargon = "I hope this course is not full of jargon";
console.log(checkJargon.includes("jargon"));

//Question 7
//I added the Math.floor method to do away with the float and make integers
const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

//Question 8
const randomNumber = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber);

///Question 9
const ranNum = Math.floor(Math.random() * 256);
console.log(ranNum);

//Question 10
const givenWord = "JavaScript";
const newRandomWord = Math.floor(Math.random() * givenWord.length);
const genRanWord = givenWord[newRandomWord];
console.log(genRanWord);

//Question 11
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

//Question 12
const sliceBeause =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(sliceBeause.lastIndexOf("because"));
console.log(sliceBeause.substring(0, 31) + "is a conjunction");

//Exercises Level 3

//Question 1
const loveWord =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// console.log(loveWord.match("love"));
const checkLove = /love/gi;
console.log(loveWord.match(checkLove));

//Question 2
const countWords =
  "You cannot end a sentence with because because because is a conjunction";
console.log(countWords.match("because"));

const countWordsTogether = /because/gi;
console.log(countWords.match(countWordsTogether));

//Question 3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
