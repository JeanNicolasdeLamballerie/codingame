// program to implement queue data structure

const getValue = (card) => {
    let val = card[0];

    //Convoluted solution because I used the first character instead of splicing the last and forgot the case for "10" where we need 2 characters.
    if(val == 1) {
        if(card[1] == 0){
            val = "10"
        }
    }
    const parsed = parseInt(val);
    if(val === "10"){
    }
    if (!isNaN(parsed)){
        return parsed;
    } else if (val === "J"){
        return 11;
    } else if (val === "Q"){
        return 12;
    } else if (val === "K"){
        return 13;
    } else if (val === "A"){
        return 14;
    }
    // If there's a parsing error, we can just check the final decks and see errors showing up instead of numbers.
    else return 'error'
};

class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    enqueue(element) {
        return this.items.push(...element);
    }
    
    // remove element from the queue / Return a false
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
        else return false;
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

const war = (c1, c2) => {
    // We go to war ! c1 are the cards from P1 that are currently in play, c2 are the cards from P2 that are currently in play.
    //Setting the 3 cards set aside + initial card together to be added to the deck later
    
    //local, temporary array containing the cards we use
    let cardsP1 = c1
    cardsP1.push(queueP1.dequeue(), queueP1.dequeue(), queueP1.dequeue())
    
    
    let cardsP2 = c2
    cardsP2.push(queueP2.dequeue(), queueP2.dequeue(), queueP2.dequeue())
    

    const cardP1 = queueP1.dequeue();
    const cardP2 = queueP2.dequeue();
    cardsP1.push(cardP1);
    cardsP2.push(cardP2);
    // PAT during a war
    if (cardsP1.includes(false) || cardsP2.includes(false)){
        console.error('false found (PAT) : ', "cards in play player one : ", cardsP1, "cards in play player two : ", cardsP2, "at round ", rounds)
        console.log('PAT')
        playing = false;
    }

    // Battle
    else {

        if (cardP1>cardP2){
            console.error('P1 wins during war : (round '+rounds+')', [...cardsP1, ...cardsP2])
            queueP1.enqueue([...cardsP1, ...cardsP2])
        }
        else if (cardP2>cardP1){
            console.error('P2 wins during war : (round '+rounds+')', [...cardsP1, ...cardsP2])

            queueP2.enqueue([...cardsP1, ...cardsP2])
    } else {
        console.error('queued war')

        // We queue another war : we pass the temporary arrays as parameters to be bet in the next war.
     war(cardsP1, cardsP2)
    }

    }
}

// We create our decks of cards
let queueP1 = new Queue();
let queueP2 = new Queue();


const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    const cardValue = getValue(cardp1)

    //We populate our deck for player 1.
    queueP1.enqueue([cardValue]);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2
    const cardValue = getValue(cardp2)

    //We populate our deck for player 2.
    queueP2.enqueue([cardValue]);

}
var playing = true;
var rounds = 0;
const play = () => {

while(playing){
    //remove the two cards we want to compare from each queue
    const cardP1 = queueP1.dequeue();
    const cardP2 = queueP2.dequeue();

    //if there's no more card (dequeue returns false), we set a winner
    if (cardP1 === false){
        console.log('2 '+rounds);
        playing = false;
    }
    if (cardP2 === false){
        console.log('1 '+rounds);
        playing = false;
    }
    //P1 wins a battle
    if (cardP1>cardP2){
        queueP1.enqueue([cardP1, cardP2])

    }
    //P2 wins a battle
    else if (cardP2>cardP1){
        queueP2.enqueue([cardP1, cardP2])
    } else {
        // We have a war (possibly multiple, war is a recursive function)
        war([cardP1],[cardP2])
    }
    // The battle/war(s) are over

    //We can increment the number of rounds played
    rounds+=1;
}

}
play();
