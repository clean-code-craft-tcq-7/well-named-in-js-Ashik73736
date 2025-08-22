const { MajorColorNames, MinorColorNames } = require("./constants");
const { getColorFromPairNumber } = require("./translator");

function generateManual() {
    let manual = "----- Color Code Manual -----\n";
    let totalPairs = MajorColorNames.length * MinorColorNames.length;

    for (let i = 1; i <= totalPairs; i++) {
        let pair = getColorFromPairNumber(i);
        manual += `Pair ${i}: ${pair.majorColor} - ${pair.minorColor}\n`;
    }
    return manual;
}

module.exports = { generateManual };
