let topFr = {
    numerator: 1,
    denominator: 2,
}

let bottomFr = {
    numerator: 1,
    denominator: 5,
}

function additionFr (a, b) {
    numerator = a.numerator * b.denominator + b.numerator * a.denominator;
    denominator = a.denominator * b.denominator;

    console.log (`${numerator} / ${denominator}`);
}

function substractionFr (a, b) {
    numerator = a.numerator * b.denominator - b.numerator * a.denominator;
    denominator = a.denominator * b.denominator;

    console.log (`${numerator} / ${denominator}`);
}

function multiplicationFr (a, b) {
    numerator = a.numerator * b.numerator;
    denominator = a.denominator * b.denominator;

    console.log (`${numerator} / ${denominator}`);
}

function divisionFr (a, b) {
    numerator = a.numerator * b.denominator;
    denominator = a.denominator * b.numerator;

    console.log (`${numerator} / ${denominator}`);
}

additionFr (topFr, bottomFr);
substractionFr (topFr, bottomFr);
multiplicationFr (topFr, bottomFr);
divisionFr (topFr, bottomFr);