/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/



// game loop
//Solving with an array because it's more convenient. A direct object approach would most likely be more performant by removing steps.

type index = number;
const mountains: Array<number> = new Array(8);
mountains.fill(0);
while (true) {
    for (let i = 0; i < 8; i++) {
        const mountainH: number = parseInt(readline()); // represents the height of one mountain.
        mountains[i] = mountainH;
    }
    const max : number = Math.max.apply({}, mountains)
    const indexToDestroy : index = mountains.findIndex((val) => val ===max);
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(indexToDestroy);     // The index of the mountain to fire on.

}
