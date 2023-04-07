///// Question 1
let fst = +prompt("enter first Number")
let snd = +prompt("enter first Number")

if (fst > snd) {
    console.log(fst + " is bigger")
}


////// Question 2
let a = prompt("enter +ve or -ve number")
let i = Number(a)
if (a > 0) {
    alert("You enter Positive number")
} else if (a < 0) {
    alert("you enter Negtive number")
} else {

    alert("you enter other")
}


////// Question 3
let fstNum = +prompt("enter first number")
let sndNum = +prompt("enter second number")
let thrdNum = +prompt("enter third number")
let frthNum = +prompt("enter forth number")
let fvthNum = +prompt("enter fifth number")
if (fstNum > sndNum && fstNum > thrdNum && fstNum > frthNum && fstNum > fvthNum) {
    console.log(fstNum + " is greater")
} else if (sndNum > fstNum && sndNum > thrdNum && sndNum > frthNum && sndNum > fvthNum) {
    console.log(sndNum + " is greater")
} else if (thrdNum > fstNum && thrdNum > fstNum && thrdNum > frthNum && thrdNum > fvthNum) {
    console.log(thrdNum + " is greater")
} else if (frthNum > fstNum && frthNum > thrdNum && frthNum > sndNum && frthNum > fvthNum) {
    console.log(frthNum + " is greater")
} else if (fvthNum > fstNum && fvthNum > thrdNum && fvthNum > frthNum && fvthNum > sndNum) {
    console.log(fvthNum + " is greater")
} else {
    console.log("you enter other")
}



///// Question 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + ")" + "  " + "even" + "<br>")
    } else if (!i % 2 == 0) {
        document.write(i + ")" + "  " + "odd" + "<br>")
    }
}


////// Question 5

let numbers = +prompt("enter your number");
if (numbers > 90) {
    console.log("A Grade")
} else if (numbers > 80) {
    console.log("B Grade")
} else if (numbers > 70) {
    console.log("c Grade")
} else if (numbers > 60) {
    console.log("D Grade")
} else if (numbers < 60) {
    console.log("F Grade")
} else {
    console.log("you enter other")
}


//// Question 6
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")

    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


//// Question 7
let p, q;
for (let p = 1; p <= 5; p++) {
    for (let q = 1; q <= p; q++) {
        document.write("*")
    }
    document.write("<br>")

}