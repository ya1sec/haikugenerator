// DEFINE VARIABLES

var oneSyl = [
  "come",
  "Forty-five",
  "How",
  "invisible",
  "learn,",
  "most",
  "real",
  "soluble",
  "Thank",
  "there",
  "two",
  "What",
  "You",
  "You",
  "ANDRÃ‰",
  "because",
  "Compare",
  "donâ€™t",
  "Let",
  "LOUIS",
  "MAX",
  "PHILIPPE",
  "sic",
  "Still,",
  "1",
  "1st",
  "2nd",
  "3rd",
  "8,",
  "A",
  "achieve",
  "acquire",
  "advantage",
  "affirmative",
  "aflame",
  "aims,",
  "am,",
  "ample",
  "approve",
  "art,",
  "aside",
  "assemblage",
  "assume",
  "AT",
  "atmosphere",
  "BÃ©thune",
  "BALL",
  "be",
  "bell",
  "best,",
  "BIG",
  "blood",
  "blue",
  "boots",
  "borne",
  "Braque",
  "breast",
  "bridge",
  "brook,",
  "cat",
  "ce",
  "Champs",
  "CHANCE",
  "chase",
  "cheers",
  "church",
  "cloak,",
  "coffee",
  "comprise",
  "conceive",
  "concierge",
  "conducive",
  "cons",
  "convince",
  "cross",
  "dâ€™indÃ©pendence",
  "dâ€™une",
  "dance",
  "Day",
  "DAY",
  "days",
  "deprive",
  "detective",
  "dew",
  "dialogue",
  "did,",
  "disservice",
  "do,",
  "do",
  "does",
  "Does",
  "donâ€™t",
  "door",
  "draws",
  "drugs,",
  "drugs",
  "dwarf",
  "earth,",
  "embrace",
  "enable",
  "enrapture",
  "entitle",
  "et",
  "evoke",
  "Existence",
  "fair",
  "fais",
  "Far",
  "farm",
  "fear,",
  "fertile",
  "few",
  "find,",
  "fire",
  "First",
  "FIRST",
  "fish,",
  "fish",
  "five",
  "flying",
  "fool",
  "forbearance",
  "forsake",
  "freeing",
  "fresh",
  "FROM",
  "futile",
  "Gave",
  "genre",
  "ghost",
  "glass",
  "gloire",
  "God,",
  "group",
  "groups",
  "grows",
  "growth",
  "guerre",
  "hair",
  "HAVE",
  "HE",
  "heads",
  "heart",
  "heels",
  "help",
  "her",
  "high",
  "I",
  "improve",
  "increase",
  "indicate",
  "insurmountable",
  "intervene",
  "irascible",
  "it:",
  "it",
  "je",
  "joy",
  "June",
  "Kantâ€™s",
  "kinds",
  "knocks",
  "Know",
  "knowledge",
  "la",
  "language",
  "laquelle",
  "laugh",
  "lead",
  "leap",
  "left,",
  "les",
  "liable",
  "lions",
  "lions",
  "LOCKS",
  "loss",
  "lot",
  "Love",
  "lulls",
  "lying",
  "machine",
  "map",
  "mask",
  "me",
  "mean",
  "meant",
  "meet,",
  "Men",
  "men",
  "mesure",
  "mist",
  "monde",
  "nâ€™est",
  "ne",
  "night:",
  "Nor",
  "not,",
  "not",
  "Now,",
  "of,",
  "opportune",
  "or:",
  "Or",
  "oracle",
  "outrage",
  "own,",
  "pair",
  "past",
  "path",
  "pays",
  "pensÃ©e",
  "perforce",
  "permissible",
  "plan",
  "platitude",
  "plus",
  "POEM",
  "PRAYER",
  "preclude",
  "Press",
  "prey",
  "produce",
  "pros",
  "prose",
  "proud",
  "purpose",
  "push",
  "puts",
  "Q",
  "que",
  "race",
  "raise",
  "ray",
  "rays",
  "reach",
  "realize",
  "reasonable",
  "Red",
  "resolve",
  "ripe",
  "risk-free",
  "roof",
  "rooms",
  "Rrose",
  "sack",
  "said",
  "saint",
  "sapphire",
  "save",
  "say",
  "saying",
  "scraps",
  "see,",
  "seeing",
  "sets",
  "shame",
  "shook",
  "silk",
  "sins",
  "sleep",
  "soluble",
  "Some",
  "Someone",
  "song",
  "sont",
  "soon",
  "sort:",
  "sort",
  "sorts",
  "spark,",
  "spark",
  "spectacle",
  "speech",
  "sprung,",
  "STAG",
  "STILL",
  "still",
  "stood",
  "straws",
  "supreme",
  "sweet",
  "talk,",
  "task",
  "text",
  "Thank",
  "thank",
  "Thanks",
  "them",
  "therefore",
  "theyâ€™re",
  "thing",
  "thought!",
  "Three",
  "title",
  "TO",
  "trÃ¨s",
  "track",
  "track",
  "train",
  "translate",
  "treats",
  "tremble",
  "trial",
  "trials",
  "Try",
  "tune",
  "turns",
  "up",
  "vice",
  "views",
  "VILLAGE",
  "wait",
  "War",
  "war",
  "Watch",
  "WHERE",
  "WHITE",
  "Will",
  "win",
  "with",
  "wood",
  "Words,",
  "work",
  "work",
  "world,",
  "worse",
  "would,",
  "year",
  "years,",
  "years",
  "Yes,",
  "you:",
  "you",
  "you",
  "YOUR",
  "Youth",
  "Men",
  "grapes",
];

var twoSyl = [
  "relearn.",
  "takes",
  "basta!",
  "Ganser",
  "Rimbaud.",
  "ROBERT",
  "accept",
  "accepts,",
  "acclaim,",
  "action.",
  "adapt",
  "afield;",
  "agreeing",
  "ahead",
  "amount",
  "apart.",
  "army,",
  "asking",
  "asserts",
  "astray,",
  "attest",
  "away;",
  "BÃ©thune,",
  "BÃ©thune.",
  "ballet",
  "ballets.",
  "beauty",
  "BEAUTY",
  "below.",
  "benign",
  "betray",
  "bottom",
  "BRETON",
  "briefly,",
  "buildings",
  "carcass.",
  "case,",
  "cavil;",
  "ceasing",
  "cellar",
  "Ceylon",
  "charged",
  "charges",
  "Charming",
  "childhood.",
  "childish",
  "chooses,",
  "cited",
  "city,",
  "claiming",
  "closes",
  "color",
  "COLOR",
  "Coming",
  "compass,",
  "complaint",
  "conceal",
  "confess,",
  "conflict",
  "confront",
  "controls",
  "covers",
  "created",
  "creates",
  "Cumae,",
  "Curieâ€™s",
  "curing",
  "DAILY",
  "dazzling",
  "defeat,",
  "Delphi",
  "demand",
  "depends",
  "DESNOS",
  "detail.",
  "devil",
  "dizzying",
  "doctor",
  "draped",
  "drawbacks",
  "drowning",
  "efforts",
  "either",
  "employing;",
  "employs;",
  "enter",
  "essays",
  "exists.",
  "exists",
  "factor",
  "FADED",
  "failed,",
  "fatal",
  "fauna",
  "favor.",
  "favor",
  "feathersâ€¦",
  "fellow",
  "fever.",
  "finding",
  "Fine.",
  "fingers.",
  "flatter",
  "flora",
  "foreign",
  "forest",
  "formal",
  "forward,",
  "France.",
  "frightens",
  "function",
  "gases,",
  "glaring",
  "gleaming",
  "glowing",
  "goodness.",
  "grasped",
  "greatest",
  "grouped",
  "hammer",
  "happy",
  "hashish,",
  "hasten",
  "Hello.",
  "Here,",
  "highest",
  "highly",
  "himself;",
  "himself.",
  "houses.",
  "houses",
  "hurry",
  "ideal",
  "insert",
  "instructs",
  "intend",
  "into,",
  "island",
  "issued",
  "itself?**",
  "judged.",
  "Jules",
  "knocked",
  "lacking.",
  "laughter.",
  "laughter",
  "libel.",
  "life",
  "like,",
  "lodged",
  "longest",
  "looking",
  "MADAM,",
  "made,",
  "madman,",
  "maintain",
  "marquants",
  "merit",
  "monsters",
  "murder,",
  "murder",
  "musing,",
  "myself.",
  "name?",
  "name.",
  "neighbor.",
  "occult,",
  "occurs",
  "one,",
  "opium",
  "order,",
  "over.",
  "PAPER",
  "PARIS",
  "Pasteurâ€™s",
  "patents.",
  "patients.",
  "pattern",
  "perhaps,",
  "Perhaps.",
  "pieces",
  "piety",
  "Pisces,",
  "plantar",
  "pleasant",
  "plumbed.",
  "plunges",
  "Poetic",
  "POISSON",
  "power,",
  "preaches",
  "precious",
  "pretend,",
  "progress",
  "pursues",
  "questions,",
  "questions.",
  "Radios?",
  "random",
  "rape,",
  "readers.",
  "really.",
  "redeem",
  "reflex",
  "regard",
  "reject,",
  "reject",
  "remark,",
  "remarks",
  "Renard.",
  "replies,",
  "replies.",
  "reply",
  "research",
  "resort",
  "respects",
  "result,",
  "results",
  "reveal",
  "revert",
  "reviews",
  "revolts.",
  "roses",
  "ruby",
  "running",
  "Russian",
  "sacred",
  "scholars",
  "science,",
  "scoured",
  "second,",
  "seeming",
  "seized",
  "seizing",
  "serious,",
  "serum",
  "shudder,",
  "simple,",
  "since,",
  "singer",
  "slander",
  "slightly.",
  "social",
  "SOUPAULT",
  "speaking.",
  "springboards",
  "starting",
  "states",
  "stilled,",
  "stockings",
  "stronger?",
  "study,",
  "study.",
  "subjects",
  "SUITORSâ€™",
  "summer",
  "suspect,",
  "syntax",
  "system",
  "tabby",
  "talking",
  "tastes",
  "terror.",
  "theater,",
  "thereon,",
  "thesis,",
  "tickets;",
  "Today,",
  "today.",
  "transmit",
  "trembling,",
  "tubes",
  "turning",
  "UNDER",
  "vaguest",
  "valid,",
  "virtue,",
  "virtue.",
  "VITRAC",
  "wastes",
  "weather",
  "were,",
  "where,",
  "wherein",
  "Whether",
  "wholly",
  "worked",
  "worthless,",
  "writing,",
  "life",
  "oclock,",
  "patients",
  "reasons",
  "woman's",
];

var threeSyl = [
  "evoked.",
  "LAUTRÃ‰AMONT",
  "observe,",
  "Whatever",
  "Ã©pisodes",
  "abnormal",
  "accusers",
  "acquitted,",
  "admitting",
  "alone,",
  "apparent,",
  "ARAGON",
  "arrested",
  "arrives",
  "ARTISAN",
  "attention,",
  "awaiting",
  "BarriÃ¨res",
  "Beautiful",
  "Because,",
  "benefit",
  "benefits",
  "capable.",
  "champagne.",
  "Chesterton",
  "cinema?",
  "citizens",
  "compared",
  "concealed;",
  "conceived",
  "concocted",
  "concoction",
  "concrete,",
  "conductors.",
  "consciously.",
  "consciousness.",
  "conspires",
  "consumed,",
  "consumed",
  "contrary",
  "conviction",
  "criticism",
  "cutaneous",
  "dangerous",
  "darkened",
  "decency.",
  "decency",
  "deduced",
  "defaming",
  "defense.",
  "demanding,",
  "deplores",
  "desires",
  "destiny?",
  "develop",
  "devoted",
  "dialogue.",
  "dictates",
  "directly.",
  "disorder",
  "disposal,",
  "distantly,",
  "distorting",
  "distraction",
  "document",
  "Dodona,",
  "elephants",
  "elicit,",
  "encumber",
  "enemy;",
  "entreaty",
  "entrusted.*",
  "equally",
  "erroneous",
  "establish",
  "evokes",
  "examples.",
  "exchange.",
  "exchanged",
  "expanses",
  "expected",
  "expressed.",
  "exterior;",
  "faculties.",
  "figures",
  "finished",
  "firmament",
  "focused",
  "foretold,",
  "forever",
  "forgotten.",
  "formula,",
  "fortuitous",
  "future.",
  "general.",
  "governing",
  "guideposts",
  "headlines",
  "image,",
  "images.",
  "impartial",
  "imperfect;",
  "imperfect.",
  "impetus.",
  "incidents",
  "inciting",
  "included",
  "including",
  "increases",
  "indulgent",
  "inventor",
  "judgements",
  "justify",
  "likeness",
  "limiting",
  "limitless",
  "listener.",
  "listening",
  "located",
  "magnÃ©tiques,",
  "manifest,",
  "manifest",
  "memories,",
  "metallic",
  "modify",
  "MORISE",
  "Musketeers.",
  "mysterious",
  "negation",
  "newspapers:",
  "Nijinski",
  "obtained;",
  "obtrudes",
  "occultists",
  "occupy",
  "offenses,",
  "oneself,",
  "oneself.",
  "opinion*",
  "opponents.",
  "opposing",
  "oracle,",
  "organism",
  "outside,",
  "parallel",
  "perdition.",
  "perfectly",
  "pleasures",
  "polishing",
  "position",
  "possession",
  "possible.",
  "precludes",
  "presenting",
  "presiding",
  "prevailing",
  "principle,",
  "producing",
  "production",
  "profoundly",
  "properly",
  "property,",
  "prophetic",
  "proportion",
  "provision",
  "provokes",
  "quadrupeds.",
  "quantity",
  "rarefied",
  "realities.",
  "realizes",
  "receiving",
  "referring",
  "refuses",
  "regarding",
  "relishes",
  "relives",
  "repressed,",
  "respected",
  "respite,",
  "restricted",
  "resulted",
  "rigorous",
  "salvation,",
  "satisfy",
  "scientific",
  "sensorial",
  "sentiment",
  "Several",
  "SOLUBLE,",
  "solutions.",
  "spiritual",
  "strangely",
  "submitting",
  "suddenly",
  "suddenness",
  "suggestions,",
  "surprised,",
  "Surrealist,",
  "surreally",
  "suspension",
  "syndrome,",
  "Syphilis?",
  "tablecloth",
  "tantamount",
  "techniques",
  "therefrom",
  "together,",
  "totally",
  "translating",
  "undone,",
  "unfolded",
  "vehicles,",
  "verify",
  "violation",
  "wandering",
  "whatever",
  "whispered",
  "widespread",
  "liberty's",
  "Novalis",
];

var fourSyl = [
  "Cephalopods",
  "stigmatizing",
  "Baudelaire.",
  "punishable",
  "Echolalia.",
  "accordingly.",
  "affinities",
  "anecdotes",
  "applications",
  "appreciating,",
  "association",
  "associations.",
  "automatic",
  "basically",
  "carefully",
  "circumstances,",
  "circumstances?",
  "comparison,*",
  "consequently,",
  "contradiction",
  "contribution",
  "conventional",
  "conversation,",
  "corresponded",
  "definition.",
  "definition",
  "delivered,",
  "development",
  "dialectical",
  "disaffected",
  "disappeared.",
  "disappointing,",
  "discovery",
  "disordered,",
  "disturbances.",
  "effective,",
  "elliptical",
  "emanates",
  "encouraging.",
  "encouraging",
  "equivalent",
  "especially",
  "establishment",
  "evolution",
  "examining",
  "excitement",
  "extenuating",
  "felicitous",
  "forewarned",
  "formulated",
  "grammatical",
  "honorable",
  "ill-disposed",
  "indifferent",
  "interpreters,",
  "intimated",
  "introduction",
  "isolated",
  "jusquâ€™ici",
  "laissez-passer,",
  "lightning-filled",
  "Lutheranism.",
  "militates",
  "miraculous",
  "molecules",
  "morality,",
  "morality",
  "motivated",
  "nevertheless",
  "nonconformism",
  "obligations",
  "obscurity",
  "opposite,",
  "paradise,",
  "participer.",
  "Personally,",
  "phenomenon.",
  "philosopher",
  "philosophy,",
  "Photography?",
  "politeness.",
  "propensity",
  "Protestantism,",
  "publication",
  "Purgatory.",
  "reestablishing",
  "Reformation;",
  "relationship",
  "relationships?",
  "reservations",
  "sensational,",
  "sensitive.",
  "Similarly,",
  "simultaneous",
  "soliloquy",
  "subsequently",
  "substituted",
  "symptomatic.",
  "telephone?",
  "territory.",
  "tribulations.",
  "ultraviolet",
  "unbecoming,",
  "unimportant",
  "unlikely.",
  "unrestricted",
  "vulgarizers",
  "individuals",
];

var fiveSyl = [
  "examination",
  "absentmindedness",
  "assimilates.",
  "beside-the-point",
  "characteristics",
  "classification",
  "complimentary",
  "considerations",
  "despotically.",
  "elementary",
  "familiarized",
  "humanitarian",
  "imaginary",
  "inadmissible.",
  "incorporates",
  "indifference.",
  "infinitely",
  "interlocutors.",
  "interlocutors",
  "laboratory,",
  "manipulated",
  "medico-legal",
  "momentarily,",
  "participating.",
  "pathological",
  "popularizers",
  "premeditation.",
  "prolifically.",
  "relatively",
  "relativement",
  "solidarity.",
  "temporarily.",
  "unintegrated,",
  "voluntarily,",
];

var sixSyl = ["hallucinatory", "responsibility", "unfortunately,"];

var sevenSyl = "irresponsibility";

const line1 = document.getElementById("result");
const line2 = document.getElementById("result2");
const line3 = document.getElementById("result3");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");
const title = document.getElementById("haikutitle");

var line1text = line1.innerHTML;
var line2text = line2.innerHTML;
var line3text = line3.innerHTML;

// RANDOMLY SELECT A WORD FROM EACH SYLLABLE ARRAY

var rand1index = Math.floor(Math.random() * oneSyl.length);
var rand1 = oneSyl[rand1index++];

var rand2index = Math.floor(Math.random() * twoSyl.length);
var rand2 = twoSyl[rand2index];

var rand3index = Math.floor(Math.random() * threeSyl.length);
var rand3 = threeSyl[rand3index];

var rand4index = Math.floor(Math.random() * fourSyl.length);
var rand4 = fourSyl[rand4index];

var rand5index = Math.floor(Math.random() * fiveSyl.length);
var rand5 = fiveSyl[rand5index];

var rand6index = Math.floor(Math.random() * sixSyl.length);
var rand6 = sixSyl[rand6index];

// MAKE POSSIBLE FUNCTION COMBINATIONS FOR EACH LINE

console.log(rand1 + " " + rand2);
console.log(rand3 + " " + rand4);
console.log(rand5 + " " + rand1 + " " + rand1);

// 5 - 7 - 5

// LINE 1 = 5

// LINE 2 = 7

// LINE 3 = 5

// APPEND EACH LINE TO THE RESULT
function haiku() {
  line1.innerHTML = rand1 + " " + rand3;
  line2.innerHTML = rand5 + " " + rand2;
  line3.innerHTML = rand4;
  title.innerHTML = rand4;

  //   line1.innerText = rand1 + " " + rand2;
  //   line2.innerText = rand3 + " " + rand5;
  //   line3.innerText = rand6 + " " + rand1 + " " + rand1;
  //   title.innerText = rand4;
}

// generateElement.addEventListener("click", function () {
//   haiku();
// });

// IF RESULT CONTAINERS HAVE VALUES, RUN FUNCTION AGAIN ON CLICK

generateElement.onclick = function () {
  haiku();
};
