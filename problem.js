//1. conversion (feet to inch)
function feetToInch(feet){
    return feet * 12;
}

console.log(feetToInch(3));


//2. conversion centimeter to meter
function centimeterToMeter(cm){
    return cm * 0.01;
}

console.log(centimeterToMeter(56));


//3. calculation
function pageRequirements(bookOne, bookTwo, bookThree){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const bookOneTotal = book1 * bookOne;
    const bookTwoTotal = book2 * bookTwo;
    const bookThreeTotal = book3 * bookThree;

    return bookOneTotal + bookTwoTotal + bookThreeTotal;
}

console.log(pageRequirements(3, 6, 7));

//4. Best Friends

const arr = ['a', 'abc', 'ab', 'cdef', 'a', 'alasd', 'ase'];
function bestFriend(names){
    let longest = names[0];
    for(const name of names){
        if(name.length > longest.length){
            longest = name;
        }
    }
    return longest;
}
console.log(bestFriend(arr));

//5. will stop loop if array has negative and returns only positive before negative number

const numArr = [3, 4, 1, 2, 8, 6, -3, 2, 1, 4];

function onlyPositive(arr){
    for(const num in arr){
        console.log(num);
    }
}

onlyPositive(numArr);