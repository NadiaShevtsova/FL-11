function reverseNumber(numb) {
    let reversedNumber = Math.abs(numb).toString().split('').reverse().join('');

    return numb > 0 ? reversedNumber : -reversedNumber;
}

reverseNumber();