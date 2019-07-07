let two = 2;
let a1 = Math.abs(parseFloat(prompt('Enter the coordinate of point a1: ', '')));
let a2 = Math.abs(parseFloat(prompt('Enter the coordinate of point a2: ', '')));
let b1 = Math.abs(parseFloat(prompt('Enter the coordinate of point b1: ', '')));
let b2 = Math.abs(parseFloat(prompt('Enter the coordinate of point b2: ', '')));
let c1 = Math.abs(parseFloat(prompt('Enter the coordinate of point c1: ', '')));
let c2 = Math.abs(parseFloat(prompt('Enter the coordinate of point c2: ', '')));

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
    console.log('Invalid data');
} else {
    let x = (a1 + b1) / two;
    let y = (a2 + b2) / two;
    if (c1 === x && c2 === y) {
        console.log(true);
    } else {
        console.log(false);
    }
}

