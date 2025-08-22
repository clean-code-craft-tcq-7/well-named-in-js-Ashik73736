const ColorPair = require("./colorPair");
const { getColorFromPairNumber, getPairNumberFromColor } = require("./translator");
const { generateManual } = require("./manual");

function runTests() {
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");

    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "RED");
    console.assert(testPair1.minorColor === "GREEN");

    let testPair2 = new ColorPair("YELLOW", "GREEN");
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In] Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 18);

    testPair2 = new ColorPair("RED", "BLUE");
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In] Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 6);

    console.log("\nManual Preview:\n");
    console.log(generateManual());
}

module.exports = { runTests };
