// **********
// STOLE ALL THE STARTING SUFF
// **********

// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");

  
// Convert the array of strings into an array of numbers.
//  console.table(stringArray)
// debugging

// removed itteration... fail
// for (let i = 0; i < stringArray.length; i++) {

// removed set... also fail

// it gave me the unique vlaues but I didnt want to make a comparison or if/then
// to itterate throu them (i did anyway but it looked simpler)

//   function countUnique(iterable) {
//     return new Set(iterable);
//   }


// object initialization to hold the uniques and their counts
  const counts = {};
//  hadn't seen the use of "?" before so I settled on this. A very pretty if/then/else
  for (const num of stringArray) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  console.log(counts);

  // ***********
  // This doesn't look like HOURS of rabbit holes, but it was
  // of course... only a single add/commit... bad habbit