export function weightedSwitch(weightedFuncs) {
    var funcIntervals = new Array(weightedFuncs.length);

    // Convert the percentage weights to fractions (by dividing by 100)
    var weightSum = 0;
    for (var i = 0; i < weightedFuncs.length; i++) {
        // Normalize the weight by dividing by 100
        weightedFuncs[i][0] = weightedFuncs[i][0] / 100;
        funcIntervals[i] = {
            start: weightSum,
            end: weightSum + weightedFuncs[i][0],
            func: weightedFuncs[i][1],
        };
        weightSum += weightedFuncs[i][0];
    }

    // Ensure the weights add up to 1 (or 100%)
    if (Math.abs(weightSum - 1) > 0.0001) {
        throw new Error('The sum of function weights should be 1 (100%), but is ' + weightSum);
    }

    return function (val) {
        var guess, min = 0, max = funcIntervals.length - 1;
        while (min <= max) {
            guess = Math.floor((max + min) / 2);

            if (val >= funcIntervals[guess].end) {
                min = guess + 1;
            } else if (val < funcIntervals[guess].start) {
                max = guess - 1;
            } else {
                return funcIntervals[guess].func;
            }
        }
    }
}
