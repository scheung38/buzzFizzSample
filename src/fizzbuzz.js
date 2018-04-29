exports.run = function (min, max) {
    const output = [];

    for (let i = min; i < max; i++) {
        output[i] = undefined;
    }

    return output;
};

exports.getResult = function (value) {
    return value;
};
