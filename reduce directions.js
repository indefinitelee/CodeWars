let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

// let oppositeDirs = {
// north: "south",
// south: "north",
// east: "west",
// west: "east"
// }
// // get rid of that nasty if and make a function

// function areOpps(a,b) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] f
//   }
// }

function dirReduc(arr){
  var i = 0;
  while(i < arr.length) {
    if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i+1] === "WEST") ||
    (arr[i] === "WEST" && arr[i+1] === "EAST")) {
        arr.splice(i, 2);
       // if you can reduce it decrement i
        i--;
    }
    else {
    // if you can't reduce it, increment i, so you can have a non-zero length array
        i++;
    }
  }
  return arr;
}
