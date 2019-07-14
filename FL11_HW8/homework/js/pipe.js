function pipe(number) {
    let newNumber = number;

    for (let i = 1; i < arguments.length; i++) {
        newNumber = arguments[i](newNumber);
    }
    return newNumber;
}

function addOne(x) {

    return x + 1;
}

pipe(1, addOne, addOne);