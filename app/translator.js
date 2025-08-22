const { MajorColorNames, MinorColorNames } = require("./constants");
const ColorPair = require("./colorPair");

function getColorFromPairNumber(pairNumber) {
    let minorSize = MajorColorNames.length;
    let majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }
    let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = Math.floor(zeroBasedPairNumber / minorSize);
    let minorIndex = zeroBasedPairNumber % minorSize;

    return new ColorPair(MajorColorNames[majorIndex], MinorColorNames[minorIndex]);
}

function getPairNumberFromColor(pair) {
    let majorIndex = MajorColorNames.indexOf(pair.majorColor);
    let minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: ${pair.toString()}`;
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

module.exports = { getColorFromPairNumber, getPairNumberFromColor };
