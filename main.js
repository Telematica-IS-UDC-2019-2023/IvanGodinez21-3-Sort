var array1 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [21, 23, 25, 27, 29, 22, 24, 26, 28, 30, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var array3 = new Array;
array1.sort(function (a, b) {
    return a - b;
});
array2.sort(function (a, b) {
    return a - b;
});
for (i = 0; i < array1.length && i < array2.length; i++) {
    if (array1[i] < array2[i]) {
        array3.push(array1[i]);
        if (array1[i + 1] < array2[i]) {
            array3.push(array1[i + 1]);
        } else {
            array3.push(array2[i]);
        }
    } else {
        array3.push(array2[i]);
        if (array2[i + 1] < array1[i]) {
            array3.push(array2[i + 1]);
        } else {
            array3.push(array1[i]);
        }
    }
}
console.log(array1);
console.log(array2);
console.log(array3);