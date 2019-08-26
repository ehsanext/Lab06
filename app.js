
var myNum = {
    myMin: [23, 3, 11, 20, 20],
    myMax: [65, 24, 38, 38, 16],
    myAve: [6.3, 1.2, 3.7, 2.3, 4.6],
    myCity: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
    myHours:['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm' ]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function addNumber() {
    for (var j = 0; j < 50; j++) {
        myNum.myMin.push(getRandomInt(10));
        // console.log(myNum.myMin);
    }
}

var mySum = 0;
var mynewNum = 0;


for ( var k = 0; k < myNum.myCity.length; k++){
    var liEl = document.createElement('ul');
    liEl.textContent = myNum.myCity[k];
    document.getElementById('Forcast').appendChild(liEl);

        for ( var h = 0; h < myNum.myHours.length; h++){
            var liEl = document.createElement('li');
            mynewNum = getRandomInt(120);
            liEl.textContent = `${myNum.myHours[h]}: ${mynewNum} cookies`;
            mySum = mySum+mynewNum;
            document.getElementById('Forcast').appendChild(liEl);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Total: ${mySum} cookies \n`;
        document.getElementById('Forcast').appendChild(liEl);
        mySum = 0;
}





// var myHr = 6;
// var string = `${myHr} am`;

// function salesHours() {
//     for (var i = 0; i < 15; i++) {
//         if (string != `${myHr} pm` && myHr < 13) {
//             string = `${myHr} am`;
//             //console.log(string);
//         }
//         else {
//             string = `${myHr - 12} pm`;
//             //console.log(string);
//         }
//         myHr++;
//     }
// }


