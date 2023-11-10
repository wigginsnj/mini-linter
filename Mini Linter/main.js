// Step 1
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Step 2
let storyWords = story.split(' ');
let wordCount = storyWords.length



// Step 3
let betterWords = storyWords

betterWords.forEach((word, index) => {
    if(unnecessaryWords.indexOf(word) !== -1){
        betterWords.splice(index, 1);
    }
  });


// Step 4 - many times they have used these overused words
// --- remove all good words
let occurrences = betterWords.filter(x => overusedWords.some(a => x.includes(a)));
console.log(occurrences)
// --- count remaining bad words
let overusedCount = occurrences.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});




//  Step 5 - count how many sentences are in the paragraph.

let sentanceCount = 0;

storyWords.forEach((word, index) => {
    if(storyWords[index].includes('.') ||
    storyWords[index].includes('!')
    ){
        sentanceCount +=1;
    }
  });


// Step 6
console.log('Word count = ' + wordCount);
console.log('Sentance count = ' + sentanceCount);
console.log('Over used word count = ' + overusedCount) 
console.log(overusedCount) 

// Step 7 

console.log(betterWords.join(' ')) 
console.log(storyWords) 

//Step 8 - Here are some ideas:

//For the overused words, remove it every other time it appears.

function removeOverUsedWords(array, words) {

    //for each word to be replaced....
    words.forEach(element => {
        let replaceWord = element;
        let removeNextWord = true; //Use an alternating switch for every other scenario
        let startPos = 0;

        for (let index = 0; index < array.length; index++) {
             
            index2 = array.indexOf(replaceWord, startPos);
            if (index2 > -1) { // only splice array when item is found
                
                if (removeNextWord) {
                    array.splice(index2, 1); // 2nd parameter means remove one item only
                    removeNextWord = false;
                    index = index2;
            } 
                else {
                    startPos = index2 + 1;
                    removeNextWord = true;
                }
            }      
        }
    });

    console.log(array.join(' ')) 
    return array;
}

removeOverUsedWords(storyWords, overusedWords);




// Write a function that finds the word that appears the greatest number of times.
function mostCommonWord(array) {

    const frequencyMap = {}; // empty map object to store the frequency of each word in the array
    let maxElement = array[0];
    let maxCount = 1;

    array.forEach((word, index) => {
        const element = array[index];
        if (frequencyMap[element]) {
            frequencyMap[element] ++;
        } else {
            frequencyMap[element] = 1;
        }
        if (frequencyMap[element]>maxCount) {
            maxElement = element;
            maxCount = frequencyMap[element];
        }
        return maxElement;
      });

console.log(frequencyMap);
return maxElement;
}
console.log('Most common word: '+  mostCommonWord(storyWords));



// Replaced overused words with something else.
function element_replace(arr, find, replace) {

    const newArr = arr.map(function(x){return x.replace(find, replace);});
    return newArr
}
storyWords = element_replace(storyWords, 'really', 'unquestionably');
console.log(storyWords);