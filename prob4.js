function isSame(arr1, arr2) {
    // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// const a1 = [1, 2, 3];
// const a2 = [1, 2, 3];
// console.log(isSame(a1, a2));

// const a1 = [34, 5, 7, 9];
// const a2 = [34, 5, 7];
// console.log(isSame(a1, a2));

// const a1 = [1, undefined , 3];
// const a2 = [1,null ,3];
// console.log(isSame(a1, a2));

// const a1 = [1 , 4 , 5];
// const a2 = [1 , 4 , 5];
// console.log(isSame(a1, a2));

// const a1 = [1 , "4" , 4];
// const a2 = [1 , 4  , 4];
// console.log(isSame(a1, a2));

// const a1 = [2 , 5 , 6];
// const a2 = 256;
// console.log(isSame(a1, a2));

// const a1 = {data: [2 , 5 , 6] };
// const a2 = [2 , 5 , 6];
// console.log(isSame(a1, a2));


