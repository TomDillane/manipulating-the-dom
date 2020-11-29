let tommy = document.getElementsByTagName('button')[1];
tommy.style.backgroundColor = "#ccc210";

function designChange() {
    document.getElementById('header').style.backgroundColor = 'green';
}

let rep = new Array('wow man', ' Far Out');


document.write(40 + 7);
document.write('Please Help, gods of the developers');
document.getElementById('new').innerText = `This is
 fucking new ${rep}`;
document.getElementById('divt').innerHTML = '<h1>Help</h1>';



let fruit1 = "Apple";
let fruit2 = "Pear";

if (fruit1 === "Apple" && fruit2 === "Pear") {
	console.log("Yummy!");
}

let veg = "Broccoli";

switch (veg) {
    case "Spuds": console.log("This is spuds");
    break;
    case "Carrots": console.log("This is carrots");
    break;
    case "Broccoli": console.log("This is broccoli");
    break;
    default: console.log("None of them")
}

let music = ['FNM', 'RHCP', 'Snoop', 'Bone Thugz']
for (let artist of music) {
    console.log(artist)
}

let sport = ['Rugby', 'Football', 'GAA', 'Cricket']
for (let m in sport) {
    console.log(sport[m])
}

let t = 0;
while (t < 3) {
    console.log('Hope is sparking');
    t++;
}

let g = 0;
do {
    console.log('maybe baby');
    g++
} while (g < 4);

let i;
for(i = 0; i < 10; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}

let j;
for(j = 0; j < 7; j++) {
    if (j === 4) {
        continue;
    }
    console.log(j);
}

let arr = [[1,2], [3,4], [5,6]];
let p;
let q;
for (p = 0; p < arr.length; p++) {
    
    for (q = 0; q < arr[p].length; q++) {
    console.log(arr[p][q]);
    }
}

function multiply(a,b) {
    return a * b;
}
console.log(multiply(2,7));



document.getElementById('divtd').innerHTML = '</h3>YAYAYAY</h3>';
document.getElementById('divtd').style.backgroundColor = 'green';
document.getElementById('divtd').style.textTransform = 'lowercase';

function ask(question, good, bad) {
    if (confirm(question)) {
        good();
    }
    else {
        bad();
    }
}
function yes() {
    document.getElementById('divtd').style.backgroundColor = 'blue';
}
function no() {
    document.getElementById('divtd').style.backgroundColor = 'pink';
}

ask("How is it?", yes, no);

function hello() {
    let greeting = "Hello";
    console.log(greeting);
}

hello();

let moto = {
    name: 'Julia',
    owner: 'TommyD',
    year: 2014,
    wheels: 2    
}
for (bike in moto) {
    document.getElementById('divtdi').innerHTML += moto[bike];
}
document.getElementById('divtdi').style.backgroundColor = "black";





function Car(year, owner, maker) {
    this.year = year;
    this.owner = owner;
    this.maker = maker;
    this.speak = function() {
        console.log('vroom');
    }
}
let myCar = new Car ('65', 'TommyD', 'Suzuki');
    console.log(myCar.owner, myCar.year);
    myCar.speak();

    let fruit = {
	type: "banana",
	humanize: function() {
		console.log(`Although I am ${this.type}, I can still talk!`);
	}
};

fruit.humanize();