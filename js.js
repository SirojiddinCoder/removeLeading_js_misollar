//  Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
//   Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
//   Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).


1;
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// •  Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// •  Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

// •  removeLeadingTrailing("230.000") ➞ "230"
// •
// •  removeLeadingTrailing("00402") ➞ "402"
// •
// •  removeLeadingTrailing("03.1400") ➞ "3.14"
// •
// •  removeLeadingTrailing("30") ➞ "30"

2;
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

3;
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// reverseAndNot(123) ➞ 321123

// reverseAndNot(152) ➞ 251152

// reverseAndNot(123456789) ➞ 987654321123456789

4;
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"



// 1-masala  removeLeadingTrailing("230.000") ➞ "230"

// n = "230.000";
// function str1(n) {
//     let num = parseFloat(n);
//     return num === Math.floor(num) ? Math.floor(num).toString() : num.toString();


//   }

//   console.log(str1(230.000));


// 2 -usul while da
// let n = "230.000"
// Result  = (parseFloat(n));
// console.log(Result);
// while (Result>0 && Result% 10 == 0)
// {
//     Result = Result / 1;
// }

// console.log(Result);