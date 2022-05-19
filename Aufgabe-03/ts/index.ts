//How I met your map
let testMap = new Map<string, string>();

mapDemo();

//Two and a half sets
let testSet = new Set<string>();

setDemo();

//The weak map theory
let testWeakmap = new WeakMap<String, string>();

weakMapDemo();

function mapDemo() {        
    // adds new entry
    testMap.set("Seiler", "Yannis");
    testMap.set("Hug", "Noel");

    // get 
    console.log("Map get ", testMap.get("Seiler"))

    // has
    console.log("Map has ", testMap.has("Seiler"))

    // size
    console.log("Map size ", testMap.size)

    // delete
    testMap.delete("Hug")

    // clear
    testMap.clear()
}


function setDemo() {
    // add
    testSet.add("Noel");
    testSet.add("Noel"); // unique

    console.log("Set add ", testSet);

    // has
    console.log("Map has ", testSet.has("Noel"));

    // delete
    testSet.delete("Noel ");

    // clear
    testSet.clear();

    // size
    console.log("Set size ", testSet.size)
}


function weakMapDemo() {
    let person : String = new String("Seiler");
    let person2 : String = new String("Hug");
    // adds new entry
    testWeakmap.set(person, "Yannis");
    testWeakmap.set(person2, "Noel");

    // get 
    console.log("WeakMap get ", testWeakmap.get(person))

    // has
    console.log("WeakMap has ", testWeakmap.has(person))

    // delete
    testWeakmap.delete(person2)
}