

// function setup() {
// 	console.log('setting up');
//   createCanvas(710, 600);
//   var randCount = [];
//   var len = 20;

// }

// function draw() {
//  background(255);
//   int index = randCount[Math.floor(Math.random() * (len - 0)) + 0];
//   stroke(0);
//   fill(175);
//   int w = width / len;

//   for (x = 0; x<len; x++){
//   	console.log(x);
//   	rect(x*w, height-randCount[x], w-1, randCount[x]);
//   }
// }

var randomCounts = [];


function setup() {
  console.log('setting up');
  createCanvas(640, 300);
  for(var i = 0; i<20;i++){
    randomCounts.push(0);
  }
  console.log('Random', randomCounts);
}

function draw() {
  
    var index = Math.floor(Math.random() * (20 - 0)) + 0;
    //console.log('random',index);
    randomCounts[index]++;
    console.log(randomCounts[index]);

    stroke(0);
    fill(175);
    var w = width / 20;

    //console.log("W::::", w);

    for(var x = 0; x < 20; x++){
      rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
     // console.log(randomCounts[x]);
    }
}



// var s = function( p ) {
//   var x = 100; 
//   var y = 100;
//   var randomCounts = [];

//   p.setup = function() {
//     console.log('setting up');
//     p.createCanvas(700, 410);
//   };

//   p.draw = function() {
//     //var rand = random(4);
//     //console.log('drawing', random);
//     console.log('draw');
//     var index = Math.floor(Math.random() * (20 - 0)) + 0;
//     console.log('random',index);
//     randomCounts [index];

//     p.stroke(0);

//     p.background(2);
//     p.fill(175);
//     var w = p.width / 20;

//     for(var x = 0; x < 20; x++){
//       p.rect(x*w, p.height-randomCounts[x], w-1, randomCounts[x]);
//       console.log(randomCounts[x]);
//     }
   
//   };
// };



// var myp5 = new p5(s,  'p5');