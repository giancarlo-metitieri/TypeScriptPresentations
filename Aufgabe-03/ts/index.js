//How I met your map
var testMap = new Map();
mapDemo();
//Two and a half sets
var testSet = new Set();
setDemo();
//The weak map theory
var testWeakmap = new WeakMap();
weakMapDemo();
function mapDemo() {
    // adds new entry
    testMap.set("Seiler", "Yannis");
    testMap.set("Hug", "Noel");
    // get 
    console.log(testMap.get("Seiler"));
    // has
    console.log(testMap.has("Seiler"));
    // size
    console.log(testMap.size);
    // delete
    testMap["delete"]("Hug");
    // clear
    testMap.clear();
}
function setDemo() {
    // add
    testSet.add("Noel");
    testSet.add("Noel"); // unique
    console.log(testSet);
    // has
    console.log(testSet.has("Noel"));
    // delete
    testSet["delete"]("Noel");
    // clear
    testSet.clear();
    // size
    console.log(testSet.size);
}
function weakMapDemo() {
    // adds new entry
    testWeakmap.set("Seiler", "Yannis");
    testWeakmap.set("Hug", "Noel");
    // get 
    console.log(testWeakmap.get("Seiler"));
    // has
    console.log(testWeakmap.has("Seiler"));
    // delete
    testWeakmap["delete"]("Hug");
}
