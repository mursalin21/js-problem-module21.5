//1. Write 3 variables(num, string, boolean)
let num = 23;
let name = "Mursalin";
let isStrong = true;

//2. 2 vars (let, const)
let hem = "hello";
const pem = 34;
hem = "mello";

//3. Simple Match operations two vars to + - * /
let num1 = 34;
let num2 = 23;

console.log(34+23);
console.log(34-23);
console.log(34*23);
console.log(34/23);

//comparison between two vars

const num3 = 23;
const num4 = 26;

if(num3 > num4){
    console.log("num3 is greater!")
}
else if(num3 < num4){
    console.log("num4 is greater!")
}
else{
    console.log("They are equal!")
}

//two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition

const num5 = 12;
const num6 = 16;
const num7 = 26;

if(num5 > num6 && num5 > num7){
    console.log("num5 is the largest!");
}
else if(num6 > num5 && num6 > num7){
    console.log("num6 is largest!");
}
else{
    console.log("num7 is the largest!");
}

//while loop to show odd numbers between 7 and 19

var i = 7;

while(i <= 19){
    if(i % 2 != 0){
        console.log(i);
    }
    i++;
}

//declare an array. number of elements. update 4th pos element

let arr = [23, 54, 67, 19, 84, 547, 58, 34, 91];

console.log(arr.length);

arr[3] = 20;
console.log(arr)

arr.push(98);
arr.pop();

console.log(arr.indexOf(20));

for(const num of arr){
    console.log(num);
}

console.log("Greater than 80");
for(const num of arr){
    if(num > 80){
        console.log(num);
    }
}

var phone = {
    name: "Samsung s20+",
    price: 64500,
    camera: 42,
    storage: "128GB"
}

phone.storage = "256GB"
console.log('phone storage', phone.storage);