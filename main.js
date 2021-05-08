const typeText = document.getElementById("type-test-text");
const inputText = document.getElementById("user-input");
var currentWordSpan = typeText.firstChild;
document.getElementById('slash').style.visibility = 'hidden';

var wordsArray = ["the", "and", "you", "that", "was", "for", "are", "with", "his", "they", "one", "have", "this", "from", "had", "not", "word", "but", "what", "some", "can", "out", "other", "were", "all", "there", "when", "use", "your", "how", "said", "each", "she", "which", "their", "time", "will", "way", "about", "many", "then", "them", "write", "would", "like", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "come", "did", "number", "sound", "most", "people", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"];
var typeTextArray = [];
var typeTextIdx = 0;

var wordCount = 15;
var characterCount = 0;
var numCorrect = 0;
var numErrors = 0;
var startTime = null;
var endTime = null;
var isFirstInput = true;


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function setTypeText(numWords) {
    // removes all child nodes from typeText div
    while (typeText.firstChild) {
        typeText.removeChild(typeText.firstChild);
    }

    // gets new shuffled array of words
    typeTextArray = shuffle(wordsArray).slice(0, numWords);

    // appends each word with its own span as a child node
    for (let i = 0; i < typeTextArray.length; i++) {

        let newWordSpan = document.createElement('span');
        if (i === typeTextArray.length - 1) {
            newWordSpan.textContent = typeTextArray[i];
        }
        else if (i === 0) {
            newWordSpan.textContent = typeTextArray[i] + " ";
            newWordSpan.className = "current";
        }
        else {
            newWordSpan.textContent = typeTextArray[i] + " "
        }
        typeText.appendChild(newWordSpan);
    }

    // sets current word span pointer
    currentWordSpan = typeText.firstChild;
}

function onRestartButtonClick() {
    setTypeText(wordCount);
    inputText.value = "";
    typeTextIdx = 0;
    characterCount = 0;
    numCorrect = 0;
    numErrors = 0;
    isFirstInput = true;
    startTime = null;
    endTime = null;
    document.getElementById('user-input').focus();
    document.getElementById('slash').style.visibility = 'hidden';
    document.getElementById('wpm-display').textContent = "";
    document.getElementById('acc-display').textContent = "";
}

function calculateWPM() {
    // https://www.speedtypingonline.com/typing-equations
    let delta = (endTime - startTime)/1000;
    let mins = delta/60.0;
    let grossWPM = (characterCount/5.0)/mins;
    console.log(delta, mins, characterCount, grossWPM);
    return Math.max(grossWPM - numErrors/mins, 0);
}

function onTestEnd() {
    console.log("Accuracy:", (numCorrect)/wordCount);
    console.log("WPM:", calculateWPM());
    console.log(numErrors);
    document.getElementById('wpm-display').textContent = Math.round(calculateWPM()).toString();
    document.getElementById('acc-display').textContent = Math.round(100*(numCorrect)/wordCount).toString() + "%";
    document.getElementById('slash').style.visibility = 'visible';
}

function getDifference(target, s) {
    let diff = 0;
    let getCounter = (str) => {
        let str_counter = {};
        for (let i = 0; i < str.length; i++) {
            if (str_counter.hasOwnProperty(str.charAt(i))) {
                str_counter[str.charAt(i)]++;
            }
            else {
                str_counter[str.charAt(i)] = 1;
            }
        }
        return str_counter;
    };

    let target_counter = getCounter(target);
    let s_counter = getCounter(s);
    for (const c in target_counter) {
        if (s_counter[c]) {
            diff += Math.abs(s_counter[c] - target_counter[c]);
        }
        else {
            diff += target_counter[c];
        }
    }
    return diff;
}

inputText.addEventListener("keypress", e => {
    if (typeTextIdx === wordCount - 1 && inputText.value + e.key === typeTextArray[typeTextIdx]) {
        endTime = Date.now();
        currentWordSpan.className = "correct";
        numCorrect += 1;
        onTestEnd();
    }

    if (typeTextIdx > typeTextArray.length - 1) {
        return;
    }

    if (inputText.value.charAt(0) === " ") {
        inputText.value = inputText.value.slice(1);
    }

    if (isFirstInput) {
        startTime = Date.now();
        isFirstInput = false;
    }
    // user types full word
    if (e.key === ' ') {
        if (inputText.value === typeTextArray[typeTextIdx]) {
            currentWordSpan.className = "correct";
            if (currentWordSpan.nextSibling) {
                currentWordSpan = currentWordSpan.nextSibling;
                currentWordSpan.className = "current";
            }
            numCorrect += 1;
        }
        else {
            currentWordSpan.className = "incorrect";
            if (currentWordSpan.nextSibling) {
                currentWordSpan = currentWordSpan.nextSibling;
                currentWordSpan.className = "current";
            }
            let diff = 0;
            if (inputText.value === ' ' || inputText.value === '') {
                diff = typeTextArray[typeTextIdx].length;
            }
            else {
                diff = getDifference(typeTextArray[typeTextIdx], inputText.value);
            }
            numErrors += diff;
        }
        if (typeTextIdx === wordCount - 1) {
            endTime = Date.now();
            onTestEnd();
        }
        typeTextIdx += 1
        characterCount += inputText.value.length;
        inputText.value = "";
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    setTypeText(wordCount);
    document.getElementById('user-input').focus();
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'tab') {
        onRestartButtonClick();
    }
});