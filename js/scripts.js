// Bizniz Logic
function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    
    }
    let wordCount =0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
        if (!Number(element)) {
            wordCount++;
        }  
    });
    return wordCount;
}

function numberOfOccurencesInText(word, text) {
    const textArray = text.split("");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (element.toLowerCase(). includes(word.toLowerCase())) {
        wordCount++;
        }
    });
    return wordCount;
}

function includesRarestLetter(word) {
    if (word.toLowerCase().includes("q")) {
        return true;
    }
    return false;
}

function omitWord(sentence, word) {
    // split the sentence into an array of words
const words = sentence.split(" ");

// filter out the specified word
const filteredWords = words.filter((w) => w !== word);

// Join the filtered words back into a sentence
const omittedSentence = filteredWords.join(" ");

return omittedSentence;

}


// UI Logic

const sentence=  "zoinks! the quick brown fox jumps over the lazy dog"
const wordToOmit = "zoinks!";

const result = omitWord(sentence, wordToOmit);
console.log(result);