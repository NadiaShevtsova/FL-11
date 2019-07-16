const three = 3, numb1 = 1, numb2 = 2, numb3 = 3, numb5 = 5, numb8 = 8;

function getNumbers(str) {
    let arr = [], newArr = [];
    arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            newArr.push(Number(arr[i]));
        }
    }
    return console.log(newArr);
}

getNumbers('string');

function findType(...arg) {
    let arr = [...arg], arrTypeOfObj = {}, arrTypeOf = [];
    for (let i = 0; i < arr.length; i++) {
        arrTypeOf.push(typeof arr[i]);
    }
    for (let i in arrTypeOf) {
        if (arrTypeOfObj[arrTypeOf[i]] !== undefined) {
            arrTypeOfObj[arrTypeOf[i]]++;
        } else {
            arrTypeOfObj[arrTypeOf[i]] = 1;
        }
    }

    return arrTypeOfObj;
}

console.log(findType(null, numb5, 'hello'));

let array = [numb1, numb2, numb3];
executeForEach(array, function (el) {
    console.log(el);
});

function executeForEach(array, func) {
    let i = 0;
    for (i in array) {
        if (array.hasOwnProperty(i)) {
            func(array[i]);
        }
    }
}

function mapArray(array, func) {
    let transformedArray = [];
    executeForEach(array, function (el) {
        transformedArray.push(func(el));
    });

    return transformedArray;
}

let arr = [numb2, numb5, numb8];
console.log(mapArray(arr, function (el) {
    return el + three;
}));

function filterArray(array, func) {
    let filteredArray = [];
    executeForEach(array, function (el) {
        if (func(el)) {
            filteredArray.push(el);
        }
    });

    return filteredArray;
}

console.log(filterArray(arr, function (el) {

    return el > three;
}));

function showFormattedDate() {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date('2019-01-27T01:10:00');
    let monthIndex = date.getMonth();

    return `Date: ${monthNames[monthIndex]} ${date.getDate()} ${date.getFullYear()}`;
}

console.log(showFormattedDate());

function canConvertToDate(date) {
    let posibleData = new Date(date);

    return !(posibleData === 'Invalid Date');
}

console.log(canConvertToDate('2016-13-18T00:00:00'));

function daysBetween(firstDate, secondDate) {
    let koef = 86400000;
    let difference_dates = secondDate.getTime() - firstDate.getTime();
    let days = Math.round(difference_dates / koef);

    return days;
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let count = 0;
    let ageOfAdult = 18;
    let daysInYear = 365;
    for (let i = 0; i < data.length; i++) {
        let days = daysBetween(new Date(data[i].birthday), new Date());
        let years = days / daysInYear;
        if (years >= ageOfAdult) {
            count++;
        }
    }

    return count;
}

console.log(getAmountOfAdultPeople(data));

const obj =
    {
        keyOne: 1,
        keyTwo: 2,
        keyThree: 3
    };

function keys(obj) {
    let arrayObjKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrayObjKeys.push(key);
        }
    }

    return arrayObjKeys;
}

console.log(keys(obj));

function values(obj) {
    let arrayObjValues = [];
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            arrayObjValues.push(obj[value]);
        }
    }

    return arrayObjValues;
}

console.log(values(obj));