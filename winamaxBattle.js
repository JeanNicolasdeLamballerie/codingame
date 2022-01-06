/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// program to implement queue data structure

const getValue = (card) => {
    //console.error(card)
    let val = card[0];
    if(val == 1) {
        if(card[1] == 0){
            val = "10"
        }
    }
    const parsed = parseInt(val)
    if(val === "10"){
        console.error(val, parsed)
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
    
    // remove element from the queue
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

const war = (q1, q2, c1, c2) => {
    //Setting the 3 cards set aside + initial card together to be added to the deck later
    
    
    let cardsP1 = c1
    cardsP1.push(q1.dequeue(), q1.dequeue(), q1.dequeue())
    
    
    let cardsP2 = c2
    cardsP2.push(q2.dequeue(), q2.dequeue(), q2.dequeue())
    

    const cardP1 = q1.dequeue();
    const cardP2 = q2.dequeue();
    cardsP1.push(cardP1);
    cardsP2.push(cardP2);
    // PAT during a war
    if (cardsP1.includes(false) || cardsP2.includes(false)){
        console.error('false found : ', cardsP1, cardsP2, rounds)
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
        c1.push(cardP1);
        c2.push(cardP2);
        console.error('queued war')
     war(q1, q2, c1, c2)
    }

    }
}


let queueP1 = new Queue();
let queueP2 = new Queue();


const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    const cardValue = getValue(cardp1)

    queueP1.enqueue([cardValue]);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2
    const cardValue = getValue(cardp2)

    queueP2.enqueue([cardValue]);

}
var playing = true;
var rounds = 0;
console.error('queue p1', queueP1.items)
console.error('queue p2', queueP2.items)
const play = () => {

while(playing){
    //increment the number of rounds played

    const cardP1 = queueP1.dequeue();
    const cardP2 = queueP2.dequeue();

    // console.error('cardP1 : ', cardP1)
    // console.error('cardP2 : ', cardP2)
    // console.error ('win : ',cardP1>cardP2, cardP2>cardP1, rounds )



    if (cardP1 === false){
        console.log('2 '+rounds);
        playing = false;
    }
    if (cardP2 === false){
        console.log('1 '+rounds);
        playing = false;
    }

    if (cardP1>cardP2){
        queueP1.enqueue([cardP1, cardP2])
        console.error("P1 win, P1 size", queueP1.size())

    }
    else if (cardP2>cardP1){
        queueP2.enqueue([cardP1, cardP2])
        console.error("P2 win, P2 size", queueP2.size())
    } else {
        war(queueP1, queueP2, [cardP1],[cardP2])
    }
    rounds+=1;
}

}
play();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
