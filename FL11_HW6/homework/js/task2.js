let array = [], compare = 0, zero = 0, one = 1, two = 2, three = 3;
array.push(Math.abs(parseFloat(prompt('Enter the length of triangle side - a: ', ''))));
array.push(Math.abs(parseFloat(prompt('Enter the length of triangle side - b: ', ''))));
array.push(Math.abs(parseFloat(prompt('Enter the length of triangle side - c: ', ''))));
if (array[zero] + array[one] > array[two] && array[zero] + array[two] > array[one] &&
    array[one] + array[two] > array[zero]) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i; j < array.length; j++) {
            if (i !== j) {
                if (array[i] === array[j]){
                    compare++;
                }
            }
        }
    }
    if (compare === three) {
        console.log('Equivalent triangle');
    }
    if (compare === one) {
        console.log('Isosceles triangle');
    }
    if (compare === zero){
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}

