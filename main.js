
const userObj = {
    firstName: 'David',
    lastName: 'Behoian',
    age: 17,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(userObj);
console.log(userObj.fullName());



function defUpperStr(text) {
    return (text || 'DEFAULT TEXT').toUpperCase();
};

console.log(defUpperStr('My text'));
console.log(defUpperStr());



function evenFn(n) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i)
    };
};

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));



function weekFn(n) {
    switch (n) {
        case 1:
            return ('Понеділок');
        case 2:
            return ('Вівторок');
        case 3:
            return ('Середа');
        case 4:
            return ('Четверг');
        case 5:
            return ('Пятниця');
        case 6:
            return ('Субота');
        case 7:
            return ('Неділя');
        default:
            return null
    };

};

console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));





function ageClassification(n) {
    return (n < 0 || n > 122) ? null :
        (n === 0) ? null :
            (n >= 0 && n <= 24) ? 'Дитинство' :
                (n >= 24 && n <= 44) ? 'Молодість' :
                    (n >= 44 && n <= 65) ? 'Зрілість' :
                        (n >= 65 && n <= 75) ? 'Старість' :
                            (n >= 75 && n <= 90) ? 'Довголіття' :
                                (n >= 90 && n <= 122) ? 'Рекорд' :
                                    '';
};

console.log('    -1 :', ageClassification(-1));
console.log('     0 :', ageClassification(0));
console.log('     1 :', ageClassification(1));
console.log('    24 :', ageClassification(24));
console.log(' 24.01 :', ageClassification(24.01));
console.log('    44 :', ageClassification(44));
console.log(' 44.01 :', ageClassification(44.01));
console.log('    65 :', ageClassification(65));
console.log('  65.1 :', ageClassification(65.1));
console.log('    75 :', ageClassification(75));
console.log(' 75.01 :', ageClassification(75.01));
console.log('    90 :', ageClassification(90));
console.log(' 90.01 :', ageClassification(90.01));
console.log('   122 :', ageClassification(122));
console.log('122.01 :', ageClassification(122.01));
console.log('   150 :', ageClassification(150));

console.log('    -1 :', ageClassification(-1) === null);
console.log('     0 :', ageClassification(0) === null);
console.log('     1 :', ageClassification(1) === 'Дитинство');
console.log('    24 :', ageClassification(24) === 'Дитинство');
console.log(' 24.01 :', ageClassification(24.01) === 'Молодість');
console.log('    44 :', ageClassification(44) === 'Молодість');
console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість');
console.log('    65 :', ageClassification(65) === 'Зрілість');
console.log('  65.1 :', ageClassification(65.1) === 'Старість');
console.log('    75 :', ageClassification(75) === 'Старість');
console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття');
console.log('    90 :', ageClassification(90) === 'Довголіття');
console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд');
console.log('   122 :', ageClassification(122) === 'Рекорд');
console.log('122.01 :', ageClassification(122.01) === null);
console.log('   150 :', ageClassification(150) === null);



function oddFn(n) {
    let o = 3;
    while (o <= n) {
        console.log(o);
        o += 3;
    }
};
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a, b, callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    return callback(a, b);
};

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function cbPow(num, pow) {
    return Math.pow(num, pow);
};

function cbAdd(a, b) {
    return a + b;
};

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

