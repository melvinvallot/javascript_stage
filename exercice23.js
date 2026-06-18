/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs: string[] = readline().split(' ');
const lightX: number = parseInt(inputs[0]); // the X position of the light of power
const lightY: number = parseInt(inputs[1]); // the Y position of the light of power
const initialTx: number = parseInt(inputs[2]); // Thor's starting X position
const initialTy: number = parseInt(inputs[3]); // Thor's starting Y position


  
    let y = initialTy;
    let x = initialTx;

// game loop
while (true) {
     let direction = "";
    const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    if (y > lightY) {
        direction += "N";
        y--;
    }
    if (y < lightY) {
        direction += "S";
        y++;
    }
    if (x > lightX) {
        direction += "W"; 
        x--
    }
    if (x < lightX) {
        direction += "E"; 
        x++
    }
    


    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(direction);
}