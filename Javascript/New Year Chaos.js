'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let chaos = false;
    var bribes = 0;

    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i+1) > 2) {
            chaos = true;
        }
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    if (chaos) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
